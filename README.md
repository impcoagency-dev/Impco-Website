# IMPCO Agency — Editable Static Portfolio

Cloudflare Pages-ready static website based on the supplied Figma/PDF direction.

## Edit portfolio items
Open `content/projects.js`.

Each project supports:
- `title` — project name
- `image` — direct image URL
- `link` — project/case-study URL
- `video: true` — marks the item as video work
- `youtube` — optional project-specific YouTube URL

For video items, the site uses the project `youtube` URL first, then the `youtubeChannel` value in `content/site-config.js`. If neither is set, it falls back to the project's Behance page rather than inventing a YouTube URL.

## Edit email and social links
Open `content/site-config.js`.

The current public email is `impcoagency@gmail.com`. Replace it when the new business mailbox is ready.

## Cloudflare Pages
No build step is required. Upload the contents of this folder as a static site, or connect the folder/repository to Cloudflare Pages.

## Portfolio sourcing
The 3D and AI project covers were matched to Impco Agency's public Behance projects where an official project image was available. Web project URLs come from the existing Impco portfolio information. The remaining web/branding covers are intentionally kept editable so you can replace them with exact project thumbnails later.
