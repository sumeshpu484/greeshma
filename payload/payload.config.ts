import path from 'path';
import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
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
  db: sqliteAdapter({
    url: process.env.DATABASE_URI || 'file:./data.db',
  }),
  secret: process.env.PAYLOAD_SECRET || 'change-me',
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
