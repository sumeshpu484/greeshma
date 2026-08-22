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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
            <p className="text-gray-300">{profile.title}</p>
          </div>

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

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p>Built with Payload CMS & Next.js</p>
        </div>
      </div>
    </footer>
  );
}
