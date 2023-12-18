import { Wrapper } from '@/components/wrapper/Wrapper';
import { ThemeSwitcher } from '@/components/themeSwitcher/ThemeSwitcher';

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
