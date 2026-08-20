# Professional Portfolio Website

A modern, animated, full-featured portfolio website built with **Next.js**, **Payload CMS**, **React**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

### Pages
- **Home** — Hero section with featured projects and latest blog posts
- **About** — Your professional story and information
- **Projects** — Showcase your work with images, descriptions, tags, and links
- **Blog** — Write and publish articles with rich text
- **Contact** — Contact form with submissions saved to database

### Admin Panel
- **Payload CMS** — Manage all content without coding
- **Contact Submissions** — View and reply to contact form messages
- **Multi-user** — Invite team members with admin accounts
- **Media Management** — Upload and manage images

### Design & Performance
- **Modern Animations** — Smooth, polished Framer Motion animations
- **Responsive** — Mobile-first design, works on all devices
- **SEO Optimized** — Meta tags, Open Graph, structured data
- **Fast** — Optimized images, server-side rendering
- **Professional** — Modern color scheme and typography

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Development (Local)

```bash
# 1. Clone repository
git clone <your-repo-url>
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

**Access:**
- **Portfolio**: `http://localhost:3000`
- **Admin Panel**: `http://localhost:3000/admin`

### First-Time Setup

1. Visit `http://localhost:3000/admin`
2. Create your admin account (email + password)
3. Add your profile:
   - Go to **Profile** collection
   - Fill in name, title, bio, email, avatar URL
   - Click Save
4. Add projects, blog posts, social links, and CTA buttons

---

## 📝 Content Collections

### Profile
- Your name, title, tagline
- Biography and email
- Avatar image URL
- Phone number (optional)

### Projects
- Title and slug
- Rich text description
- Featured image
- Tags and links
- Mark as "featured" for homepage

### Blog Posts
- Title and slug
- Excerpt and full content (rich text)
- Featured image (optional)
- Tags
- Publish date
- Draft/publish status

### Social Links
- Platform (LinkedIn, GitHub, Twitter, Instagram, Email)
- URL
- Display label
- Order on page

### CTA Buttons
- Label text
- Link/URL
- Style (Primary, Secondary, Ghost)
- Order on page

### Contact Submissions
- Auto-saved from contact form
- Name, email, phone, subject, message
- Read/unread status
- Timestamp

---

## 🌐 Deployment to Vercel

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
4. Vercel auto-detects Next.js

### Step 3: Set Environment Variables
In Vercel dashboard → Settings → Environment Variables:

```
DATABASE_URL=postgresql://user:password@host:5432/portfolio_db
PAYLOAD_SECRET=generate-with-node-command (see DATABASE_SETUP.md)
NEXT_PUBLIC_PAYLOAD_URL=https://your-domain.com
NODE_ENV=production
```

### Step 4: Deploy
Click "Deploy" and wait ~3 minutes for build & deployment.

---

## 📚 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14+, React 18+, TypeScript |
| **Styling** | Tailwind CSS 3+ |
| **Animations** | Framer Motion |
| **CMS** | Payload CMS 3.0+ |
| **Database** | SQLite (dev), PostgreSQL (prod) |
| **Hosting** | Vercel |
| **Forms** | React + Custom API |

---

## 🛠️ Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── projects/page.tsx     # Projects showcase
│   ├── blog/page.tsx         # Blog listing
│   ├── blog/[slug]/page.tsx  # Individual blog post
│   ├── contact/page.tsx      # Contact form
│   ├── admin/page.tsx        # Admin dashboard
│   ├── api/
│   │   ├── contact/route.ts  # Contact form API
│   │   └── submissions/      # Get submissions API
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Tailwind styles
│
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── HeroSection.tsx       # Hero section
│   ├── Footer.tsx            # Footer
│   ├── ProjectCard.tsx       # Project display
│   ├── BlogCard.tsx          # Blog post preview
│   ├── ContactForm.tsx       # Contact form
│   └── animations.ts         # Framer Motion variants
│
├── lib/
│   ├── payload.ts            # Data fetching
│   └── mock-data.ts          # Fallback data
│
└── types/
    └── index.ts              # TypeScript types

payload/
├── collections/
│   ├── Users.ts              # Admin users
│   ├── Profile.ts
│   ├── Projects.ts
│   ├── BlogPosts.ts
│   ├── ContactSubmissions.ts
│   ├── SocialLinks.ts
│   └── CTAButtons.ts
│
└── payload.config.ts         # CMS configuration
```

---

## 📖 Documentation

- **Database Setup**: See `docs/DATABASE_SETUP.md` for PostgreSQL and deployment guides
- **Payload CMS**: https://payloadcms.com/docs
- **Next.js**: https://nextjs.org/docs

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change:
- Primary color (blue → your brand)
- Secondary colors
- Font families
- Spacing

### Fonts
Change in `src/app/layout.tsx`:
```tsx
const inter = Inter({ ... }) // Body font
const poppins = Poppins({ ... }) // Heading font
```

### Animations
Edit `src/components/animations.ts` to adjust:
- Duration (e.g., 0.8s)
- Easing (easeOut, easeIn, etc.)
- Delay timing
- Scale/opacity values

---

## 🔒 Security

- Admin accounts require password authentication
- Contact submissions are server-side validated
- Environment variables contain sensitive data (not in git)
- HTTPS automatic on Vercel

---

## 📊 Analytics & Monitoring

### Vercel Analytics
- Enable in Vercel dashboard for performance metrics
- Track Web Vitals automatically
- View traffic and errors

### Database Monitoring
- Use Vercel Postgres dashboard for query stats
- Monitor connection pool health
- Set up alerts for slow queries

---

## 🐛 Troubleshooting

### Admin Page Not Loading
- Check `PAYLOAD_SECRET` is set
- Verify `NEXT_PUBLIC_PAYLOAD_URL` matches your domain
- Ensure database connection is working

### Contact Form Not Saving
- Check API route `/api/contact` is accessible
- Verify database has `contact-submissions` table
- Check browser console for errors

### Animations Stuttering
- Disable browser extensions
- Check GPU acceleration enabled
- Use Performance tab in DevTools

---

## 📝 License

© 2026. All rights reserved.

---

## 🚀 Next Steps

1. **Customize your profile** in Payload CMS
2. **Add your projects** with images and descriptions
3. **Write blog posts** to showcase expertise
4. **Deploy to Vercel** for free hosting
5. **Monitor contact submissions** in admin panel
6. **Share your portfolio** with your network!

---

**Happy building! 🎉**
