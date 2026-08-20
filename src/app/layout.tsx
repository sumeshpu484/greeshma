import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Portfolio | Professional Profile',
  description: 'Modern portfolio website showcasing projects and experience',
  openGraph: {
    title: 'Portfolio',
    description: 'Modern portfolio website',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
