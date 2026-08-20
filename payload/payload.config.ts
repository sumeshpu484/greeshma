import { buildConfig } from 'payload';
import { Profile } from './collections/Profile';
import { SocialLinks } from './collections/SocialLinks';
import { CTAButtons } from './collections/CTAButtons';

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    Profile,
    SocialLinks,
    CTAButtons,
  ],
  secret: process.env.PAYLOAD_SECRET || 'change-me-in-production',
});
