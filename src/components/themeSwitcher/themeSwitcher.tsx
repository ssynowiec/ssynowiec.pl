'use client';

import { useTheme } from 'next-themes';
import { Sun } from '@/components/themeSwitcher/sun';
import { Moon } from '@/components/themeSwitcher/moon';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={toggleTheme} aria-label='Toggle theme'>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};
