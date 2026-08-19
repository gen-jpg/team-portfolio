# HABI³ Monorepo Plan — Marketing + Admin

This repository (`team-portfolio`) becomes a **monorepo** holding two Next.js apps that share one Supabase project:

| App | URL | Purpose |
|---|---|---|
| `apps/web` | `habi-asg.com` | Public marketing site (current codebase, migrated) |
| `apps/admin` | `admin.habi-asg.com` | Private inquiry dashboard (new) |

Same domain family, same database, **two separate apps** in one repo.

---

## Repository structure

### Before (current)

```
team-portfolio/
  app/                 ← Next.js App Router (marketing site)
  components/
  lib/
  public/
  docs/
  next.config.ts
  tailwind.config.ts
  tsconfig.json
  package.json
  ...
```

### After (monorepo)

```
team-portfolio/
  apps/
    web/               ← marketing site (migrated from root)
      app/
      components/
      lib/
      public/
      next.config.ts
      tailwind.config.ts
      tsconfig.json
      package.json
    admin/             ← inquiry dashboard (new)
      app/
      components/
      lib/
      public/
      next.config.ts
      tailwind.config.ts
      tsconfig.json
      package.json
  packages/
    shared/            ← optional: shared types, Supabase helpers, brand constants
      src/
      package.json
      tsconfig.json
  package.json         ← workspace root (npm workspaces)
  .gitignore
  README.md
  docs/
```

---

## Migration plan — moving the marketing site into `apps/web`

Everything at the root today belongs to the marketing site. It must move into `apps/web/` so the root becomes a workspace shell.

### What moves

| Current location | New location |
|---|---|
| `app/` | `apps/web/app/` |
| `components/` | `apps/web/components/` |
| `lib/` | `apps/web/lib/` |
| `public/` | `apps/web/public/` |
| `next.config.ts` | `apps/web/next.config.ts` |
| `tailwind.config.ts` | `apps/web/tailwind.config.ts` |
| `tsconfig.json` | `apps/web/tsconfig.json` |
| `postcss.config.mjs` | `apps/web/postcss.config.mjs` |
| `eslint.config.mjs` | `apps/web/eslint.config.mjs` |
| `app/globals.css` | `apps/web/app/globals.css` |

### What stays at the root

| File | Purpose |
|---|---|
| `package.json` | Workspace root — defines `workspaces` |
| `.gitignore` | Shared ignore rules |
| `README.md` | Repo-level overview |
| `docs/` | Planning docs (this file) |

### Root `package.json` (workspace shell)

```jsonc
{
  "name": "habi-monorepo",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "dev:web": "npm -w apps/web run dev",
    "dev:admin": "npm -w apps/admin run dev",
    "build:web": "npm -w apps/web run build",
    "build:admin": "npm -w apps/admin run build",
    "dev": "npm run dev:web & npm run dev:admin",
    "build": "npm run build:web && npm run build:admin",
    "lint": "npm -w apps/web run lint && npm -w apps/admin run lint"
  }
}
```

### Migration steps

1. Create `apps/web/` directory
2. Move all marketing-site files into `apps/web/`
3. Update `@/` path alias in `apps/web/tsconfig.json` to resolve correctly
4. Replace the root `package.json` with the workspace shell above
5. Keep `apps/web/package.json` as the current `package.json` (with its own dependencies)
6. Run `npm install` from root to link workspaces
7. Verify `npm run dev:web` starts the marketing site on `localhost:3000`
8. Verify the build passes: `npm run build:web`
9. Confirm the contact form still submits

Do not change any marketing-site code during migration. Only move files.

---

## Goal

Give the team a private place to:

1. Sign in at `admin.habi-asg.com`
2. See every inquiry from the public contact form
3. Open one inquiry and read the full message
4. Add internal notes
5. Follow up via `mailto:` and copy email

---

## Out of scope (v1)

- Sending email from the app (Resend, Gmail API, etc.)
- Assigning inquiries to teammates
- Analytics, charts, or a CRM
- Adding admin routes inside `apps/web`

Use the Supabase table editor as a stopgap until the admin app ships.

---

## Why a monorepo with two apps

| | `apps/web` | `apps/admin` |
|---|---|---|
| URL | `habi-asg.com` | `admin.habi-asg.com` |
| Audience | Public | Team only |
| Data | Insert inquiries | Read inquiries, notes, status |
| Crawling | Allowed (`robots.ts` allows `/`) | Blocked (`robots.ts` disallows all) |
| Auth | None | Supabase Auth (Google / magic link) |
| Deployment | Render service #1 | Render service #2 |

