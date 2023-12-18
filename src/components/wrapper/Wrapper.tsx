import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className='mx-auto max-w-lg'>{children}</div>;
};
