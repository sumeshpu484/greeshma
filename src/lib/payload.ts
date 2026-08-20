import type { Profile, Project, BlogPost, SocialLink, CTAButton, PageData } from '@/types';
import { mockPageData } from './mock-data';

export async function fetchProfile(): Promise<Profile> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/profile?limit=1`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch profile');

    const data = await res.json();
    if (!data.docs || data.docs.length === 0) {
      throw new Error('No profile found');
    }

    const doc = data.docs[0];
    return {
      id: doc.id,
      name: doc.name,
      title: doc.title,
      bio: doc.bio,
      avatar: {
        url: doc.avatar?.url || mockPageData.profile.avatar.url,
        alt: doc.name,
      },
      tagline: doc.tagline,
      email: doc.email,
      phone: doc.phone,
    };
  } catch (error) {
    console.warn('Error fetching profile, using mock data:', error);
    return mockPageData.profile;
  }
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/projects?limit=100`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch projects');

    const data = await res.json();
    return (data.docs || [])
      .map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        slug: doc.slug,
        description: doc.description,
        image: doc.image,
        tags: doc.tags?.map((t: any) => t.tag) || [],
        link: doc.link,
        featured: doc.featured,
        displayOrder: doc.displayOrder,
      }))
      .sort((a: Project, b: Project) => a.displayOrder - b.displayOrder);
  } catch (error) {
    console.warn('Error fetching projects:', error);
    return [];
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/blog-posts?limit=100`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch blog posts');

    const data = await res.json();
    return (data.docs || [])
      .filter((doc: any) => doc.published)
      .map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        slug: doc.slug,
        excerpt: doc.excerpt,
        content: doc.content,
        image: doc.image,
        tags: doc.tags?.map((t: any) => t.tag) || [],
        published: doc.published,
        publishedAt: doc.publishedAt,
      }))
      .sort((a: BlogPost, b: BlogPost) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } catch (error) {
    console.warn('Error fetching blog posts:', error);
    return [];
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/blog-posts?where[slug][equals]=${slug}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error('Failed to fetch blog post');

    const data = await res.json();
    if (!data.docs || data.docs.length === 0) {
      throw new Error('Blog post not found');
    }

    const doc = data.docs[0];
    return {
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt,
      content: doc.content,
      image: doc.image,
      tags: doc.tags?.map((t: any) => t.tag) || [],
      published: doc.published,
      publishedAt: doc.publishedAt,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
}

export async function fetchSocialLinks(): Promise<SocialLink[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/social-links?limit=100`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch social links');

    const data = await res.json();
    return (data.docs || []).sort((a: SocialLink, b: SocialLink) => a.displayOrder - b.displayOrder);
  } catch (error) {
    console.warn('Error fetching social links:', error);
    return mockPageData.socialLinks;
  }
}

export async function fetchCTAButtons(): Promise<CTAButton[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/cta-buttons?limit=100`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch CTA buttons');

    const data = await res.json();
    return (data.docs || []).sort((a: CTAButton, b: CTAButton) => a.displayOrder - b.displayOrder);
  } catch (error) {
    console.warn('Error fetching CTA buttons:', error);
    return mockPageData.ctaButtons;
  }
}

export async function fetchPageData(): Promise<PageData> {
  const [profile, socialLinks, ctaButtons, projects, blogPosts] = await Promise.all([
    fetchProfile(),
    fetchSocialLinks(),
    fetchCTAButtons(),
    fetchProjects(),
    fetchBlogPosts(),
  ]);

  return { profile, socialLinks, ctaButtons, projects, blogPosts };
}