Benefits over two separate repos:

- One `git clone`, one PR covers both apps
- Shared types and Supabase helpers live in `packages/shared`
- Consistent lint, formatting, and TypeScript config
- Easier to keep the `InquiryPayload` type in sync

Both apps still deploy as **separate Render services**. `admin.habi-asg.com` is a subdomain — no second domain purchase needed.

---

## Stack

| Layer | Choice |
|---|---|
| Monorepo | npm workspaces |
| Both apps | Next.js (App Router) + TypeScript |
| UI | React + Tailwind CSS |
| Database | Existing Supabase project (shared) |
| Auth (admin only) | Supabase Auth (Google and/or magic link) |
| Hosting | Render — one service per app |

---

## How the two apps connect

```
Visitor              habi-asg.com (apps/web)          Supabase          admin.habi-asg.com (apps/admin)
   |                        |                            |                          |
   |  contact form          |                            |                          |
   |----------------------->|  POST /api/inquiries       |                          |
   |                        |--------------------------->|  insert inquiries        |
   |                        |                            |                          |
   |                        |                            |  select + notes          |
   |                        |                            |<-------------------------|
   |                        |                            |                          |  team login
```

`apps/web` already writes: `name`, `email`, `company`, `project_type`, `message`, plus `id` and `created_at` (auto-generated).

`apps/admin` **reads** that table and writes status/notes. It does not replace the public form.

---

## Shared package — `packages/shared` (optional)

Code that both apps can import:

```
packages/shared/
  src/
    types.ts           ← InquiryPayload, InquiryRow, NoteRow
    supabase.ts        ← createClient helper, table names
    brand.ts           ← brand name, colors (if admin needs them)
  package.json
  tsconfig.json
```

Each app imports via: `import { InquiryRow } from "@habi/shared"`

This package is optional for v1. You can start without it and extract shared code later when duplication becomes a problem.

---

## Data model

### `inquiries` (exists / intended)

Keep the columns `apps/web` already inserts. Add workflow fields for admin:

| Column | Type | Set by |
|---|---|---|
| `id` | uuid, PK | Database |
| `name` | text, not null | Public form |
| `email` | text, not null | Public form |
| `company` | text | Public form |
| `project_type` | text | Public form |
| `message` | text, not null | Public form |
| `created_at` | timestamptz | Database |
| `status` | text, default `'new'` | Admin |
| `last_contacted_at` | timestamptz, nullable | Admin (optional) |

**Status values:** `new` → `contacted` → `in_progress` → `closed` → `spam`

### `inquiry_notes` (new)

| Column | Type |
|---|---|
| `id` | uuid, PK |
| `inquiry_id` | uuid, FK → `inquiries.id`, on delete cascade |
| `body` | text, not null |
| `author_email` | text, not null |
| `created_at` | timestamptz, default `now()` |

### Row Level Security

| Who | `inquiries` | `inquiry_notes` |
|---|---|---|
| Anonymous (public form) | `INSERT` only | none |
| Signed-in team member | `SELECT`, `UPDATE` (status / last contacted) | `SELECT`, `INSERT` |
| Anyone else | none | none |

Lock this down with:

1. RLS enabled on both tables
2. An allowlist of team emails (small `team_members` table or Supabase Auth hook)
3. No service-role key in the browser; server-only if needed at all

The marketing site's insert policy must keep working after RLS is enabled. Test the public form after turning RLS on.

---

## Auth (admin app only)

- All routes except `/login` require a session (Next.js middleware)
- Sign in with Google (preferred for a small team) or magic link
- After login, if the email is not on the allowlist, sign out and show "not authorized"
- Sign out control on every authenticated page

No public registration. Invite people in the Supabase dashboard or add their email to the allowlist.

`apps/web` has **no auth**. It stays fully public.

---

## Admin screens

### 1. Login — `/login`

Email/Google sign-in. Redirect to `/` if already signed in.

### 2. Inquiry list — `/`

Default home after login.

Show a table (or stacked cards on mobile):

- Received date
- Name
- Email
- Company
- Project type
- Status badge
- Short message preview

Support:

- Filter by status
- Search by name, email, or company
- Sort by newest first (default)
- Click a row → detail

Empty and error states: no inquiries, not configured, session expired.

### 3. Inquiry detail — `/inquiries/[id]`

**Header**

