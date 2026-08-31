# START HERE

This folder is the complete TotalVac Solutions website, ready to upload to GitHub. Nothing to install, no dependencies, no build tools required.

---

## Upload it, then connect the domain

The site is configured for **https://totalvacsolutions.com**. Search indexing is switched on, the CNAME file is written automatically on every build, and the `docs/` folder is already built and ready to serve.

### 1. Create or open the repository

On GitHub, in the `officialrevmedia` organisation, use the existing `totalvac` repository, or create it if it does not exist. Do not tick Add a README, Add .gitignore or Choose a licence.

### 2. Upload these files

On the repository page use **Add file**, then **Upload files**, and drag in everything inside this folder. Include the hidden `.github`, `.gitignore`, `.gitattributes` and `.editorconfig` files. On a Mac press Command, Shift and Period to see hidden files.

If files from a previous upload are already there, delete them first so nothing stale is left behind.

Terminal alternative:

```bash
git init
git add .
git commit -m "TotalVac Solutions website"
git branch -M main
git remote add origin https://github.com/officialrevmedia/totalvac.git
git push -u origin main
```

### 3. Set Pages to serve the docs folder

**Settings**, **Pages**, Build and deployment, Source: **Deploy from a branch**, branch `main`, folder **`/docs`**, then **Save**.

If you prefer the automated route, set Source to **GitHub Actions** instead and the included workflow rebuilds and deploys on every push. Pick one, not both.

### 4. Add the custom domain in GitHub

**Settings**, **Pages**, Custom domain, enter:

```
totalvacsolutions.com
```

Click Save. GitHub will report that the domain is not yet configured, which is expected until the DNS records below are added.

### 5. Add the DNS records at the registrar

Sign in wherever totalvacsolutions.com is registered, open the DNS settings for the domain, and add these.

**Four A records.** Host `@`, or leave the host field blank if the registrar does not use `@`:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**One CNAME record:**

```
Host:  www
Value: officialrevmedia.github.io
```

Then delete anything the registrar added automatically: parking pages, forwarding rules, or a placeholder A record pointing somewhere else. Those will fight the records above and are the most common reason a domain does not resolve.

Leave any MX or TXT records alone. Those handle email and verification and have nothing to do with the website.

### 6. Wait, then enforce HTTPS

DNS usually takes fifteen minutes to an hour, and can take up to 24. Once `https://totalvacsolutions.com` loads the site, go back to **Settings**, **Pages** and tick **Enforce HTTPS**. The certificate is issued by GitHub at no cost, and the box becomes available once the domain resolves.

Check progress at any time by loading the domain in a private browser window.

---

## After the domain is live

1. Confirm every page loads: home, the five service pages, industries, about, service area, FAQ, contact, privacy
2. Confirm `https://totalvacsolutions.com/sitemap.xml` loads
3. Add the property in Google Search Console and submit the sitemap
4. Connect the request form, which is the one functional gap left. Create a free Formspree or Basin account with totalvacsolutions@gmail.com, copy the endpoint, paste it into `formEndpoint` in `src/config/siteConfig.mjs`, rebuild and push
5. Only then build and verify the Google Business Profile. Google checks the website during verification, so the domain has to resolve first

---

## If the URL shows this README instead of the site

That means Pages is serving the repository root, so GitHub rendered `README.md` as the homepage. Set **Settings**, **Pages**, Source to **Deploy from a branch**, branch `main`, folder **`/docs`**, then Save.

---

## If you would rather not use Actions

The `docs/` folder in this repository is already built and ready to serve. Set **Settings**, **Pages**, Source to **Deploy from a branch**, branch `main`, folder `/docs`. The site goes live immediately with no build step.

If you take this route, disable the workflow so it does not report failures: **Actions** tab, select **Build and deploy to GitHub Pages**, then **Disable workflow**. Remember that `docs/` then has to be rebuilt and committed whenever content changes, with `npm run build:docs`.

---

## What is in this folder

| Path | What it is |
| --- | --- |
| `START-HERE.md` | This file |
| `README.md` | Full project documentation: structure, editing, motion, accessibility |
| `GITHUB-SETUP.md` | Deployment detail, custom domain, DNS records |
| `LAUNCH-CHECKLIST.md` | Everything still to confirm before the site is promoted |
| `IMAGE-CREDITS.md` | Origin and status of every image, including two open questions |
| `PHOTO-SHOT-LIST.md` | The photographs that should eventually replace the current imagery |
| `LICENSE.md` | Ownership and third party licences |
| `docs/` | The built site, ready to serve. Includes index.html, sitemap.xml, robots.txt, 404.html, manifest |
| `src/` | Configuration, content and components. This is where edits happen |
| `assets/` | Stylesheet, script, fonts, brand files, photography |
| `brand-masters/` | Full resolution logo artwork for print. Not published to the web |
| `tools/` | Local preview server, content checker, photo fetcher |
| `build.mjs` | The build script |
| `.github/workflows/deploy.yml` | Automatic build and deploy |

---

## Editing later

| To change | Edit | Then |
| --- | --- | --- |
| Phone, email, hours, coverage, licences, disposal | `src/config/siteConfig.mjs` | Commit. It updates across every page, title and schema |
| Service copy | `src/content/services.mjs` | Commit |
| Industries, FAQ, values, process | `src/content/site.mjs` | Commit |
| A photograph | Replace `assets/img/<slot>.jpg` and delete the matching `.webp` | Commit |
| Anything visual | `assets/css/site.css` | Commit |

To check your work before pushing:

```bash
npm run check     # scans for banned characters and unresolved tokens
npm run dev       # builds and serves at http://localhost:8080
npm run preview   # builds a copy that opens by double clicking preview/index.html
```

---

## Search indexing is now live

Every page is set to index and follow, robots.txt allows crawling, and the sitemap points at totalvacsolutions.com. Nothing further needs switching on.

If the site ever needs to be pulled from search results temporarily, set `publicIndexing` to `false` in `src/config/siteConfig.mjs` and rebuild. That flips every page to noindex and switches robots.txt to disallow in one change.

Remaining items are in `LAUNCH-CHECKLIST.md`. The open ones are the form endpoint, the insurance certificate and permit document, and the full accepted materials list.
