import type { Metadata } from 'next';
import '../globals.css';
import ThemeProvider, { themeInitScript } from '@/components/ThemeProvider';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
