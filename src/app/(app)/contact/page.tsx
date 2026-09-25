import { Metadata } from 'next';
import HeaderMinimal from '@/components/HeaderMinimal';
import FooterMinimal from '@/components/FooterMinimal';
import ContactFormPage from '@/components/ContactFormPage';
import { fetchPageData } from '@/lib/payload';

export const metadata: Metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch with me',
};

export default async function ContactPage() {
  const { profile, socialLinks } = await fetchPageData();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <HeaderMinimal socialLinks={socialLinks} name={profile.name} />
      <ContactFormPage profile={profile} socialLinks={socialLinks} />
      <FooterMinimal profile={profile} socialLinks={socialLinks} />
    </div>
  );
}
