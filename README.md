# IMPCO Agency

## Run locally
1. Open this folder in VS Code.
2. Terminal -> New Terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Ctrl+click the localhost address.

## Easy editing
Open `src/config.js`. This is the main settings file.

- Company email: `contact@impcoagency.agency`
- WhatsApp: `447418320714`
- Social links: LinkedIn, X, Threads, YouTube, Instagram.

### Change 3D portfolio images

1. Put your image files in `public/assets`.
2. Open `src/config.js` and find `threeD`.
3. Find the project you want to edit.
4. Replace the filenames inside its `images: [ ... ]` list.

Each project can contain up to 5 images. The order in the list is the order shown in the carousel. To remove an image, delete its filename. To add a project, copy an existing project line and change its `id`, `title`, and image filenames. Use the exact filename, including `.jpg`, `.png`, or `.webp`.

Leave a social URL blank until the account exists. The icon will still be visible; replace the blank value with the full profile URL when ready.

The About section is linked from the header. Project and Contact links open the lead form at `/contact`; Privacy Policy and Terms of Service are built into the site.

## Brevo lead form deployment

The `/contact` form posts to the Vercel serverless function in `api/leads.js`. The function validates submissions on the server and sends project details to `contact@impcoagency.agency` through Brevo transactional email. The browser shows its received confirmation only after Brevo accepts that notification. The `contact@impcoagency.agency` sender must be verified in Brevo. Marketing consent is optional; opted-in visitors are added to `Impcoagency Website Leads` only after confirming from Brevo's double-opt-in email. The confirmation redirects to `/contact?confirmed=1`.

Configure these variables in the Vercel project settings for Production (and Preview if needed):

- `BREVO_API_KEY`: a private Brevo API v3 key. Never use a `VITE_` prefix.
- `BREVO_DOI_TEMPLATE_ID`: the numeric ID of a published Double Opt-In template in Brevo. Required only to process optional marketing consent.
- `SITE_ORIGIN`: the canonical HTTPS origin, such as `https://impcoagency.agency`.
- `BREVO_FOLDER_ID`: a valid Brevo contact folder ID, required only if the dedicated list does not already exist and must be created by the function.
- `BREVO_LIST_ID`: optional numeric ID of the dedicated `Impcoagency Website Leads` list. When set, it is used directly; otherwise the function searches by exact list name and creates the list in `BREVO_FOLDER_ID` only if absent.

Create or verify these contact attributes in Brevo before going live. `FIRSTNAME` and `EMAIL` are standard contact fields; create the remaining attributes if they do not exist:

- `COMPANY`: normal text
- `INTERESTS`: normal multiple-choice with options `WEB`, `AI`, `3D`, `BRANDING`, `OTHER`
- `PROJECT_DESCRIPTION`: normal text
- `BUDGET`: normal text
- `MARKETING_CONSENT`: normal boolean

Verify `contact@impcoagency.agency` as a sender in Brevo and enable transactional email for the API key. The DOI template is optional; when used, it must be active, contain Brevo's confirmation link, and be configured to redirect to the URL sent by the function. Review and publish it in Brevo, then set its ID as `BREVO_DOI_TEMPLATE_ID`. The hosting account must deploy Vercel Functions; a static-only export or host without function support will not process form submissions. A lightweight in-memory IP throttle is included, but for a scaled deployment replace it with a shared rate-limit store such as Vercel Firewall or a KV service.

### Local testing

Run the frontend with `npm run dev`; API routes are provided by Vercel, not Vite. To exercise the complete API locally, install/use the Vercel CLI and run `vercel dev` after adding the server-only variables to an untracked `.env.local` file. Do not commit real credentials. Without configured Brevo credentials and a valid DOI template, the production API intentionally returns a generic failure to the form.
