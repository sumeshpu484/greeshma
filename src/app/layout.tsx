import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
