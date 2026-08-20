import type { PageData } from '@/types';

export const mockPageData: PageData = {
  profile: {
    id: '1',
    name: 'Greeshma Kumar',
    title: 'Full Stack Developer & Designer',
    bio: 'I\'m a passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies. When I\'m not coding, you can find me contributing to open-source projects or writing technical blogs.',
    avatar: {
      url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=greeshma',
      alt: 'Greeshma Kumar',
    },
    tagline: 'Building beautiful web experiences with modern technology',
    email: 'greeshma@example.com',
    phone: '+1 (555) 123-4567',
  },
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      slug: 'ecommerce-platform',
      description: 'A full-featured e-commerce platform built with Next.js and Node.js. Features include product catalog, shopping cart, payment processing with Stripe, and admin dashboard. Deployed on Vercel with PostgreSQL backend.',
      image: 'https://images.unsplash.com/photo-1523666952115-fbfdc9dfd6c1?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      link: 'https://github.com/greeshma/ecommerce-platform',
      featured: true,
      displayOrder: 1,
    },
    {
      id: '2',
      title: 'AI Chat Application',
      slug: 'ai-chat-application',
      description: 'Real-time chat application powered by OpenAI API. Features WebSocket connections for live messaging, user authentication, message history, and conversation management. Built with React and Express.js.',
      image: 'https://images.unsplash.com/photo-1611282131881-a34b08be980d?w=500&h=300&fit=crop',
      tags: ['React', 'Express.js', 'OpenAI', 'WebSocket', 'MongoDB'],
      link: 'https://github.com/greeshma/ai-chat',
      featured: true,
      displayOrder: 2,
    },
    {
      id: '3',
      title: 'Task Management Dashboard',
      slug: 'task-management-dashboard',
      description: 'Collaborative task management tool with real-time updates. Includes kanban boards, team collaboration, project analytics, and notification system. Built with Vue.js and Firebase.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Real-time Updates'],
      link: 'https://github.com/greeshma/task-dashboard',
      featured: true,
      displayOrder: 3,
    },
    {
      id: '4',
      title: 'Weather Forecast App',
      slug: 'weather-forecast-app',
      description: 'Modern weather application with real-time forecasts, location-based weather, and weather alerts. Uses OpenWeather API and built with React Native for iOS and Android.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
      tags: ['React Native', 'OpenWeather API', 'Mobile', 'Expo'],
      link: 'https://github.com/greeshma/weather-app',
      featured: false,
      displayOrder: 4,
    },
  ],
  blogPosts: [
    {
      id: '1',
      title: 'Building Scalable Web Applications with Next.js',
      slug: 'nextjs-scalable-apps',
      excerpt: 'Learn how to build production-ready, scalable web applications using Next.js 14. In this comprehensive guide, I\'ll share best practices, performance optimization techniques, and real-world examples.',
      content: `# Building Scalable Web Applications with Next.js

Next.js has become my go-to framework for building modern web applications. In this article, I'll share the strategies and best practices I've learned over the past few years.

## Why Next.js?

Next.js provides everything you need out of the box:
- Server-side rendering for better SEO
- API routes for backend functionality
- Automatic code splitting and optimization
- Built-in TypeScript support
- Flexible deployment options

## Key Optimization Techniques

### 1. Image Optimization
Always use the Next.js Image component for better performance. This automatically optimizes images for different screen sizes and formats.

### 2. Server Components
Use Server Components to reduce JavaScript sent to the browser and improve performance significantly.

### 3. Caching Strategies
Implement proper caching strategies using Next.js revalidation and HTTP cache headers.

## Deployment Considerations

When deploying to production, consider:
- Environment variables for different stages
- Database optimization and indexing
- CDN configuration
- Monitoring and logging setup

## Conclusion

By following these practices, you'll build faster, more scalable applications that users love.`,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
      tags: ['Next.js', 'React', 'Web Development', 'Performance'],
      published: true,
      publishedAt: '2026-08-15',
    },
    {
      id: '2',
      title: 'React Hooks Best Practices',
      slug: 'react-hooks-best-practices',
      excerpt: 'A deep dive into React Hooks and the best practices for using them effectively in your applications. Learn how to avoid common pitfalls and write better, cleaner code.',
      content: `# React Hooks Best Practices

React Hooks have revolutionized how we write React components. Here are the best practices I've learned from years of experience.

## Rule of Hooks

Always follow the rules of hooks:
1. Only call hooks at the top level
2. Only call hooks from React functions
3. Use ESLint plugin to enforce these rules

## Custom Hooks

Create custom hooks to share logic between components. This promotes code reuse and makes your components cleaner.

## Performance Optimization

Use useMemo and useCallback wisely to optimize performance without over-optimizing. Not every callback needs to be memoized.

## Common Patterns

Learn common patterns like useEffect cleanup, dependency arrays, and proper state management with hooks.`,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=600&fit=crop',
      tags: ['React', 'JavaScript', 'Web Development', 'Hooks'],
      published: true,
      publishedAt: '2026-08-10',
    },
    {
      id: '3',
      title: 'TypeScript Tips for Better Code',
      slug: 'typescript-tips-better-code',
      excerpt: 'Discover essential TypeScript tips and tricks to write more maintainable and type-safe code. From generics to advanced patterns, level up your TypeScript skills.',
      content: `# TypeScript Tips for Better Code

TypeScript has become essential in my development workflow. Here are my top tips for writing better TypeScript code.

## Use Strict Mode

Always enable strict mode in tsconfig.json. This catches more errors at compile time.

## Type Inference

Let TypeScript infer types when possible. You don't always need to explicitly type everything.

## Generics

Use generics to write flexible, reusable code that works with different types while maintaining type safety.

## Advanced Patterns

Learn about utility types, conditional types, and mapped types for advanced TypeScript patterns.`,
      image: 'https://images.unsplash.com/photo-1516321318423-f06ad642c38f?w=1200&h=600&fit=crop',
      tags: ['TypeScript', 'JavaScript', 'Development', 'Best Practices'],
      published: true,
      publishedAt: '2026-08-05',
    },
    {
      id: '4',
      title: 'Getting Started with Tailwind CSS',
      slug: 'tailwind-css-guide',
      excerpt: 'A beginner\'s guide to Tailwind CSS. Learn how to build modern, responsive designs without leaving your HTML. Includes tips, tricks, and real-world examples.',
      content: `# Getting Started with Tailwind CSS

Tailwind CSS has transformed how I approach styling. Here's what I've learned.

## Why Tailwind?

- Write styles directly in HTML
- No naming conventions needed
- Better performance with purging
- Highly customizable
- Active community

## Installation

Install Tailwind CSS in your project with a few simple commands.

## Building Components

Build beautiful components using Tailwind's utility classes. Learn how to compose complex designs.

## Customization

Customize Tailwind to match your brand by extending the configuration.`,
      image: 'https://images.unsplash.com/photo-1540880197086-7d194c50881b?w=1200&h=600&fit=crop',
      tags: ['CSS', 'Tailwind', 'Design', 'Web Development'],
      published: true,
      publishedAt: '2026-08-01',
    },
  ],
  socialLinks: [
    {
      id: '1',
      platform: 'linkedin',
      url: 'https://linkedin.com/in/greeshma',
      label: 'LinkedIn',
      displayOrder: 1,
    },
    {
      id: '2',
      platform: 'github',
      url: 'https://github.com/greeshma',
      label: 'GitHub',
      displayOrder: 2,
    },
    {
      id: '3',
      platform: 'twitter',
      url: 'https://twitter.com/greeshma',
      label: 'Twitter',
      displayOrder: 3,
    },
    {
      id: '4',
      platform: 'email',
      url: 'mailto:greeshma@example.com',
      label: 'Email',
      displayOrder: 4,
    },
  ],
  ctaButtons: [
    {
      id: '1',
      label: 'Get in Touch',
      href: 'mailto:greeshma@example.com',
      style: 'primary',
      displayOrder: 1,
    },
    {
      id: '2',
      label: 'View Resume',
      href: 'https://example.com/resume.pdf',
      style: 'secondary',
      displayOrder: 2,
    },
  ],
};
