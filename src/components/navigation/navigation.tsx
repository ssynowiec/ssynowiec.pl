import { NavigationLink, NavLink } from '@/components/navLink/navLink';

const links: NavigationLink[] = [{ text: 'contact', href: '/contact' }];

export const Navigation = () => {
  return (
    <nav>
      <ul className='flex items-center justify-center gap-4'>
        {links.map((link) => (
          <NavLink link={link} key={link.href} />
        ))}
      </ul>
    </nav>
  );
};
