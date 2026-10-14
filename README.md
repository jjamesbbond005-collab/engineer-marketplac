# School Management System

A responsive full-stack school management website built with Next.js, Tailwind CSS, and optional Supabase + Prisma integration for real authentication and database storage.

## Features
- Admin dashboard
- Student management
- Teacher overview
- Attendance tracking
- Grade monitoring
- Announcement panel
- Role-based access patterns
- Ready for Vercel deployment

## Tech stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- NextAuth (demo auth included)
- Prisma + PostgreSQL (ready for Supabase/Neon)

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open:
- http://localhost:3000
- Login demo: admin@school.com / school123

## Deployment to Vercel

1. Push this repo to GitHub.
2. Go to Vercel and import the repository.
3. Select the branch you want to deploy.
4. Vercel auto-detects Next.js.
5. Click Deploy.
6. Add environment variables in Project Settings → Environment Variables.

Required for production:
- DATABASE_URL
- NEXTAUTH_URL
- NEXTAUTH_SECRET

Optional for Supabase integration:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## Database setup

This project includes a Prisma schema for PostgreSQL.

```bash
npx prisma generate
npx prisma db push
```

If you are using Supabase or Neon, set DATABASE_URL to the database connection string before running the commands.

## Notes

This starter is production-ready for deployment and designed to be extended with:
- real authentication and roles
- CRUD admin pages
- parent/student portals
- attendance and grade records from a database
- billing and school fee tracking

## Demo admin credentials
- Email: admin@school.com
- Password: school123
