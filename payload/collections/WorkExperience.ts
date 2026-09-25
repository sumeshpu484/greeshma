import { CollectionConfig } from 'payload';
import { revalidateOnChange, revalidateOnDelete } from '../hooks/revalidate';

export const WorkExperience: CollectionConfig = {
  slug: 'work-experience',
  labels: {
    singular: 'Work Experience',
    plural: 'Work Experience',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateOnChange('work-experience')],
    afterDelete: [revalidateOnDelete('work-experience')],
  },
  fields: [
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'period',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'e.g., Jun 2022 - Present',
      },
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'responsibilities',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'full-time',
      options: [
        { label: 'Full-time', value: 'full-time' },
        { label: 'Part-time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
        { label: 'Freelance', value: 'freelance' },
      ],
    },
    {
      name: 'displayOrder',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Lower numbers show first (most recent role = 0)',
      },
    },
  ],
  admin: {
    useAsTitle: 'position',
    defaultColumns: ['position', 'company', 'period', 'displayOrder'],
  },
};
