'use client';

import { Wrapper } from '@/components/wrapper/Wrapper';
import { useTheme } from 'next-themes';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className='flex w-full'>
      <Wrapper>
        <div>
          <button onClick={toggleTheme}>change theme</button>
        </div>
      </Wrapper>
    </header>
  );
};
