---
name: Rebrand scrub checklist
description: Easy-to-miss spots holding the old brand when reskinning a cloned site for a new client
---

When rebranding an existing/cloned site to a new client (content-only swap), a `src/` grep is not enough. Old-brand data also hides in:

- `public/` static files: `sitemap.xml`, `robots.txt`, `llms.txt` (full old name/address/phone), `opengraph.jpg`.
- Hardcoded third-party IDs in `index.html`: Google Tag Manager container (`GTM-xxxx`) and Cookiebot CBID belong to the ORIGINAL client. **Remove them** — you cannot point a new client's traffic at someone else's analytics/consent account. Re-add fresh IDs only if the new client provides them.
- JSON-LD structured data + meta tags: phone, postalCode, geo lat/long, canonical/og/twitter URLs.
- Fabricated metrics ("Plus de 1 500 véhicules", "10+ ans") scattered in service/landing pages — drop or genericize unless the new client confirms real numbers.
- Legacy accent color tokens beyond the obvious ones (e.g. `hover:bg-blue-600`, not just `text-blue-400`).

**Why:** a code review caught old domain in public/ files and a fabricated count after a clean-looking src/ grep — those files and hardcoded vendor IDs are outside the usual edit path.

**How to apply:** after the src/ swap, run one grep over `src public index.html` for the old name, domain, phone, city, fabricated numbers, and `blue-[0-9]` tokens before declaring done.

For a supplied horizontal client logo, keep the original file as a workspace asset and create app-local copies for both the imported UI logo and the public SEO/logo path. Use width-based sizing with `height: auto`; fixed-height sizing can distort unusually wide marks.
