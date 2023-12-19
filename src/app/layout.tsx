import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import './globals.scss';
import { ReactNode } from 'react';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { Providers } from '@/components/providers/providers';
import GoogleAnalytics from '@/components/googleAnalytics/googleAnalytics';

export const metadata: Metadata = {
  title: 'Stanisław Synowiec',
  description: 'Stanisław Synowiec - Frontend Developer personal website',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${GeistSans.className} flex h-screen flex-col`}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ? (
          <GoogleAnalytics
            ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
          />
        ) : null}
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
