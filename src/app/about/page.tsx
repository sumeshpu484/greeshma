import { Metadata } from 'next';
import { fetchPageData } from '@/lib/payload';
import HeaderMinimal from '@/components/HeaderMinimal';
import FooterMinimal from '@/components/FooterMinimal';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about me and my journey',
};

export default async function AboutPage() {
  try {
    const { profile, socialLinks } = await fetchPageData();

    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <HeaderMinimal socialLinks={socialLinks} name={profile.name} />
        <AboutPageClient profile={profile} />
        <FooterMinimal profile={profile} socialLinks={socialLinks} />
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">About</h1>
          <p className="text-gray-600 dark:text-gray-400">Loading profile information...</p>
        </div>
      </div>
    );
  }
}
