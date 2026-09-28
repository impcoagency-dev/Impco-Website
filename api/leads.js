const BREVO_API = "https://api.brevo.com/v3";
const LIST_NAME = "Impcoagency Website Leads";
const INTERESTS = new Set(["WEB", "AI", "3D", "BRANDING", "OTHER"]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const recentSubmissions = new Map();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 5;

function response(res, status, body) {
  res.status(status).setHeader("Content-Type", "application/json").json(body);
}

function cleanText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[\u0000-\u001f\u007f]/g, "").slice(0, maxLength);
}

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (recentSubmissions.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT) {
    recentSubmissions.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  recentSubmissions.set(ip, timestamps);
  return false;
}

async function brevoRequest(path, apiKey, options = {}) {
  const result = await fetch(`${BREVO_API}${path}`, {
    ...options,
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      ...options.headers
    }
  });
  const body = await result.json().catch(() => ({}));
  if (!result.ok) {
    const error = new Error("Brevo request failed");
    error.status = result.status;
    error.body = body;
    throw error;
  }
  return body;
}

async function getLeadList(apiKey) {
  const listId = Number(process.env.BREVO_LIST_ID);
  if (Number.isSafeInteger(listId) && listId > 0) return listId;

  let offset = 0;
  let total = Infinity;
  while (offset < total) {
    const result = await brevoRequest(`/contacts/lists?limit=50&offset=${offset}`, apiKey);
    const existing = (result.lists || []).find((list) => list.name === LIST_NAME);
    if (existing) return existing.id;
    total = Number(result.count) || 0;
    offset += 50;
  }

  const folderId = Number(process.env.BREVO_FOLDER_ID);
  if (!Number.isSafeInteger(folderId) || folderId < 1) {
    throw new Error("Brevo list is missing and no valid folder is configured");
  }

  try {
    const created = await brevoRequest("/contacts/lists", apiKey, {
      method: "POST",
      body: JSON.stringify({ name: LIST_NAME, folderId })
    });
    return created.id;
  } catch (error) {
    const refreshed = await brevoRequest("/contacts/lists?limit=50&offset=0", apiKey);
    const concurrentlyCreated = (refreshed.lists || []).find((list) => list.name === LIST_NAME);
    if (concurrentlyCreated) return concurrentlyCreated.id;
    throw error;
  }
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return response(res, 405, { error: "Method not allowed" });
  }

  const origin = req.headers.origin;
  const allowedOrigin = process.env.SITE_ORIGIN || "https://impcoagency.agency";
  if (origin && origin !== allowedOrigin) {
    return response(res, 403, { error: "Forbidden" });
  }

  const contentLength = Number(req.headers["content-length"] || 0);
  if (contentLength > 12_000) return response(res, 413, { error: "Request too large" });

  const ip = cleanText((req.headers["x-forwarded-for"] || "").split(",")[0], 64) || "unknown";
  if (isRateLimited(ip)) return response(res, 429, { error: "Too many requests" });

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return response(res, 400, { error: "Invalid request" });
  }

  if (cleanText(body.website, 200)) return response(res, 200, { ok: true });

  if (
    (typeof body.name === "string" && body.name.length > 100) ||
    (typeof body.email === "string" && body.email.length > 254) ||
    (typeof body.company === "string" && body.company.length > 120) ||
    (typeof body.projectDescription === "string" && body.projectDescription.length > 2000)
  ) {
    return response(res, 400, { error: "Please check the required fields and try again." });
  }

  const name = cleanText(body.name, 100);
  const email = cleanText(body.email, 254).toLowerCase();
  const company = cleanText(body.company, 120);
  const projectDescription = cleanText(body.projectDescription, 2000);
  const budget = cleanText(body.budget, 40);
  const interests = Array.isArray(body.interests)
    ? [...new Set(body.interests.filter((item) => typeof item === "string" && INTERESTS.has(item)))]
    : [];
  const budgets = new Set(["", "Not sure yet", "Under $1,000", "$1,000 – $3,000", "$3,000 – $10,000", "$10,000+"]);

  if (!name || !email || !EMAIL_PATTERN.test(email) || !interests.length || body.consent !== true || !budgets.has(budget)) {
    return response(res, 400, { error: "Please check the required fields and try again." });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const templateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
  const siteOrigin = (process.env.SITE_ORIGIN || "https://impcoagency.agency").replace(/\/$/, "");
  if (!apiKey || !Number.isSafeInteger(templateId) || templateId < 1) {
    return response(res, 503, { error: "Lead form is not configured" });
  }

  try {
    const listId = await getLeadList(apiKey);
    await brevoRequest("/contacts/doubleOptinConfirmation", apiKey, {
      method: "POST",
      body: JSON.stringify({
        email,
        includeListIds: [listId],
        templateId,
        redirectionUrl: `${siteOrigin}/contact?confirmed=1`,
        attributes: {
          FIRSTNAME: name,
          COMPANY: company,
          INTERESTS: interests,
          PROJECT_DESCRIPTION: projectDescription,
          BUDGET: budget,
          MARKETING_CONSENT: true
        }
      })
    });
    return response(res, 200, { ok: true });
  } catch (error) {
    console.error("Brevo lead submission failed", error.status || "unknown status");
    return response(res, 502, { error: "Unable to process submission" });
  }
}