import { CollectionConfig } from 'payload';

export const Profile: CollectionConfig = {
  slug: 'profile',
  labels: {
    singular: 'Profile',
    plural: 'Profiles',
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
      placeholder: 'e.g., Full Stack Engineer',
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Tagline/Short Intro',
      placeholder: 'Short introduction for hero section',
    },
    {
      name: 'bio',
      type: 'text',
      required: true,
      label: 'Biography',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
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
