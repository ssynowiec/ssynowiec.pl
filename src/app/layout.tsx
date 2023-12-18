import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import './globals.scss';
import { ReactNode } from 'react';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Stanisław Synowiec',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${GeistSans.className} flex h-screen flex-col`}>
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
