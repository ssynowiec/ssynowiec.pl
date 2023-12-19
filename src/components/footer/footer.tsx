import { Wrapper } from '@/components/wrapper/wrapper';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className='flex w-full'>
      <Wrapper>
        <p className='w-full text-center'>
          &copy; {currentYear} Stanisław Synowiec. All rights reserved.
        </p>
      </Wrapper>
    </footer>
  );
};
