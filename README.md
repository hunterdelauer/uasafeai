# SAFEAI website

Live: https://www.uasafeai.com
Root domain: https://uasafeai.com (redirects to www)
Vercel fallback: https://uasafeai.vercel.app

Static website for the University of Arizona SAFEAI club. Public assets are in `dist/`. No dependency installation or build is needed. Run `node preview.mjs` for a local preview on http://127.0.0.1:4173.

The lighthouse is copied unchanged from the canonical supplied brand asset. Club details and September 18, 2026 meeting information come from the existing SAFEAI Linktree kit. The meeting label changes to “Past meeting” after September 18 in Arizona. Update the event when the next meeting is announced.

Deployment: Vercel project `uasafeai`, team `huntslop`, account `hdelauer-9144`. Dashboard: https://vercel.com/huntslop/uasafeai . Uploaded `safeai-deploy.zip` through Vercel Drop to Deploy. The ZIP contains the three files in `dist/` at its root. `vercel.json` supports deploying this directory with the Vercel CLI. The older `ua-safeai` deployment belongs to the user's friend and was left untouched; do not deploy updates there.

## Domain research — September 17, 2026

Vercel live availability check:
- safeai.com — unavailable
- uasafeai.com — available, $11.25 for one year; preferred club-specific choice
- safeaiua.com — available, $11.25 for one year
- safeaiua.org — available, $8.49 for one year
- safeaiproject.org — available, $8.49 for one year

The user purchased uasafeai.com through Porkbun for $11.08 for one year; the cart showed estimated renewal of $11.08. Domain management shows expiration September 17, 2027. No paid hosting or email extras were added.

Both uasafeai.com and www.uasafeai.com are associated with the Huntslop project. Root redirects to www with HTTP 308. Porkbun DNS was changed using the exact values from Vercel:
- Root A record: 216.198.79.1 (replaces the default Porkbun ALIAS parking record).
- www CNAME: 4a7405fea43832e6.vercel-dns-017.com (replaces the default wildcard parking record).
- TTL: 600 seconds. Existing mail forwarding and TXT records were preserved.

## Checks

- September 18, 2026: https://uasafeai.com successfully redirects to https://www.uasafeai.com/ and renders the SAFEAI website over HTTPS without a certificate warning.
- Local HTTP response: 200.
- Production Vercel deployment: READY.
- Production page loads in the browser with the original lighthouse asset.
- Narrow-screen layout checked for horizontal overflow.
- Join SAFEAI opens the real SAFEAI Interest Form without requiring a login to view it.
- Fonts load from Google Fonts with system fallbacks.

## September 18 design revision

Replaced promotional slogans, numbered topic cards, oversized sans-serif headings, and decorative orbit graphics with a simple editorial club page inspired by Tucson Effective Altruism. Retains the supplied lighthouse, actual meeting details, interest form, and Instagram. Uses system fonts without external font requests. Local asset references, section anchors, inline JavaScript syntax, and HTTP response checked.

Published the September 18 revision to production: dpl_HXRfvCeUZWagZYhiSrDxpmVKEc5t, READY, aliased to https://www.uasafeai.com. The local directory is now linked to huntslop/uasafeai through Vercel CLI; future updates use `vercel deploy --prod --yes --scope huntslop` from this directory. Keep `.env.local` and `.vercel/` ignored. The CLI login is the user's hdelauer-9144 account.
