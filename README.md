# HABI³ Monorepo

Monorepo for the HABI³ by ASG marketing site and admin dashboard.

## Apps

| App | Path | URL | Purpose |
|---|---|---|---|
| web | `apps/web` | `habi-asg.com` | Public marketing site |
| admin | `apps/admin` | `admin.habi-asg.com` | Internal inquiry dashboard |

## Getting started

```bash
npm install
```

### Marketing site

```bash
npm run dev:web        # http://localhost:3000
npm run build:web
```

### Admin dashboard

```bash
cp apps/admin/.env.example apps/admin/.env.local
# Fill in Supabase URL and key (same project as web)
npm run dev:admin      # http://localhost:3001
npm run build:admin
```

## Shared database

Both apps connect to the same Supabase project. The marketing site inserts into the `inquiries` table. The admin app reads inquiries, updates status, and manages internal notes.

See `docs/admin-site-plan.md` for the full architecture plan.
