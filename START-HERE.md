# START HERE

This folder is the complete TotalVac Solutions website, ready to upload to GitHub. Nothing to install, no dependencies, no build tools required.

---

## Upload it, six steps

### 1. Create the repository

On GitHub, in the `officialrevmedia` organisation, click **New repository**.

- Name: `totalvac-solutions`
- Do not tick Add a README, Add .gitignore or Choose a licence. This folder already has them

### 2. Upload the files

On the empty repository page click **uploading an existing file**, then drag in everything inside this folder. Include the hidden `.github`, `.gitignore`, `.gitattributes` and `.editorconfig` files. On a Mac press Command, Shift and Period to see hidden files.

Then click **Commit changes**.

Terminal alternative:

```bash
git init
git add .
git commit -m "TotalVac Solutions website"
git branch -M main
git remote add origin https://github.com/officialrevmedia/totalvac-solutions.git
git push -u origin main
```

### 3. Turn on Pages

**Settings**, **Pages**, Build and deployment, Source: **GitHub Actions**.

### 4. Add one variable

**Settings**, **Secrets and variables**, **Actions**, **Variables** tab, **New repository variable**.

- Name: `BASE_PATH`
- Value: `/totalvac-solutions`

This tells the build the site sits in a subfolder. Use a different value if you named the repository something else, and update `domain` in `src/config/siteConfig.mjs` to match.

### 5. Wait for the green tick

Open the **Actions** tab. The run takes under a minute.

### 6. Open the site

```
https://officialrevmedia.github.io/totalvac-solutions/
```

Every future push to `main` redeploys automatically.

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

## Important: the site is currently set to noindex

Every page carries a noindex tag and `robots.txt` disallows crawling, because the site sits on a temporary GitHub address. This keeps the temporary URL out of Google so it cannot compete with the real domain later.

When the permanent domain is ready, in `src/config/siteConfig.mjs`:

1. Set `domain` to the new address
2. Set `temporaryDomain` to `false`
3. Set `publicIndexing` to `true`

Then add a `CUSTOM_DOMAIN` repository variable with the domain, delete the `BASE_PATH` variable, and push. Canonical tags, sitemap, robots.txt and social metadata all follow automatically.

Before promoting the site, work through `LAUNCH-CHECKLIST.md`. The open items are the phone number, service email, disposal statement, form endpoint, and the two photography questions in `IMAGE-CREDITS.md`.
