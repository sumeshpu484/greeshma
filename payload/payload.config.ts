import { buildConfig } from 'payload';
import { Profile } from './collections/Profile';
import { SocialLinks } from './collections/SocialLinks';
import { CTAButtons } from './collections/CTAButtons';

const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
    },
  ],
};

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Profile,
    SocialLinks,
    CTAButtons,
  ],
  secret: process.env.PAYLOAD_SECRET || 'test-secret-key-change-in-production',
  serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000',
});
