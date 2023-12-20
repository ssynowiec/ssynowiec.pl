import { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className='bg-gradient-to-br from-[#ec4899] via-[#ef4444] via-30% to-[#eab308] bg-clip-text text-6xl font-bold text-transparent'>
      {children}
    </h1>
  );
};
