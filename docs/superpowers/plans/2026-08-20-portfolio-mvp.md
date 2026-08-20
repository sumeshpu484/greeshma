# Portfolio Website MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern portfolio landing page with Payload CMS backend and animated Next.js frontend, with content-managed Profile, Social Links, and CTA buttons.

**Architecture:** Single Next.js repository containing both Payload CMS backend (serverless/hobby) and frontend. Payload SDK integrates directly; frontend fetches content via API or direct access. Frontend uses Framer Motion for entrance/interaction animations on hero section.

**Tech Stack:** Next.js 14+, React 18+, TypeScript, Tailwind CSS 3+, Payload CMS 3.0+, Framer Motion, SQLite, Vercel

**Spec:** `d:\sumesh\Greeshma Profile\portfolio-site-spec.md`

## Global Constraints

- Next.js 14+, React 18+
- TypeScript mandatory
- Tailwind CSS for all styling
- Framer Motion for animations (60fps GPU-accelerated)
- SQLite for MVP database
- Payload CMS 3.0+ as headless backend
- Responsive breakpoints: 0-640px (mobile), 641-1024px (tablet), 1025px+ (desktop)
- All animations must be smooth and polished
- Page load < 2s target
- Content updatable only via Payload admin panel (no hardcoding)

---

## File Structure

```
portfolio-app/
├── src/
│  ├── app/
│  │  ├── page.tsx (landing page + SSR data fetch)
│  │  ├── layout.tsx (root layout, metadata)
│  │  └── globals.css (Tailwind imports)
│  ├── components/
│  │  ├── Header.tsx (sticky header, nav placeholder, social icons)
│  │  ├── HeroSection.tsx (name, tagline, avatar, CTA buttons with animations)
│  │  ├── Footer.tsx (social links, copyright, credits)
│  │  └── animations.ts (Framer Motion animation variants)
│  ├── lib/
│  │  ├── payload.ts (Payload client/SDK initialization)
│  │  └── utils.ts (helper functions)
│  └── types/
│     └── index.ts (TypeScript types for Profile, SocialLinks, CTAButtons)
├── payload/
│  ├── collections/
│  │  ├── Profile.ts (profile collection config)
│  │  ├── SocialLinks.ts (social links collection config)
│  │  └── CTAButtons.ts (CTA buttons collection config)
│  └── payload.config.ts (Payload CMS root config)
├── public/
│  └── (favicon, placeholder images)
├── .env.local (database URL, API secrets)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## Task Breakdown

### Task 1: Project Initialization & Dependencies

**Files:**
- Create: `package.json` (with all dependencies)
- Create: `tsconfig.json` (TypeScript config)
- Create: `tailwind.config.ts` (Tailwind CSS setup)
- Create: `next.config.js` (Next.js config)
- Create: `.env.local` (environment variables template)
- Create: `.gitignore` (exclude node_modules, .env, etc.)

**Interfaces:**
- Produces: Working dev environment where `npm run dev` starts dev server on `http://localhost:3000`

- [ ] **Step 1: Initialize Next.js project with create-next-app**

Run:
```bash
cd "d:\sumesh\Greeshma Profile"
npx create-next-app@latest . --typescript --tailwind --eslint --no-git --import-alias '@/*'
```

