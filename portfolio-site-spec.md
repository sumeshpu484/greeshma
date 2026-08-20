# Portfolio Website Design Spec
**Date:** 2026-08-20  
**Project:** Professional Portfolio Web App (MVP - Landing Page)  
**Tech Stack:** Payload CMS 3.0+, Next.js, Vercel  

---

## 1. Project Overview

A modern, interactive portfolio website built with Payload CMS as a Next.js backend, targeting hiring managers, recruiters, potential clients, and collaborators. The MVP focuses on a polished landing/hero page with smooth animations and professional design that establishes the foundation for adding more sections (About, Projects, Skills, Experience, Contact) later.

**Goals:**
- Establish professional first impression with modern, playful design
- Create single point of contact for opportunities
- Provide smooth, animated experience
- Enable easy content updates via Payload CMS admin panel

---

## 2. Architecture

### 2.1 Tech Stack
- **Payload CMS 3.0+** — Next.js-native headless CMS, provides admin panel and backend API
- **Next.js 14+** — Full-stack framework (frontend + API routes)
- **React 18+** — Component framework with Framer Motion for animations
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Vercel** — Hosting (both frontend and Payload backend)
- **PostgreSQL or SQLite** — Database (Payload supports both; SQLite for MVP simplicity)

### 2.2 Architecture Diagram
```
┌─────────────────────────────────────────┐
│         User (Browser)                  │
└──────────────┬──────────────────────────┘
               │
       ┌───────▼────────┐
       │   Next.js      │
       │   Frontend     │
       │  (components,  │
       │  animations)   │
       └───────┬────────┘
               │
       ┌───────▼────────────┐
       │ Next.js API Routes │
       │ (Payload SDK)      │
       └───────┬────────────┘
               │
       ┌───────▼──────────┐
       │  Payload CMS     │
       │  (Backend, DB)   │
       └──────────────────┘
```

**Key Design:**
- Single Next.js repository containing both Payload backend and frontend
- Payload handles content management, authentication, and data persistence
- Frontend consumes Payload API or direct data access via SDK
- API routes handle any custom logic needed

---

## 3. Content Model (Payload Collections)

### 3.1 Profile Collection
```
- id (auto)
- name (text, required)
- title (text, required) - e.g., "Full Stack Engineer"
- bio (richtext, required)
- avatar (media, required)
- tagline (text, required) - short intro for hero
- email (email, required)
- phone (text, optional)
- createdAt (auto)
- updatedAt (auto)
```

### 3.2 Social Links Collection
```
- id (auto)
- platform (select: linkedin, github, twitter, email, etc.)
- url (text, required)
- label (text, optional)
- displayOrder (number)
```

### 3.3 CTA Buttons Collection
```
- id (auto)
- label (text, required) - e.g., "Get in Touch"
- href (text, required) - email link or contact page
- style (select: primary, secondary, ghost)
- displayOrder (number)
```

---

## 4. Frontend: Landing Page Design

### 4.1 Layout & Sections

**Header/Navigation**
- Fixed or sticky header with logo/name
- Navigation links (About, Projects, Skills, Experience, Contact) — placeholders for future pages
- Social icons in header or footer
- Responsive mobile menu

**Hero Section** (Primary Focus)
- Animated name entrance (fade + slide)
- Tagline/subtitle with staggered text animation
- Profile avatar with subtle hover effect
- Call-to-action button(s)
- Parallax or scroll-triggered animations

**Footer**
- Social links
- Copyright
- "Built with Payload CMS & Next.js" credit

### 4.2 Animation Strategy

**Entrance Animations:**
- Name: Fade in + slide from left, 0.8s ease-out
- Subtitle: Fade in with stagger, 0.6s delay
- Avatar: Zoom in + fade, 0.6s ease-out
- CTA Button: Fade in + scale, 0.8s delay

**Interaction Animations:**
- Hover effects: Subtle scale/glow on buttons and interactive elements
- Scroll parallax: Gentle depth movement on hero image/avatar
- Link hover: Underline animation or color transition
- Micro-interactions: Smooth transitions on all state changes

**Library:** Framer Motion (React animations library) for smooth, performant animations

### 4.3 Design System

