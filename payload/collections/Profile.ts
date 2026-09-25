import { CollectionConfig } from 'payload';
import { revalidateOnChange, revalidateOnDelete } from '../hooks/revalidate';

export const Profile: CollectionConfig = {
  slug: 'profile',
  labels: {
    singular: 'Profile',
    plural: 'Profiles',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateOnChange('profile')],
    afterDelete: [revalidateOnDelete('profile')],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Professional Title',
      admin: {
        placeholder: 'e.g., Full Stack Engineer',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Tagline/Short Intro',
      admin: {
        placeholder: 'Short introduction for hero section',
      },
    },
    {
      name: 'bio',
      type: 'text',
      required: true,
      label: 'Biography',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Profile Photo',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      admin: {
        description: 'Public contact email shown on the site',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number (Optional)',
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
};