- Name, email, company, project type, received date, status dropdown

**Follow up**

- `mailto:` link: `mailto:{email}?subject={encoded subject}` (e.g. `Re: your HABI³ inquiry`)
- Copy email button
- "Mark as contacted" sets `status` to `contacted` and `last_contacted_at` to now (does not send mail)

**Message**

- Full original `message`, read-only

**Notes**

- Chronological list: body, author, timestamp
- Text area + "Add note"
- Notes are internal only; they never reach the person who submitted the inquiry

404 if the id does not exist.

### Admin routes

```
/login                 Login
/                      Inquiry list
/inquiries/[id]        Inquiry detail + notes + follow-up
```

No marketing pages, no public nav, no sitemap.

---

## Environment variables

### `apps/web/.env.local`

```
NEXT_PUBLIC_CONTACT_EMAIL=hello@studio.example
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Same as today. No admin keys here.

### `apps/admin/.env.local`

```
NEXT_PUBLIC_SUPABASE_URL=           # same Supabase project
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SITE_URL=https://admin.habi-asg.com
```

If a server-only service role key is needed, **never** prefix it with `NEXT_PUBLIC_`. Prefer RLS + the user session.

---

## Security checklist

- [ ] `apps/admin/app/robots.ts` disallows all crawlers
- [ ] No inquiry URLs in any sitemap
- [ ] Admin middleware blocks unauthenticated access to all routes except `/login`
- [ ] Allowlist of team emails enforced on sign-in
- [ ] RLS: anonymous users can only `INSERT` into `inquiries`
- [ ] Marketing contact form still inserts after RLS is enabled
- [ ] Admin UI does not expose the service role key in client code
- [ ] Render env vars set per service (web service vs admin service)
- [ ] Admin app has no `sitemap.ts`

---

## Build order

### Phase 0 — Monorepo setup + migration

1. Create `apps/web/` directory
2. Move all current marketing-site files into `apps/web/`
3. Replace root `package.json` with workspace config
4. Update path aliases in `apps/web/tsconfig.json` if needed
5. Run `npm install` from root
6. Verify `npm run dev:web` works and the site loads on `localhost:3000`
7. Verify `npm run build:web` passes
8. Test the contact form submission

### Phase 1 — Database

1. Confirm `inquiries` table exists with expected columns
2. Add `status` column (default `'new'`) and optionally `last_contacted_at`
3. Create `inquiry_notes` table
4. Enable RLS and create policies (anon insert, team select/update)
5. Submit a test inquiry from `habi-asg.com` and confirm it still inserts

### Phase 2 — Admin app scaffold + auth

1. Create `apps/admin/` with Next.js, Tailwind, TypeScript
2. Add Supabase client config
3. Login page + auth middleware
4. Email allowlist logic
5. `robots.ts` that disallows all
6. Deploy to Render on a preview URL

### Phase 3 — Inquiry list + detail

1. Inquiry list page with filters, search, status badges
2. Inquiry detail page with full message
3. Status update dropdown on the detail page

### Phase 4 — Follow-up + notes

1. `mailto:` link and copy-email button
2. "Mark as contacted" action
3. Add and list notes on the detail page

### Phase 5 — Hardening + deploy

1. Recheck RLS against the public form
2. Confirm `robots.ts` blocks crawlers on admin
3. Smoke-test: login → list → detail → note → mailto on production
4. Add `admin.habi-asg.com` custom domain on the Render admin service
5. DNS: CNAME `admin` → Render

---

## DNS / deploy

Both apps deploy as **separate Render web services** from the same GitHub repo:

| Render service | Root directory | Build command | Domain |
|---|---|---|---|
| habi-web | `apps/web` | `npm install && npm run build` | `habi-asg.com` |
| habi-admin | `apps/admin` | `npm install && npm run build` | `admin.habi-asg.com` |

In each Render service, set "Root Directory" to the correct `apps/` subfolder so Render builds only that app.

DNS: add a CNAME record for `admin` pointing to Render. SSL is included automatically. No extra domain fee.

---

## What not to change in `apps/web`

Leave `app/api/inquiries` as insert-only. Do not add GET handlers, dashboards, or auth to the marketing app. It stays public and write-only.

---

## Success for v1

A teammate can sign in at `admin.habi-asg.com`, see new contact-form inquiries, open one, read the full message, update its status, add an internal note, and click `mailto:` to reply from their own email inbox. The public marketing site at `habi-asg.com` continues working exactly as before.
