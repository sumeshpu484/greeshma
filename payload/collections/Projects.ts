import { CollectionConfig } from 'payload';
import { revalidateOnChange, revalidateOnDelete } from '../hooks/revalidate';

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateOnChange('projects')],
    afterDelete: [revalidateOnDelete('projects')],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'displayOrder',
      type: 'number',
      defaultValue: 0,
    },
  ],
  admin: {
    useAsTitle: 'title',
  },
};
