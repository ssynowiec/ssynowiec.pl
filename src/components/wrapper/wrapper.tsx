import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface WrapperProps {
  direction?: 'row' | 'column';
  children: ReactNode;
}

export const Wrapper = ({ direction = 'row', children }: WrapperProps) => {
  const directionClass = direction === 'column' ? 'flex-col' : 'flex-row';

  return (
    <div
      className={clsx(
        'mx-auto flex w-full max-w-7xl items-center px-6 py-3',
        directionClass,
      )}
    >
      {children}
    </div>
  );
};
