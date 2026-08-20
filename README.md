# Portfolio Website

A modern, animated portfolio built with Payload CMS and Next.js.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   # .env.local already created with defaults
   # Update PAYLOAD_SECRET to a secure value
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser
6. Visit http://localhost:3000/admin to manage content

### Tech Stack
- **Next.js 14+** — React framework
- **Payload CMS 3.0+** — Headless CMS
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations

### Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components (Header, HeroSection, Footer)
├── lib/              # Utilities (Payload client)
└── types/            # TypeScript type definitions

payload/
├── collections/      # CMS collections (Profile, SocialLinks, CTAButtons)
└── payload.config.ts # Payload CMS configuration
```

### Content Management

Access the admin panel at `/admin` to:
- Edit profile information (name, title, bio, email)
- Manage social links (LinkedIn, GitHub, Twitter, etc.)
- Update CTA buttons (Get in Touch, View Resume, etc.)
- Upload profile avatar

All changes are reflected immediately on the landing page.

### Deployment

Deploy to Vercel (recommended):

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `PAYLOAD_SECRET` — Generate a secure secret
   - `DATABASE_URI` — Database connection string
   - `NEXT_PUBLIC_PAYLOAD_URL` — Your production domain
4. Deploy

For other platforms, see Payload CMS & Next.js documentation.

## Features

- **Animated Hero Section** — Smooth entrance animations with Framer Motion
- **Responsive Design** — Mobile-first design with Tailwind CSS
- **Content Management** — Easy updates via Payload CMS admin panel
- **TypeScript** — Full type safety throughout
- **SEO Optimized** — Meta tags and Open Graph support
- **Performance** — Optimized images, fast load times

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

© 2026. All rights reserved.
