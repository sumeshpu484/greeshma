import { CollectionConfig } from 'payload';

export const SocialLinks: CollectionConfig = {
  slug: 'social-links',
  labels: {
    singular: 'Social Link',
    plural: 'Social Links',
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
