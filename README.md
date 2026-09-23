# SAFEAI website

Live: https://www.uasafeai.com
Root domain: https://uasafeai.com (redirects to www)
Vercel fallback: https://uasafeai.vercel.app

Static website for the University of Arizona SAFEAI club. Public assets are in `dist/`. No dependency installation or build is needed. Run `node preview.mjs` for a local preview on http://127.0.0.1:4173.

## Meetings and links

General meetings are Fridays at 5 PM in ECON 307 during the fall and spring semesters. The `TERMS` list near the bottom of `dist/index.html` holds each semester's first and last day of classes and its "no classes" holidays and recesses, copied from the University of Arizona academic calendar (https://catalog.arizona.edu/calendar). It covers Fall 2026 through Spring 2028. A Friday is a meeting day when it falls between those dates and outside every holiday or recess, so Thanksgiving, spring recess, reading days, finals, winter session and summer are skipped automatically. `firstMeeting` can push a term's first meeting later than its first Friday (Fall 2026 starts on Sep 11).

The hero line and "What we do" show the next meeting's actual date ("Today" on the day itself, "Meetings resume" between semesters), and "Add to calendar" downloads every remaining meeting of the current semester. Two more lists handle club-specific changes:

```js
const TOPICS = { '2026-09-25': 'Topic for that Friday' };   // shown under the next meeting date
const NO_MEETING = [ '2026-10-30' ];                          // a Friday the club cancels itself
```

When the university publishes the 2028-2029 calendar, add Fall 2028 and Spring 2029 to `TERMS`. Add `?now=2026-12-05` to the URL to preview the page as of another date.

Links used on the page: mailing list (the Google Form that used to be called the interest form), the reading group interest form, and Instagram @ua_safeai. One-on-one guidance points people to Instagram messages.

## September 22 redesign

Club colors (navy `#17233F`, cream `#F3F2EA`, teal `#5FC4AF`) on a visible six-column grid. On scroll, the letters S-A-F-E-A-I lock into their columns one at a time, then close up into one word and fly into the header, where they become the wordmark, while "How do we make AI go well?" grows to fill the screen. The header stays fixed with a "Mailing list" button. "What we do" sits on cream as three bordered cells (general meetings, reading group, one-on-one guidance), and the join section is teal with full-width link rows. Motion is skipped for visitors who prefer reduced motion. Type is Schibsted Grotesk from Google Fonts; the wordmark stays Arial Bold. `styles.css` was removed because all styles are now in `index.html`.

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
