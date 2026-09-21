# IMPCO Agency

## Run locally
1. Open this folder in VS Code.
2. Terminal -> New Terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Ctrl+click the localhost address.

## Easy editing
Open `src/config.js`. This is the main settings file.

- Company email: `hello@impcoagency.com`
- WhatsApp: `447418320714`
- Social links: LinkedIn, X, Threads, YouTube, Instagram.

### Change 3D portfolio images

1. Put your image files in `public/assets`.
2. Open `src/config.js` and find `threeD`.
3. Find the project you want to edit.
4. Replace the filenames inside its `images: [ ... ]` list.

Each project can contain up to 5 images. The order in the list is the order shown in the carousel. To remove an image, delete its filename. To add a project, copy an existing project line and change its `id`, `title`, and image filenames. Use the exact filename, including `.jpg`, `.png`, or `.webp`.

Leave a social URL blank until the account exists. The icon will still be visible; replace the blank value with the full profile URL when ready.

The About section is linked from the header, Contact/Contact Us opens the visitor's email application with the IMPCO email prefilled, and Privacy Policy / Terms of Service are built into the site.
