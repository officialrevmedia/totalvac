# Connecting totalvacsolutions.com

The domain is already registered, so nothing needs to be transferred. We only need DNS access, which is faster and safer than moving the registration.

---

## What we need from Halim

Pick whichever is easiest.

**Option A. Delegated access, preferred.** Add `info@revmedia.ca` as a user or delegate on the registrar account. Most registrars support this under Account, then Delegate Access or Team Members. Registration stays in Halim's name and ownership never leaves his control.

**Option B. Registrar login.** Send the registrar name (GoDaddy, Namecheap, Google Domains, Squarespace, whoever holds it) with the login. Change the password afterward if preferred.

**Option C. Halim adds the records himself.** We send the exact records and he pastes them in. Works fine, just adds a round trip if anything is mistyped.

We do not need a domain transfer, and I would not recommend one. Transfers lock the domain for 60 days and are unnecessary here.

---

## The DNS records to add

For GitHub Pages hosting, in the registrar's DNS settings:

**Four A records**, all with host `@`:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**One CNAME record**:

```
Host: www
Points to: officialrevmedia.github.io
```

Delete any parked or forwarding record the registrar added automatically, otherwise it will fight these.

DNS usually propagates within an hour and can take up to 24.

---

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
