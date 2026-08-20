# Database Setup Guide

## Overview

This professional portfolio application uses:
- **Development**: SQLite (file-based)
- **Production**: PostgreSQL (recommended)

Both are fully supported by Payload CMS.

---

## Development Setup (Local)

### SQLite (Default)

SQLite is automatically used for local development. The database file is created at `data.db`.

**To get started:**

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run dev server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000/admin` and create your admin account

4. Start adding content via the Payload CMS admin panel

---

## Production Setup (Vercel)

### PostgreSQL Database

For production, use PostgreSQL (available through managed providers):

**Option 1: Vercel Postgres (Easiest)**

1. Go to Vercel Dashboard
2. Add Vercel Postgres storage to your project
3. Copy the connection string

**Option 2: External Provider**

Popular providers:
- Supabase (https://supabase.com)
- Railway (https://railway.app)
- Render (https://render.com)
- Heroku

### Environment Variables

Set these in Vercel dashboard:

```env
DATABASE_URL=postgresql://user:password@host:5432/dbname
PAYLOAD_SECRET=generate-a-long-random-string-here
NEXT_PUBLIC_PAYLOAD_URL=https://your-domain.com
NODE_ENV=production
```

**To generate PAYLOAD_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Professional portfolio with Payload CMS"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Vercel auto-detects Next.js configuration

### Step 3: Set Environment Variables

In Vercel dashboard:

1. Go to Settings → Environment Variables
2. Add:
   - `DATABASE_URL` (PostgreSQL connection string)
   - `PAYLOAD_SECRET` (random string)
   - `NEXT_PUBLIC_PAYLOAD_URL` (your domain URL)

### Step 4: Deploy

Click "Deploy" — Vercel automatically:
- Builds your Next.js app
- Creates database tables via Payload
- Deploys to Vercel's global CDN
- Sets up HTTPS

---

## First Production Deployment

When you deploy to production for the first time:

1. **Database tables are auto-created** by Payload CMS
2. **Create admin account** at `/admin` on your production URL
3. **Add your content** via Payload admin panel
4. **Verify** all pages load correctly

---

## Backup & Maintenance

### Database Backups

For PostgreSQL:
```bash
pg_dump $DATABASE_URL > backup.sql
```

Restore:
```bash
psql $DATABASE_URL < backup.sql
```

### Payload Migrations

Payload CMS handles schema changes automatically. No migration files needed.

---

## Troubleshooting

### "Database connection failed"

Check:
- `DATABASE_URL` environment variable is set correctly
- Database server is accessible
- Credentials are valid

### "Admin page not loading"

Ensure:
- `PAYLOAD_SECRET` is set
- `NEXT_PUBLIC_PAYLOAD_URL` matches your domain
- Database tables exist (run `/admin` once to create)

### Slow queries

Optimize with:
- Database indexes on frequently queried fields
- Query pagination (Payload CMS does this by default)
- CDN caching (Vercel automatic)

---

## Scaling

As your portfolio grows:

1. **More blog posts?** Payload CMS handles unlimited content
2. **More traffic?** Vercel automatically scales
3. **Need faster loads?** Enable Vercel Analytics to identify bottlenecks
4. **Large images?** Use Next.js Image optimization (already set up)

---

## Need Help?

- Payload CMS Docs: https://payloadcms.com/docs
- Vercel Docs: https://vercel.com/docs
- GitHub Issues: Create an issue in your repository
