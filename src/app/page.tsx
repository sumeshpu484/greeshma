import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { fetchPageData } from '@/lib/payload';

export default async function Home() {
  try {
    const { profile, socialLinks, ctaButtons } = await fetchPageData();

    return (
      <>
        <Header socialLinks={socialLinks} name={profile.name} />
        <HeroSection profile={profile} ctaButtons={ctaButtons} />
        <Footer profile={profile} socialLinks={socialLinks} />
      </>
    );
  } catch (error) {
    console.error('Error loading page data:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-gray-600 mb-4">
            Loading portfolio... Make sure Payload CMS is running and has content configured.
          </p>
        </div>
      </div>
    );
  }
}
