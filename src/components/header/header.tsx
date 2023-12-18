import { Wrapper } from '@/components/wrapper/wrapper';
import { ThemeSwitcher } from '@/components/themeSwitcher/themeSwitcher';

export const Header = () => {
  return (
    <header className='flex w-full'>
      <Wrapper>
        <div>
          <ThemeSwitcher />
        </div>
      </Wrapper>
    </header>
  );
};
