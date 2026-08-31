# Connecting totalvacsolutions.com

The domain is already registered, so nothing needs to be transferred. We only need DNS access, which is faster and safer than moving the registration.

---

## Status

The domain is registered and the site is configured for it. Everything on the build side is done:

- `domain` is set to https://totalvacsolutions.com
- Search indexing is switched on, every page is index and follow
- robots.txt allows crawling and points at the sitemap on the live domain
- Canonical tags, Open Graph URLs and the sitemap all use the live domain
- The CNAME file is generated on every build, so the domain never has to be re-entered in GitHub

The only remaining work is adding DNS records at the registrar. Step by step instructions are in START-HERE.md.

## What we do on our side

1. Add the `CUSTOM_DOMAIN` variable in the repository so the CNAME file is written on every build
2. Remove the `BASE_PATH` variable, since the site moves from a subfolder to the domain root
3. Enable Enforce HTTPS in the repository settings once GitHub issues the certificate, usually within an hour
4. Set `publicIndexing` to true and `temporaryDomain` to false, which switches every page from noindex to indexable, and switches robots.txt from disallow to allow
5. Submit the sitemap in Google Search Console
6. Confirm every page loads on the live domain before telling Google anything

Order matters. The site must be live and indexable at totalvacsolutions.com before we attempt the Google Business Profile verification, because Google checks the website during that process.

---

## Email

`totalvacsolutions@gmail.com` works and needs nothing done. If a branded address such as info@totalvacsolutions.com is wanted later, that is a Google Workspace subscription at roughly ten dollars per user per month, plus MX records. It is worth doing eventually, since a branded address reads as more established to commercial buyers, but it is not a launch blocker.

---

## Still outstanding for the website

**Form delivery.** The request form is built and validated but has no delivery address yet, so it currently reports honestly that it could not send rather than showing a false success. To connect it, create a free Formspree or Basin account using totalvacsolutions@gmail.com, copy the endpoint URL, and paste it into `formEndpoint` in `src/config/siteConfig.mjs`. That takes about two minutes and is the last functional gap on the site.

**Insurance and permit documents.** The site now states environmental insurance is in place and a valid ESAR permit is held, on Halim's confirmation. Get copies of both. The permit reads much stronger with its full name and number, and if anyone ever challenges the claim, the document is what settles it.

**Accepted waste list.** FOG disposal is confirmed. The rest of the accepted and prohibited materials list is still open, and it is worth completing since it is the question every commercial caller asks first.
