# GitHub upload and deployment

Everything in this folder is ready to push. There are no dependencies to install and no build service to configure.

Pick one of the three paths below. Path A is recommended.

---

## Current configuration

The site is set up for a temporary GitHub Pages address:

- `domain` is `https://officialrevmedia.github.io/totalvac-solutions`
- `publicIndexing` is `false`, so every page is noindex and robots.txt disallows crawling. This keeps the temporary URL out of search results so it cannot compete with the real domain later
- Service area is Kitchener, Waterloo and the Greater Toronto Area
- The deploy workflow downloads the sourced photography on every build, so the images do not need to be committed

If the repository is named something other than `totalvac-solutions`, or it lives under a different account, update `domain` in `src/config/siteConfig.mjs` and set the `BASE_PATH` repository variable to match. Both are one line changes.

---

## Path A. Push the source, let Actions build and deploy

Best for ongoing work. You edit content, push, and the live site updates in about a minute.

### 1. Create the repository

On GitHub, inside the `officialrevmedia` organisation, create a new repository named `totalvac-solutions`. Do not add a README, licence or gitignore, since this folder already has them.

### 2. Push this folder

```bash
cd totalvac-solutions
git init
git add .
git commit -m "TotalVac Solutions website"
git branch -M main
git remote add origin https://github.com/officialrevmedia/totalvac-solutions.git
git push -u origin main
```

### 3. Turn on Pages

Repository, Settings, Pages, Build and deployment, Source: **GitHub Actions**.

Then add one repository variable so the assets resolve from the project subfolder. Settings, Secrets and variables, Actions, Variables, New repository variable: name `BASE_PATH`, value `/totalvac-solutions`. Remove this variable once a custom domain is attached.

That is the only setting to change. `.github/workflows/deploy.yml` handles the rest. It checks the content rules, builds the site and publishes it on every push to `main`.

### 4. Watch the first run

Repository, Actions tab. The run takes under a minute. When it finishes, the URL appears in the workflow summary and under Settings, Pages.

### 5. Add the custom domain when it is confirmed

1. In Settings, Secrets and variables, Actions, Variables, add a repository variable named `CUSTOM_DOMAIN` with the value `totalvacsolutions.ca` or whichever domain is registered. The workflow writes the CNAME file automatically on the next build.
2. At the domain registrar, point the domain at GitHub Pages. For an apex domain add four A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`. For a `www` subdomain add a CNAME record to `officialrevmedia.github.io`.
3. In Settings, Pages, enter the domain and tick Enforce HTTPS once the certificate is issued.
4. Set `domain` in `src/config/siteConfig.mjs` to the same address, set `temporaryDomain` to false, set `publicIndexing` to true, delete the `BASE_PATH` variable, and push. Canonical tags, the sitemap, robots.txt and social metadata all follow.

---

## Path B. Commit the built site, no Actions

Best if Actions is unavailable or you want the exact files in the repository.

```bash
npm run build:docs      # writes the site into docs/
```

Remove `dist/` from `.gitignore` if you prefer that folder name, then commit `docs/` along with the source and push. In Settings, Pages, set Source to **Deploy from a branch**, Branch `main`, folder `/docs`.

Rebuild and commit `docs/` every time content changes, or the live site will fall behind the source.

---

## Path C. Any other static host

```bash
npm run build
```

Upload the contents of `dist/` to Netlify, Vercel, Cloudflare Pages or standard web hosting. No configuration, environment variables or server runtime are needed. Clean URLs are directory based, so every host resolves them without a rewrite rule.

---

## Deploying to a project subfolder

If the site has to live at `officialrevmedia.github.io/totalvac-solutions/` rather than at a domain root, build with the base path so every asset and link resolves:

```bash
BASE_PATH=/totalvac-solutions npm run build
```

In the Actions workflow, add the same variable to the build step:

```yaml
      - name: Build site
        run: node build.mjs
        env:
          BASE_PATH: /totalvac-solutions
```

Once a custom domain is attached, remove the base path and rebuild.

---

## Photography

```bash
npm run photos
```

Downloads the six sourced photographs listed in `src/content/photos.mjs` into `assets/img/`. Existing files are skipped, so it never overwrites a TotalVac photograph. Add `--force` to replace them.

The deploy workflow runs the same command before every build, so the published site has the photographs whether or not they are committed. If the download fails, the build still succeeds and those slots fall back to placeholders.

For AVIF and WebP versions, run `npm install sharp` once, then `npm run photos --force`.

---

## Reviewing without a server

```bash
npm run preview
```

This writes a copy into `preview/` with relative links, so `preview/index.html` opens straight from the file system by double clicking it. Every page, image and stylesheet works, and navigation between pages works. It is the right build to zip and email to the client for review.

Do not deploy the `preview/` build. Deploy `dist/`.

---

## What is in the repository

| Path | Committed | Purpose |
| --- | --- | --- |
| `src/` | Yes | Configuration, content and components. This is where edits happen |
| `assets/` | Yes | Stylesheet, script, fonts, brand files, real photography |
| `brand-masters/` | Yes | Full resolution logo artwork for print. Not published to the web |
| `tools/` | Yes | Local preview server and the content rules check |
| `build.mjs` | Yes | The build script |
| `.github/workflows/deploy.yml` | Yes | Automatic build and deploy |
| `dist/` | No | Build output. Regenerated on every build and by the workflow |
| `preview/` | No | File system review build |

---

## Before the first push

Read `LAUNCH-CHECKLIST.md`. The site currently states no phone number, service area, hours, licences or disposal process, because none have been confirmed. Publishing in that state is safe and honest, but the checklist items marked OPEN should be closed before the site is promoted or submitted to Google.

Run these two commands before any push:

```bash
npm run check     # scans the source for banned characters and unresolved tokens
npm run build     # fails on any content rule violation in the output
```

The workflow runs both again on GitHub, so a violation stops the deployment rather than reaching the live site.
