# Demo Content for Portfolio

This file contains sample content you can add to the Payload CMS admin panel.

---

## 1. PROFILE

**Go to:** Admin Panel → Profile Collection → Create New

```
Name: Greeshma Kumar
Title: Full Stack Developer & Designer
Tagline: Building beautiful web experiences with modern technology
Email: greeshma@example.com
Phone: +1 (555) 123-4567
Bio: I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find me contributing to open-source projects or writing technical blogs.
Avatar URL: https://api.dicebear.com/7.x/avataaars/svg?seed=greeshma
```

---

## 2. PROJECTS (Add 3-4 Projects)

### Project 1

**Go to:** Admin Panel → Projects → Create New

```
Title: E-Commerce Platform
Slug: ecommerce-platform
Description: A full-featured e-commerce platform built with Next.js and Node.js. Features include product catalog, shopping cart, payment processing with Stripe, and admin dashboard. Deployed on Vercel with PostgreSQL backend.
Image: https://images.unsplash.com/photo-1523666952115-fbfdc9dfd6c1?w=500&h=300&fit=crop
Tags: [Next.js, Node.js, PostgreSQL, Stripe, Tailwind CSS]
Link: https://github.com/greeshma/ecommerce-platform
Featured: YES (checkmark)
Display Order: 1
```

### Project 2

```
Title: AI Chat Application
Slug: ai-chat-application
Description: Real-time chat application powered by OpenAI API. Features WebSocket connections for live messaging, user authentication, message history, and conversation management. Built with React and Express.js.
Image: https://images.unsplash.com/photo-1611282131881-a34b08be980d?w=500&h=300&fit=crop
Tags: [React, Express.js, OpenAI, WebSocket, MongoDB]
Link: https://github.com/greeshma/ai-chat
Featured: YES
Display Order: 2
```

### Project 3

```
Title: Task Management Dashboard
Slug: task-management-dashboard
Description: Collaborative task management tool with real-time updates. Includes kanban boards, team collaboration, project analytics, and notification system. Built with Vue.js and Firebase.
Image: https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop
Tags: [Vue.js, Firebase, Tailwind CSS, Real-time Updates]
Link: https://github.com/greeshma/task-dashboard
Featured: YES
Display Order: 3
```

### Project 4 (Optional)

```
Title: Weather Forecast App
Slug: weather-forecast-app
Description: Modern weather application with real-time forecasts, location-based weather, and weather alerts. Uses OpenWeather API and built with React Native for iOS and Android.
Image: https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop
Tags: [React Native, OpenWeather API, Mobile, Expo]
Link: https://github.com/greeshma/weather-app
Featured: NO
Display Order: 4
```

---

## 3. BLOG POSTS (Add 3-5 Articles)

### Blog Post 1

**Go to:** Admin Panel → Blog Posts → Create New

```
Title: Building Scalable Web Applications with Next.js
Slug: nextjs-scalable-apps
Excerpt: Learn how to build production-ready, scalable web applications using Next.js 14. In this comprehensive guide, I'll share best practices, performance optimization techniques, and real-world examples.
Content: 
# Building Scalable Web Applications with Next.js

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
Always use the Next.js Image component for better performance:
```tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
    />
  );
}
```

### 2. Server Components
Use Server Components to reduce JavaScript sent to the browser:
```tsx
export default async function Posts() {
  const posts = await fetchPosts();
  return <div>{/* render posts */}</div>;
}
```

## Conclusion

By following these practices, you'll build faster, more scalable applications that users love.

Image: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop
Tags: [Next.js, React, Web Development, Performance]
Published At: 2026-08-15
Published: YES
```

### Blog Post 2

```
Title: React Hooks Best Practices
Slug: react-hooks-best-practices
Excerpt: A deep dive into React Hooks and the best practices for using them effectively in your applications. Learn how to avoid common pitfalls and write better, cleaner code.
Content: 
# React Hooks Best Practices

React Hooks have revolutionized how we write React components. Here are the best practices I've learned.

## Rule of Hooks

Always follow the rules of hooks:
1. Only call hooks at the top level
2. Only call hooks from React functions
3. Use ESLint plugin to enforce these rules

## Custom Hooks

Create custom hooks to share logic between components:

```tsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
```

## Performance Optimization

Use useMemo and useCallback wisely to optimize performance without over-optimizing.

Image: https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=600&fit=crop
Tags: [React, JavaScript, Web Development]
Published At: 2026-08-10
Published: YES
```

### Blog Post 3

```
Title: TypeScript Tips for Better Code
Slug: typescript-tips-better-code
Excerpt: Discover essential TypeScript tips and tricks to write more maintainable and type-safe code. From generics to advanced patterns, level up your TypeScript skills.
Content: 
# TypeScript Tips for Better Code

TypeScript has become essential in my development workflow. Here are my top tips.

## Use Strict Mode

Always enable strict mode in tsconfig.json:
```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## Type Inference

Let TypeScript infer types when possible:
```tsx
// Good - TypeScript infers the type
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Type is inferred as { id: number; name: string }[]
```

