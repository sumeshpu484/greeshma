'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Profile, SocialLink } from '@/types';

interface ContactFormPageProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

export default function ContactFormPage({ profile, socialLinks }: ContactFormPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Create Together
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to discuss your next project or explore collaboration opportunities? I'm always interested in hearing about new ventures and challenges.
          </p>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 pb-32 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 border-l-4 border-orange-500">
            <ContactForm />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Email</h3>
            <a
              href={`mailto:${profile.email}`}
              className="text-orange-600 hover:text-orange-700 transition-colors text-lg font-medium"
            >
              {profile.email}
            </a>
          </div>

          {profile.phone && (
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Phone</h3>
              <a
                href={`tel:${profile.phone}`}
                className="text-orange-600 hover:text-orange-700 transition-colors text-lg font-medium"
              >
                {profile.phone}
              </a>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const icons: Record<string, string> = {
                  linkedin: '👔',
                  github: '🐙',
                  twitter: '𝕏',
                  email: '✉️',
                  instagram: '📷',
                };
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-orange-600 transition-colors"
                    title={link.platform}
                  >
                    {icons[link.platform] || '🔗'}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Response time:</strong> I typically respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