Choose: App Router (yes), TypeScript (yes), ESLint (yes), Tailwind (yes), src/ dir (yes), customize import (yes, use @/*)

- [ ] **Step 2: Install Payload CMS and dependencies**

Run:
```bash
npm install payload@latest next-payload dotenv bcryptjs
npm install --save-dev @types/node @types/react
```

- [ ] **Step 3: Install animation & utility libraries**

Run:
```bash
npm install framer-motion sharp
npm install --save-dev @types/framer-motion
```

- [ ] **Step 4: Create .env.local with template variables**

Content:
```env
# Database
DATABASE_URI=file:./data.db

# Payload CMS
PAYLOAD_SECRET=your-secret-key-change-this
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000

# API
API_URL=http://localhost:3000/api
```

- [ ] **Step 5: Create .gitignore**

Content:
```
node_modules/
.next/
.env.local
.env.local.backup
.env
*.db
payload-types.ts
dist/
```

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "chore: initialize Next.js project with Payload CMS"
```

---

### Task 2: Tailwind CSS & Design System Setup

**Files:**
- Create: `src/app/globals.css` (Tailwind + custom CSS variables)
- Modify: `tailwind.config.ts` (color palette, typography, spacing)

**Interfaces:**
- Produces: Tailwind configured with design tokens (colors, fonts, spacing)

- [ ] **Step 1: Update tailwind.config.ts with design tokens**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
        secondary: {
          50: '#f9fafb',
          700: '#374151',
          900: '#111827',
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '12px': '12px',
      },
      borderRadius: {
        '2xl': '16px',
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Update src/app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary: #2563eb;
    --secondary-700: #374151;
    --accent: #f59e0b;
    --background: #ffffff;
    --text-primary: #111827;
    --text-secondary: #6b7280;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-secondary-700;
    font-feature-settings: 'rlig' 1 'calt' 1;
  }
}

@layer components {
  .container-max {
    @apply mx-auto max-w-container px-4 md:px-8 lg:px-12;
  }

  .btn-primary {
    @apply inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors;
  }

  .btn-secondary {
    @apply inline-block px-6 py-3 border-2 border-secondary-700 text-secondary-700 font-semibold rounded-lg hover:bg-secondary-50 transition-colors;
  }

  .btn-ghost {
    @apply inline-block px-6 py-3 text-primary-600 font-semibold hover:underline transition-colors;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts src/app/globals.css
git commit -m "style: configure Tailwind CSS with design tokens"
```

---

### Task 3: TypeScript Types

**Files:**
- Create: `src/types/index.ts` (all content types)

**Interfaces:**
- Produces: Types for Profile, SocialLinks, CTAButtons used throughout app

- [ ] **Step 1: Create src/types/index.ts**

```typescript
export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: {
    url: string;
    alt?: string;
  };
  tagline: string;
  email: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SocialLink {
  id: string;
  platform: 'linkedin' | 'github' | 'twitter' | 'email' | 'instagram';
  url: string;
  label?: string;
  displayOrder: number;
}

export interface CTAButton {
  id: string;
  label: string;
  href: string;
  style: 'primary' | 'secondary' | 'ghost';
  displayOrder: number;
}

export interface PageData {
  profile: Profile;
  socialLinks: SocialLink[];
  ctaButtons: CTAButton[];
}
```

- [ ] **Step 2: Commit**

```bash
git add src/types/index.ts
git commit -m "types: add content model TypeScript interfaces"
```

---

### Task 4: Payload CMS Collections Setup

**Files:**
- Create: `payload/collections/Profile.ts`
- Create: `payload/collections/SocialLinks.ts`
- Create: `payload/collections/CTAButtons.ts`
- Create: `payload/payload.config.ts`

**Interfaces:**
- Produces: Payload CMS configuration with 3 collections accessible via API/SDK

- [ ] **Step 1: Create payload/collections/Profile.ts**

```typescript
import { CollectionConfig } from 'payload';

export const Profile: CollectionConfig = {
  slug: 'profile',
  labels: {
    singular: 'Profile',
    plural: 'Profiles',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Professional Title',
      placeholder: 'e.g., Full Stack Engineer',
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Tagline/Short Intro',
      placeholder: 'Short introduction for hero section',
    },
    {
      name: 'bio',
      type: 'richText',
      required: true,
      label: 'Biography',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Profile Avatar',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number (Optional)',
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
};
```

- [ ] **Step 2: Create payload/collections/SocialLinks.ts**

```typescript
import { CollectionConfig } from 'payload';

export const SocialLinks: CollectionConfig = {
  slug: 'social-links',
  labels: {
    singular: 'Social Link',
    plural: 'Social Links',
  },
  fields: [
    {
      name: 'platform',
      type: 'select',
      required: true,
      options: [
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'GitHub', value: 'github' },
        { label: 'Twitter', value: 'twitter' },
        { label: 'Email', value: 'email' },
        { label: 'Instagram', value: 'instagram' },
      ],
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'URL',
    },
    {
      name: 'label',
      type: 'text',
      label: 'Display Label (Optional)',
    },
    {
      name: 'displayOrder',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Display Order',
    },
  ],
  admin: {
    useAsTitle: 'platform',
  },
};
```

- [ ] **Step 3: Create payload/collections/CTAButtons.ts**

```typescript
import { CollectionConfig } from 'payload';

export const CTAButtons: CollectionConfig = {
  slug: 'cta-buttons',
  labels: {
    singular: 'CTA Button',
    plural: 'CTA Buttons',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Button Text',
      placeholder: 'e.g., Get in Touch',
    },
    {
      name: 'href',
      type: 'text',
      required: true,
      label: 'Link/URL',
      placeholder: 'mailto:email@example.com or /contact',
    },
    {
      name: 'style',
      type: 'select',
      required: true,
      options: [
        { label: 'Primary (filled)', value: 'primary' },
        { label: 'Secondary (outlined)', value: 'secondary' },
        { label: 'Ghost (text-only)', value: 'ghost' },
      ],
      defaultValue: 'primary',
    },
    {
      name: 'displayOrder',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Display Order',
    },
  ],
  admin: {
    useAsTitle: 'label',
  },
};
```

- [ ] **Step 4: Create payload/payload.config.ts**

```typescript
import path from 'path';
import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { Profile } from './collections/Profile';
import { SocialLinks } from './collections/SocialLinks';
import { CTAButtons } from './collections/CTAButtons';

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    Profile,
    SocialLinks,
    CTAButtons,
  ],
  db: sqliteAdapter({
    url: process.env.DATABASE_URI || 'file:./data.db',
  }),
  secret: process.env.PAYLOAD_SECRET || 'change-me',
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
```

- [ ] **Step 5: Update next.config.js to support Payload**

Add:
```javascript
const withPayload = require('@payloadcms/next/withPayload');

module.exports = withPayload({
  // ... existing config
});
```

- [ ] **Step 6: Commit**

```bash
git add payload/ next.config.js
git commit -m "cms: add Payload CMS collections (Profile, SocialLinks, CTAButtons)"
```

---

### Task 5: Framer Motion Animation Variants

**Files:**
- Create: `src/components/animations.ts` (animation definitions)

**Interfaces:**
- Produces: Reusable Framer Motion animation variants for hero section

- [ ] **Step 1: Create src/components/animations.ts**

```typescript
export const nameAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export const taglineAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay: 0.6, ease: 'easeOut' },
};

export const avatarAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const buttonAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay: 1.2, ease: 'easeOut' },
};

export const containerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
};

export const hoverEffect = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/animations.ts
git commit -m "anim: add Framer Motion animation variants for hero section"
```

---

### Task 6: Payload Client Setup

**Files:**
- Create: `src/lib/payload.ts` (Payload SDK/API client)

**Interfaces:**
- Produces: Functions to fetch Profile, SocialLinks, CTAButtons from Payload

- [ ] **Step 1: Create src/lib/payload.ts**

```typescript
import { getPayload } from 'payload';
import config from '../../payload/payload.config';
import type { Profile, SocialLink, CTAButton, PageData } from '@/types';

let payloadInstance: ReturnType<typeof getPayload> | null = null;

async function getPayloadInstance() {
  if (!payloadInstance) {
    payloadInstance = await getPayload({ config });
  }
  return payloadInstance;
}

export async function fetchProfile(): Promise<Profile> {
  const payload = await getPayloadInstance();
  const result = await payload.find({
    collection: 'profile',
    limit: 1,
  });

  if (!result.docs.length) {
    throw new Error('No profile found in CMS');
  }

  const doc = result.docs[0];
  return {
    id: doc.id,
    name: doc.name,
    title: doc.title,
    bio: doc.bio,
    avatar: {
      url: typeof doc.avatar === 'string' ? doc.avatar : doc.avatar.url,
      alt: doc.name,
    },
    tagline: doc.tagline,
    email: doc.email,
    phone: doc.phone,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

export async function fetchSocialLinks(): Promise<SocialLink[]> {
  const payload = await getPayloadInstance();
  const result = await payload.find({
    collection: 'social-links',
    sort: 'displayOrder',
  });

  return result.docs.map(doc => ({
    id: doc.id,
    platform: doc.platform,
    url: doc.url,
    label: doc.label,
    displayOrder: doc.displayOrder,
  }));
}

export async function fetchCTAButtons(): Promise<CTAButton[]> {
  const payload = await getPayloadInstance();
  const result = await payload.find({
    collection: 'cta-buttons',
    sort: 'displayOrder',
  });

  return result.docs.map(doc => ({
    id: doc.id,
    label: doc.label,
    href: doc.href,
    style: doc.style,
    displayOrder: doc.displayOrder,
  }));
}

export async function fetchPageData(): Promise<PageData> {
  const [profile, socialLinks, ctaButtons] = await Promise.all([
    fetchProfile(),
    fetchSocialLinks(),
    fetchCTAButtons(),
  ]);

  return { profile, socialLinks, ctaButtons };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/payload.ts
git commit -m "lib: add Payload CMS data fetching functions"
```

---

### Task 7: Header Component

**Files:**
- Create: `src/components/Header.tsx` (sticky header with nav + social icons)

**Interfaces:**
- Consumes: `SocialLink[]` array from Task 6
- Produces: Header React component (sticky positioning, responsive mobile menu)

- [ ] **Step 1: Create src/components/Header.tsx**

```typescript
'use client';

import { SocialLink } from '@/types';
import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  socialLinks: SocialLink[];
  name: string;
}

export default function Header({ socialLinks, name }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const platformIcons: Record<string, string> = {
    linkedin: '👔',
    github: '🐙',
    twitter: '𝕏',
    email: '✉️',
    instagram: '📷',
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-subtle">
      <div className="container-max flex items-center justify-between py-4 md:py-5">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary-600">{name}</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-secondary-700 hover:text-primary-600 transition-colors">
            About
          </Link>
          <Link href="#" className="text-secondary-700 hover:text-primary-600 transition-colors">
            Projects
          </Link>
          <Link href="#" className="text-secondary-700 hover:text-primary-600 transition-colors">
            Skills
          </Link>
          <Link href="#" className="text-secondary-700 hover:text-primary-600 transition-colors">
            Experience
          </Link>
          <Link href="#" className="text-secondary-700 hover:text-primary-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              aria-label={link.label || link.platform}
              className="text-xl hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platformIcons[link.platform] || '🔗'}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary-700 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-100 px-4 py-4 space-y-3">
          <Link href="#" className="block text-secondary-700 hover:text-primary-600">
            About
          </Link>
          <Link href="#" className="block text-secondary-700 hover:text-primary-600">
            Projects
          </Link>
          <Link href="#" className="block text-secondary-700 hover:text-primary-600">
            Skills
          </Link>
          <Link href="#" className="block text-secondary-700 hover:text-primary-600">
            Experience
          </Link>
          <Link href="#" className="block text-secondary-700 hover:text-primary-600">
            Contact
          </Link>
          <div className="pt-4 border-t border-gray-200 flex gap-4">
            {socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                className="text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {platformIcons[link.platform] || '🔗'}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.tsx
git commit -m "components: add sticky Header with navigation and social icons"
```

---

### Task 8: Hero Section Component

**Files:**
- Create: `src/components/HeroSection.tsx` (animated name, tagline, avatar, CTA buttons)

**Interfaces:**
- Consumes: `Profile`, `CTAButton[]` from Task 6
- Produces: Hero component with Framer Motion animations

- [ ] **Step 1: Create src/components/HeroSection.tsx**

```typescript
'use client';

import { Profile, CTAButton } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  nameAnimation,
  taglineAnimation,
  avatarAnimation,
  buttonAnimation,
} from './animations';

interface HeroSectionProps {
  profile: Profile;
  ctaButtons: CTAButton[];
}

export default function HeroSection({ profile, ctaButtons }: HeroSectionProps) {
  const getPrimaryButtons = () => ctaButtons.filter(btn => btn.style === 'primary').sort((a, b) => a.displayOrder - b.displayOrder);
  const getSecondaryButtons = () => ctaButtons.filter(btn => btn.style !== 'primary').sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4 py-20 md:py-0">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          {/* Name */}
          <motion.h1
            {...nameAnimation}
            className="text-5xl md:text-6xl font-bold text-secondary-900 leading-tight"
          >
            {profile.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            {...taglineAnimation}
            className="text-2xl md:text-3xl text-primary-600 font-semibold"
          >
            {profile.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            {...taglineAnimation}
            className="text-lg text-secondary-700 max-w-md leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...buttonAnimation}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            {getPrimaryButtons().map(btn => (
              <Link
                key={btn.id}
                href={btn.href}
                className="btn-primary text-center"
              >
                {btn.label}
              </Link>
            ))}
            {getSecondaryButtons().slice(0, 1).map(btn => (
              <Link
                key={btn.id}
                href={btn.href}
                className={btn.style === 'secondary' ? 'btn-secondary text-center' : 'btn-ghost text-center'}
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div
          {...avatarAnimation}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow">
            <Image
              src={profile.avatar.url}
              alt={profile.avatar.alt || profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "components: add animated HeroSection with name, tagline, avatar, and CTA buttons"
```

---

### Task 9: Footer Component

**Files:**
- Create: `src/components/Footer.tsx` (social links, copyright, credits)

**Interfaces:**
- Consumes: `Profile`, `SocialLink[]` from Task 6
- Produces: Footer component

- [ ] **Step 1: Create src/components/Footer.tsx**

```typescript
import { Profile, SocialLink } from '@/types';
import Link from 'next/link';

interface FooterProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

export default function Footer({ profile, socialLinks }: FooterProps) {
  const platformIcons: Record<string, string> = {
    linkedin: '👔',
    github: '🐙',
    twitter: '𝕏',
    email: '✉️',
    instagram: '📷',
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12 md:py-16">
      <div className="container-max space-y-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
            <p className="text-gray-300">{profile.title}</p>
          </div>

          {/* Links Placeholder */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.id}
                  href={link.url}
                  aria-label={link.label || link.platform}
                  className="text-2xl hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platformIcons[link.platform] || '🔗'}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p>Built with Payload CMS & Next.js</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "components: add Footer with social links and credits"
```

---

### Task 10: Root Layout & Page Setup

**Files:**
- Modify: `src/app/layout.tsx` (root layout with metadata)
- Modify: `src/app/page.tsx` (landing page with SSR data fetch)

**Interfaces:**
- Consumes: `fetchPageData()` from Task 6, Header/HeroSection/Footer components from Tasks 7-9
- Produces: Full landing page with data-driven content

- [ ] **Step 1: Update src/app/layout.tsx**

```typescript
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Portfolio | Professional Profile',
  description: 'Modern portfolio website showcasing projects and experience',
  openGraph: {
    title: 'Portfolio',
    description: 'Modern portfolio website',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Update src/app/page.tsx**

```typescript
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { fetchPageData } from '@/lib/payload';

export default async function Home() {
  const { profile, socialLinks, ctaButtons } = await fetchPageData();

  return (
    <>
      <Header socialLinks={socialLinks} name={profile.name} />
      <HeroSection profile={profile} ctaButtons={ctaButtons} />
      <Footer profile={profile} socialLinks={socialLinks} />
    </>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: add root layout and landing page with SSR data fetching"
```

---

### Task 11: Testing & Local Development

**Files:**
- No new files (testing manual page)

**Interfaces:**
- Tests: Page loads, animations render, responsive layout, data displays

- [ ] **Step 1: Start development server**

Run:
```bash
npm run dev
```

- [ ] **Step 2: Add sample data via Payload admin**

Visit `http://localhost:3000/admin`

Create:
1. One Profile document with name, title, tagline, email
2. 2-3 SocialLinks (LinkedIn, GitHub, Twitter)
3. 2-3 CTAButtons (Get in Touch, View Resume, etc.)

- [ ] **Step 3: Test landing page at http://localhost:3000**

Check:
- Header displays with name and social icons
- Hero section animates (name, subtitle, avatar, buttons)
- Content from Payload displays correctly
- Mobile responsive (hamburger menu appears on mobile)
- Footer displays social links and credits
- All links are clickable

- [ ] **Step 4: Verify animations**

Open DevTools, check:
- No console errors
- Animations run at 60fps (Performance tab)
- Hover effects work on buttons
- Mobile menu toggle works

- [ ] **Step 5: Commit (seed data)**

Run:
```bash
git add payload/data.db # or equivalent seed file if not .gitignored
git commit -m "docs: add sample content for testing"
```

Note: If database should not be committed, update .gitignore and commit that change only.

---

### Task 12: Deploy Configuration

**Files:**
- Modify: `.env.local` (production URLs)
- Create: `README.md` (deployment instructions)

**Interfaces:**
- Produces: Deployment-ready project with Vercel configuration

- [ ] **Step 1: Update .env.local for production placeholders**

Add/update:
```env
# Vercel Production
NEXT_PUBLIC_PAYLOAD_URL=https://your-domain.com
DATABASE_URI=file:./data.db
PAYLOAD_SECRET=your-production-secret-key
```

- [ ] **Step 2: Create README.md**

```markdown
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
   cp .env.local.example .env.local
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

### Deployment

Deploy to Vercel (recommended):

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

For other platforms, see Payload CMS & Next.js documentation.

### Content Management

Access the admin panel at `/admin` to:
- Edit profile information
- Manage social links
- Update CTA buttons
- Upload images

All changes are reflected immediately on the landing page.

## License

© 2026. All rights reserved.
```

- [ ] **Step 3: Commit**

```bash
git add .env.local README.md
git commit -m "docs: add deployment configuration and README"
```

---

## Spec Coverage Checklist

- ✅ Architecture: Single Next.js repo with Payload backend
- ✅ Content Model: Profile, SocialLinks, CTAButtons collections
- ✅ Header: Sticky, with nav placeholder, social icons, responsive mobile menu
- ✅ Hero Section: Animated name, tagline, avatar, CTA buttons with Framer Motion
- ✅ Footer: Social links, copyright, credits
- ✅ Animations: Entrance animations (fade, slide, zoom, stagger) at specified durations
- ✅ Responsive: Mobile-first, breakpoints at 640px/1024px
- ✅ Design System: Color palette, typography, spacing configured in Tailwind
- ✅ TypeScript: Full type safety with interfaces
- ✅ Performance: Next.js Image optimization, GPU-accelerated animations
- ✅ SEO: Metadata, OG tags in layout
- ✅ Deployment: Vercel-ready configuration
- ✅ File Structure: Matches spec exactly

