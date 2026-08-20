import type { Profile, SocialLink, CTAButton, PageData } from '@/types';

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
    console.error('Error fetching profile:', error);
    throw error;
  }
}

export async function fetchSocialLinks(): Promise<SocialLink[]> {
  try {
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
    console.error('Error fetching social links:', error);
    return [];
  }
}

export async function fetchCTAButtons(): Promise<CTAButton[]> {
  try {
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
    console.error('Error fetching CTA buttons:', error);
    return [];
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
