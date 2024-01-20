import { Wrapper } from '@/components/wrapper/wrapper';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className='flex w-full'>
      <Wrapper direction='column'>
        <div className='self-start text-left'>
          <ul className='flex'>
            <li>
              <Link
                href='https://github.com/ssynowiec'
                target='_blank'
                className='p-2'
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href='https://linkedin.com/in/ssynowiecpl'
                target='_blank'
                className='p-2'
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href='https://x.com/ssynowiec1410'
                target='_blank'
                className='p-2'
              >
                X
              </Link>
            </li>
          </ul>
        </div>
        <p className='w-full text-center'>
          &copy; {currentYear} Stanisław Synowiec. All rights reserved.
        </p>
      </Wrapper>
    </footer>
  );
};
