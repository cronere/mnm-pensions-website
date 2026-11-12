# MNM Pensions website

Public marketing site for MNM Inc. (target domain: mnmpensions.com). Standalone Next.js app, separate from ClarentApp.

- Copy and facts that change live in `src/content/site.js` (items marked CONFIRM need real values).
- Sign-in links go to MNM-branded hostnames (white-labeled platform). Override with `NEXT_PUBLIC_PARTICIPANT_LOGIN_URL` and `NEXT_PUBLIC_ADMIN_LOGIN_URL` (defaults: portal.mnmpensions.com, admin.mnmpensions.com).
- Styles are in `app/site.css`.
