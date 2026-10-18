# Field Medical Excellence Demo Kit

A self-directed skills-development project by Daniel Le, built to strengthen practical capabilities for a future career in Medical Affairs, with a focus on field medical operations. The SOPs, dashboard, and framework are learning samples that demonstrate technical writing, process design, insight management, and CRM data-modeling concepts; they are not approved operational materials.

The responsive site uses plain HTML, CSS, and a small amount of JavaScript. It has no build step or framework dependency and can be hosted on GitHub Pages.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static file server. All pages link to each other using relative paths.

## Deploy to GitHub Pages

1. Create a GitHub repository and add the contents of this folder to its root (including `index.html`, `assets/`, and `sops/`).
2. Push the files to the repository’s default branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the default branch and `/ (root)` as the folder, then save.
6. Wait for the Pages deployment to finish. GitHub will show the published URL in the Pages settings.

For a project site, the relative page and asset links work under the repository path. If you instead publish from a subfolder, configure Pages to use that folder and keep the site files together.

## Edit the content

- Home and portfolio overview: `index.html`
- SOP starter documents: `sops/sop-001.html`, `sops/sop-002.html`, `sops/sop-003.html`
- Dashboard mock data: `dashboard.html` (bar widths and figures are intentionally visible in the markup)
- MSL framework: `framework.html`
- Bio and contact: `about.html`
- Shared colors, typography, and responsive layout: `assets/site.css`
- Mobile navigation and dashboard period selector: `assets/site.js`

The SOPs are explicitly marked as editable drafts. Before operational use, replace example content with organization-approved procedures, references, owners, review steps, and effective dates. The dashboard uses wholly synthetic data for a fictional oncology product. Contact details are maintained in `about.html`; update them there when changing the preferred contact address.