**Color Palette:**
- Primary: Modern blue/purple (brand color)
- Secondary: Neutral grays
- Accent: Vibrant color for CTAs (playful element)
- Background: Clean white or very light neutral
- Dark mode support (optional for future)

**Typography:**
- Heading: Bold, modern sans-serif (e.g., Inter, Poppins)
- Body: Clean, readable sans-serif
- Font sizes: Responsive (mobile-first)

**Spacing & Layout:**
- 12px base unit grid
- Generous whitespace for breathing room
- Max-width container (~1200px) for desktop

**Visual Effects:**
- Subtle shadows for depth
- Glassmorphism accents (optional, light use)
- Smooth border-radius (8-16px)

---

## 5. Page Flow

```
Load Page
├─ Fetch Profile data from Payload
├─ Render Header with Navigation
├─ Render Hero Section
│  ├─ Animated name
│  ├─ Animated tagline
│  ├─ Avatar with hover effect
│  └─ CTA buttons
├─ Render Footer with Social Links
└─ Listen for scroll events
   └─ Trigger parallax/reveal animations
```

---

## 6. Data Flow

**Initial Load:**
1. User visits homepage
2. Next.js server-side renders page
3. Fetches Profile data from Payload API
4. Renders static content + interactive animations

**Updates:**
- Content editor updates data in Payload admin panel
- On next page load, fresh data is fetched
- No real-time updates needed for MVP

---

## 7. Responsive Design

**Breakpoints:**
- Mobile: 0-640px (single column, stacked layout)
- Tablet: 641-1024px (adjusted spacing)
- Desktop: 1025px+ (full layout)

**Key Changes:**
- Hero text size responsive
- Avatar size responsive
- Navigation: Full menu on desktop, hamburger on mobile
- Padding/margins adjust for mobile

---

## 8. Performance & SEO

- Next.js static generation where possible (profile data changes infrequently)
- Metadata: Title, description, OG tags for social sharing
- Image optimization: Next.js Image component for avatar
- Fast Core Web Vitals: Animations use GPU acceleration (Framer Motion)

---

## 9. Deployment

**Vercel:**
- Connect GitHub repo
- Auto-deploy on push to main
- Environment variables for Payload database connection
- Payload backend runs on Vercel (serverless functions or hobby plan with database)

**Database:**
- SQLite for MVP (file-based, simplest setup)
- Can migrate to PostgreSQL later if needed

---

## 10. File Structure (MVP)

```
portfolio-app/
├── src/
│  ├── app/
│  │  ├── page.tsx (landing page)
│  │  ├── layout.tsx
│  │  └── globals.css
│  ├── components/
│  │  ├── Header.tsx
│  │  ├── HeroSection.tsx
│  │  ├── Footer.tsx
│  │  └── animations.ts
│  ├── lib/
│  │  └── payload.ts (Payload client/API setup)
│  └── types/
│     └── index.ts (TypeScript types for content)
├── payload/
│  ├── collections/
│  │  ├── Profile.ts
│  │  ├── SocialLinks.ts
│  │  └── CTAButtons.ts
│  ├── storage/ (SQLite database file)
│  └── payload.config.ts
├── public/
│  └── (images, favicon, etc.)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

---

## 11. Future Extensions (Post-MVP)

Once landing page is solid, add:
1. **About Page** — Detailed bio, story
2. **Projects Page** — Case studies with images
3. **Skills Page** — Technical skills, tools
4. **Experience Page** — Work history, timeline
5. **Contact Page** — Form or email signup
6. **Dark Mode Toggle**
7. **Blog/Articles** (optional)

Each can reuse the same design system and animation patterns.

---

## 12. Success Criteria

✅ Landing page loads in < 2s  
✅ All animations smooth and polished (60fps)  
✅ Responsive on mobile, tablet, desktop  
✅ Content easily updated via Payload admin panel  
✅ Professional yet playful aesthetic achieved  
✅ Clear call-to-action encourages engagement  
✅ SEO optimized (meta tags, structured data)  
✅ Deployed live on Vercel  

---

## Notes

- This spec is intentionally focused on MVP scope (landing page only)
- Design and animation choices prioritize user experience over complexity
- Payload CMS provides flexibility for adding features without code changes
- TypeScript ensures maintainability as the project grows
