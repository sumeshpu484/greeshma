import { CollectionConfig } from 'payload';
import { revalidateOnChange, revalidateOnDelete } from '../hooks/revalidate';

export const SocialLinks: CollectionConfig = {
  slug: 'social-links',
  labels: {
    singular: 'Social Link',
    plural: 'Social Links',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateOnChange('social-links')],
    afterDelete: [revalidateOnDelete('social-links')],
  },
  fields: [
    {
      name: 'platform',
      type: 'select',
      required: true,
      options: [
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'GitHub', value: 'github' },
        { label: 'Twitter', value: 'twitter' },
        { label: 'Email', value: 'email' },
        { label: 'Instagram', value: 'instagram' },
      ],
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'URL',
    },
    {
      name: 'label',
      type: 'text',
      label: 'Display Label (Optional)',
    },
    {
      name: 'displayOrder',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Display Order',
    },
  ],
  admin: {
    useAsTitle: 'platform',
  },
};
