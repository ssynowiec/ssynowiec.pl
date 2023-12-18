import { Wrapper } from '@/components/wrapper/wrapper';
import { ThemeSwitcher } from '@/components/themeSwitcher/themeSwitcher';
import { Navigation } from '@/components/navigation/navigation';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <div className='flex w-screen items-center justify-between'>
          <div className='flex items-center justify-center gap-4'>
            <Link href='/' className='text-lg font-bold'>
              ssynowiec.pl
            </Link>
            <Navigation />
          </div>
          <ThemeSwitcher />
        </div>
      </Wrapper>
    </header>
  );
};
