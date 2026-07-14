# Gomadhi Construction website

Next.js 14 (App Router) + TypeScript + Tailwind + MongoDB.

## Setup

```bash
npm install
cp .env.local.example .env.local   # then add your MongoDB URI
npm run dev
```

Seed the projects collection (optional the site falls back to static
data in `lib/projects-data.ts` if the DB is empty):

```bash
npx tsx scripts/seed-projects.ts
```

## Adding your own project photos

Drop photos into `public/projects/<project-slug>/` and update the `photos`
array for that project in `lib/projects-data.ts` (or in MongoDB if you're
DB-driven). Placeholder photos from the company profile PDF are in there
now replace `site-01.jpg` in each folder with your own.

## Structure

- `app/` routes (home, about, services, projects, contact, API routes)
- `components/` layout, home sections, project cards, forms, UI primitives
- `lib/` constants, MongoDB connection, validation schemas, project data
- `models/` Mongoose schemas (Enquiry, Project)
- `public/` logo and project photos

## Deploy

Push to GitHub, import into Vercel, add `MONGODB_URI` as an environment
variable. No other config needed.
