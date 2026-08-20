import { CollectionConfig } from 'payload';

export const CTAButtons: CollectionConfig = {
  slug: 'cta-buttons',
  labels: {
    singular: 'CTA Button',
    plural: 'CTA Buttons',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Button Text',
      placeholder: 'e.g., Get in Touch',
    },
    {
      name: 'href',
      type: 'text',
      required: true,
      label: 'Link/URL',
      placeholder: 'mailto:email@example.com or /contact',
    },
    {
      name: 'style',
      type: 'select',
      required: true,
      options: [
        { label: 'Primary (filled)', value: 'primary' },
        { label: 'Secondary (outlined)', value: 'secondary' },
        { label: 'Ghost (text-only)', value: 'ghost' },
      ],
      defaultValue: 'primary',
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
    useAsTitle: 'label',
  },
};
