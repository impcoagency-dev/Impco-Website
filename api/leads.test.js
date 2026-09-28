import { afterEach, test } from "node:test";
import assert from "node:assert/strict";
import handler from "./leads.js";

const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };

afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const key of ["BREVO_API_KEY", "BREVO_DOI_TEMPLATE_ID", "BREVO_LIST_ID", "BREVO_FOLDER_ID", "SITE_ORIGIN"]) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

function createResponse() {
  return {
    statusCode: 200,
    headers: {},
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      this.headers[name] = value;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    }
  };
}

function createRequest(body, ip) {
  return {
    method: "POST",
    headers: { origin: "https://impcoagency.agency", "x-forwarded-for": ip },
    body
  };
}

function validLead(overrides = {}) {
  return {
    name: "Ada Example",
    email: "ada@example.com",
    company: "Example Studio",
    interests: ["WEB", "3D"],
    projectDescription: "A product launch site",
    budget: "$3,000 – $10,000",
    consent: true,
    website: "",
    ...overrides
  };
}

test("rejects missing marketing consent on the server", async () => {
  const res = createResponse();
  await handler(createRequest(validLead({ consent: false }), "192.0.2.10"), res);
  assert.equal(res.statusCode, 400);
});

test("rejects malformed email and oversized fields", async (context) => {
  const malformed = createResponse();
  await handler(createRequest(validLead({ email: "not-an-email" }), "192.0.2.11"), malformed);
  assert.equal(malformed.statusCode, 400);

  const oversized = createResponse();
  await handler(createRequest(validLead({ projectDescription: "x".repeat(2001) }), "192.0.2.12"), oversized);
  assert.equal(oversized.statusCode, 400);
});

test("silently accepts the honeypot without calling Brevo", async () => {
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    throw new Error("should not call Brevo");
  };
  const res = createResponse();
  await handler(createRequest(validLead({ website: "spam" }), "192.0.2.13"), res);
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { ok: true });
  assert.equal(called, false);
});

test("submits validated contact attributes through Brevo DOI", async () => {
  process.env.BREVO_API_KEY = "test-key";
  process.env.BREVO_DOI_TEMPLATE_ID = "42";
  process.env.BREVO_LIST_ID = "17";
  process.env.SITE_ORIGIN = "https://impcoagency.agency";
  let requestBody;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://api.brevo.com/v3/contacts/doubleOptinConfirmation");
    assert.equal(options.headers["api-key"], "test-key");
    requestBody = JSON.parse(options.body);
    return { ok: true, status: 201, json: async () => ({}) };
  };

  const res = createResponse();
  await handler(createRequest(validLead(), "192.0.2.14"), res);
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { ok: true });
  assert.equal(requestBody.email, "ada@example.com");
  assert.deepEqual(requestBody.includeListIds, [17]);
  assert.equal(requestBody.templateId, 42);
  assert.equal(requestBody.redirectionUrl, "https://impcoagency.agency/contact?confirmed=1");
  assert.deepEqual(requestBody.attributes.INTERESTS, ["WEB", "3D"]);
  assert.equal(requestBody.attributes.MARKETING_CONSENT, true);
});

test("does not contact Brevo when server configuration is missing", async () => {
  delete process.env.BREVO_API_KEY;
  delete process.env.BREVO_DOI_TEMPLATE_ID;
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    throw new Error("should not call Brevo");
  };
  const res = createResponse();
  await handler(createRequest(validLead(), "192.0.2.15"), res);
  assert.equal(res.statusCode, 503);
  assert.equal(called, false);
});