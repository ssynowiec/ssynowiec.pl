import { ReactNode } from 'react';

interface PageTitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  children: ReactNode;
}

export const PageTitle = ({ tag: Tag = 'h1', children }: PageTitleProps) => {
  return (
    <Tag className='bg-gradient-to-br from-[#ec4899] via-[#ef4444] via-30% to-[#eab308] bg-clip-text text-6xl font-bold text-transparent'>
      {children}
    </Tag>
  );
};
