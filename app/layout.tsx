import type { Metadata, Viewport } from 'next';
import { Fraunces, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wolfofclaude.com',
  ),
  title: 'Wolf of Claude · Build loud. Ship faster than they can copy.',
  description:
    'Apps, Web3, and the kind of velocity that gets you flagged for cheating. Building with AI in public. Watch the build, or learn the system.',
  openGraph: {
    title: 'Wolf of Claude',
    description: 'Build loud. Ship faster than they can copy.',
    images: ['/app-icon-1024.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wolf of Claude',
    description: 'Build loud. Ship faster than they can copy.',
    images: ['/app-icon-1024.png'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/app-icon-256.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#F2ECE0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrains.variable} ${inter.variable}`}
    >
      <body className="grain" suppressHydrationWarning>{children}</body>
    </html>
  );
}
