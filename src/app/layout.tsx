import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Cormorant_Garamond, Noto_Serif_Devanagari, Noto_Serif_Telugu } from 'next/font/google';

import { PageShell } from '@/components/page-shell';
import { SiteAtmosphere } from '@/components/site-atmosphere';

import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-devanagari',
  display: 'swap',
});

const telugu = Noto_Serif_Telugu({
  subsets: ['telugu', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-telugu',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'DivineSV | A digital mandir for Sanatana Dharma',
    template: '%s | DivineSV',
  },
  description:
    'DivineSV is a devotional website dedicated to Shiva, Vishnu, Devi, Ganesha, Hanuman, Hindu festivals, stotras, and sacred knowledge.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${devanagari.variable} ${telugu.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var stored=localStorage.getItem('divinesv-theme');var theme=(stored==='light'||stored==='dark')?stored:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;}catch(e){}})();`,
          }}
        />
        <script src="https://kit.fontawesome.com/af97e631d2.js" crossOrigin="anonymous" />
      </head>
      <body>
        <SiteAtmosphere />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
