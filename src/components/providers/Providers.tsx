'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};