## Generics

Use generics to write flexible, reusable code:
```tsx
function createArray<T>(item: T): T[] {
  return [item];
}

const numbers = createArray(1);    // number[]
const strings = createArray("hi"); // string[]
```

Image: https://images.unsplash.com/photo-1516321318423-f06ad642c38f?w=1200&h=600&fit=crop
Tags: [TypeScript, JavaScript, Development]
Published At: 2026-08-05
Published: YES
```

### Blog Post 4 (Optional)

```
Title: Getting Started with Tailwind CSS
Slug: tailwind-css-guide
Excerpt: A beginner's guide to Tailwind CSS. Learn how to build modern, responsive designs without leaving your HTML. Includes tips, tricks, and real-world examples.
Content: 
# Getting Started with Tailwind CSS

Tailwind CSS has transformed how I approach styling. Here's what I've learned.

## Why Tailwind?

- Write styles directly in HTML
- No naming conventions needed
- Better performance with purging
- Highly customizable
- Active community

## Installation

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Building Components

```html
<div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Welcome</h1>
    <p class="text-gray-600">Build beautiful designs with Tailwind CSS</p>
  </div>
</div>
```

Image: https://images.unsplash.com/photo-1540880197086-7d194c50881b?w=1200&h=600&fit=crop
Tags: [CSS, Tailwind, Design, Web Development]
Published At: 2026-08-01
Published: YES
```

---

## 4. SOCIAL LINKS

**Go to:** Admin Panel → Social Links → Create New (Add Each)

### Link 1
```
Platform: linkedin
URL: https://linkedin.com/in/greeshma
Label: LinkedIn
Display Order: 1
```

### Link 2
```
Platform: github
URL: https://github.com/greeshma
Label: GitHub
Display Order: 2
```

### Link 3
```
Platform: twitter
URL: https://twitter.com/greeshma
Label: Twitter
Display Order: 3
```

### Link 4
```
Platform: email
URL: mailto:greeshma@example.com
Label: Email
Display Order: 4
```

### Link 5 (Optional)
```
Platform: instagram
URL: https://instagram.com/greeshma
Label: Instagram
Display Order: 5
```

---

## 5. CTA BUTTONS

**Go to:** Admin Panel → CTA Buttons → Create New (Add Each)

### Button 1
```
Label: Get in Touch
URL: mailto:greeshma@example.com
Style: primary
Display Order: 1
```

### Button 2
```
Label: View Resume
URL: https://example.com/resume.pdf
Style: secondary
Display Order: 2
```

### Button 3 (Optional)
```
Label: Follow on GitHub
URL: https://github.com/greeshma
Style: ghost
Display Order: 3
```

---

## 📸 Image URLs (If You Need Alternatives)

Replace the image URLs with your own, or use these free stock photo URLs:

**Project Images:**
- E-Commerce: https://images.unsplash.com/photo-1547866559-7be837bd5f32?w=500&h=300
- AI Chat: https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=300
- Task Dashboard: https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300
- Weather: https://images.unsplash.com/photo-1591873968053-1ceff0b3c4c6?w=500&h=300

**Blog Images:**
- Technology: https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=600
- Code: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600
- Development: https://images.unsplash.com/photo-1516321318423-f06ad642c38f?w=1200&h=600
- Design: https://images.unsplash.com/photo-1540880197086-7d194c50881b?w=1200&h=600

**Avatar:**
- https://api.dicebear.com/7.x/avataaars/svg?seed=greeshma
- Or use your own photo URL

---

## 📋 How to Add This Content

1. **Start Dev Server:**
   ```bash
   npm run dev
   ```

2. **Go to Admin Panel:**
   ```
   http://localhost:3000/admin
   ```

3. **Create Admin Account** (First time only)
   - Email: admin@example.com
   - Password: YourSecurePassword

4. **Add Profile:**
   - Click "Profile" collection
   - Fill in your information from above
   - Click "Save"

5. **Add Projects:**
   - Click "Projects" collection
   - Click "Create New"
   - Fill in project details
   - Repeat for each project
   - Don't forget to mark 3+ as "Featured"

6. **Add Blog Posts:**
   - Click "Blog Posts" collection
   - Click "Create New"
   - Fill in article details
   - Set "Published" to checked
   - Click "Save"

7. **Add Social Links:**
   - Click "Social Links" collection
   - Click "Create New" for each platform
   - Fill in platform and URL
   - Set display order

8. **Add CTA Buttons:**
   - Click "CTA Buttons" collection
   - Click "Create New" for each button
   - Fill in label, URL, and style
   - Set display order

---

## 🎯 After Adding Content

**View Your Portfolio:**
```
http://localhost:3000
```

You should now see:
- ✅ Your profile on home page
- ✅ Featured projects section
- ✅ Latest blog posts preview
- ✅ Social links in header/footer
- ✅ CTA buttons on hero section
- ✅ Full blog page with all articles
- ✅ Full projects page
- ✅ About page with your bio

---

**Happy building! 🚀**
