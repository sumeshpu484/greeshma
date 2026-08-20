import type { Profile, SocialLink, CTAButton, PageData } from '@/types';
import { mockPageData } from './mock-data';

// Get admin data from browser localStorage (available on client side)
function getAdminData() {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('portfolioAdmin');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.log('Could not parse admin data');
    }
  }
  return null;
}

export async function fetchProfile(): Promise<Profile> {
  try {
    // First try Payload CMS
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
        url: typeof doc.avatar === 'string'
          ? `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${doc.avatar}`
          : doc.avatar?.filename || '/placeholder-avatar.jpg',
        alt: doc.name,
      },
      tagline: doc.tagline,
      email: doc.email,
      phone: doc.phone,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    };
  } catch (error) {
    console.warn('Payload CMS unavailable, checking admin data...');

    // Fallback to admin panel data
    const adminData = getAdminData();
    if (adminData?.profile) {
      return {
        id: '1',
        ...adminData.profile,
        avatar: {
          url: adminData.profile.avatarUrl || mockPageData.profile.avatar.url,
          alt: adminData.profile.name,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    }

    // Final fallback to mock data
    return mockPageData.profile;
  }
}

export async function fetchSocialLinks(): Promise<SocialLink[]> {
  try {
    // First try Payload CMS
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/social-links?sort=-displayOrder&limit=100`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error('Failed to fetch social links');

    const data = await res.json();
    return (data.docs || []).map((doc: any) => ({
      id: doc.id,
      platform: doc.platform,
      url: doc.url,
      label: doc.label,
      displayOrder: doc.displayOrder,
    }));
  } catch (error) {
    console.warn('Payload CMS unavailable, checking admin data...');

    // Fallback to admin panel data
    const adminData = getAdminData();
    if (adminData?.socialLinks) {
      return adminData.socialLinks;
    }

    // Final fallback to mock data
    return mockPageData.socialLinks;
  }
}

export async function fetchCTAButtons(): Promise<CTAButton[]> {
  try {
    // First try Payload CMS
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/cta-buttons?sort=-displayOrder&limit=100`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error('Failed to fetch CTA buttons');

    const data = await res.json();
    return (data.docs || []).map((doc: any) => ({
      id: doc.id,
      label: doc.label,
      href: doc.href,
      style: doc.style,
      displayOrder: doc.displayOrder,
    }));
  } catch (error) {
    console.warn('Payload CMS unavailable, checking admin data...');

    // Fallback to admin panel data
    const adminData = getAdminData();
    if (adminData?.ctaButtons) {
      return adminData.ctaButtons;
    }

    // Final fallback to mock data
    return mockPageData.ctaButtons;
  }
}

export async function fetchPageData(): Promise<PageData> {
  const [profile, socialLinks, ctaButtons] = await Promise.all([
    fetchProfile(),
    fetchSocialLinks(),
    fetchCTAButtons(),
  ]);

  return { profile, socialLinks, ctaButtons };
}
