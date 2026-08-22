import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { Users } from './collections/Users';
import { Profile } from './collections/Profile';
import { Projects } from './collections/Projects';
import { BlogPosts } from './collections/BlogPosts';
import { ContactSubmissions } from './collections/ContactSubmissions';
import { SocialLinks } from './collections/SocialLinks';
import { CTAButtons } from './collections/CTAButtons';

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    Users,
    Profile,
    Projects,
    BlogPosts,
    ContactSubmissions,
    SocialLinks,
    CTAButtons,
  ],
  secret: process.env.PAYLOAD_SECRET || 'test-secret-key-change-in-production',
  serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PROD_DATABASE_URL || process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/portfolio_db',
    },
  }),
});
