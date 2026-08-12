# Studio [Brand] — Marketing Site

Next.js + TypeScript marketing site for a small software development studio. Deployable on Vercel.

## Getting started

```bash
cd E:\team-portfolio
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Main conversion page |
| `/services` | What the team does |
| `/solutions` | Systems you build |
| `/solutions/[slug]` | Solution detail scaffolds |
| `/work` | Portfolio placeholders |
| `/work/[slug]` | Case-study scaffolds |
| `/about` | Team & audiences |
| `/contact` | Inquiry form |

## Contact form

Submits:

1. Optional insert into Supabase `inquiries` when `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
2. Opens a composed `mailto:` using `NEXT_PUBLIC_CONTACT_EMAIL`

## Brand placeholder

Search for `Studio` and `[Brand]` in `lib/content.ts` when the real name is decided.

## Deploy

Connect the repo to Vercel, set env vars, and deploy.
