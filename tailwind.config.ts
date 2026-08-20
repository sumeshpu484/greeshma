import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
        secondary: {
          50: '#f9fafb',
          700: '#374151',
          900: '#111827',
        },
        accent: {
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '12px': '12px',
      },
      borderRadius: {
        '2xl': '16px',
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
