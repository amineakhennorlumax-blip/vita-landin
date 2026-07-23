# VITA — Landing Page Premium

Next.js 15 rebuild of the VITA landing page (Arabic/RTL, German work-visa consultancy).

## Getting started
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Deploy to Netlify
This repo already includes `netlify.toml` configured with `@netlify/plugin-nextjs`.
Push to GitHub, then in Netlify: "Add new site" → "Import an existing project" →
pick the repo → Netlify auto-detects everything from `netlify.toml`. No extra config needed
for the basic build; add the env vars below in Site settings → Environment variables
if you want the lead form to actually reach Google Sheets / Meta / WhatsApp.

## Lead pipeline env vars
| Integration | Env vars |
|---|---|
| Google Sheets | GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY |
| Meta Conversion API | META_PIXEL_ID, META_ACCESS_TOKEN |
| WhatsApp Cloud API | WHATSAPP_PHONE_ID, WHATSAPP_ACCESS_TOKEN, WHATSAPP_NOTIFY_NUMBER |

Copy `.env.local.example` to `.env.local` and fill in the values you need.
"# vita-landin" 
"# vita-landing" 
