import { NavigationLink, NavLink } from '@/components/navLink/navLink';

const links: NavigationLink[] = [
  { text: 'contact', href: '/contact' },
  { text: 'about', href: '/about' },
  { text: 'projects', href: '/projects' },
];

export const Navigation = () => {
  return (
    <nav>
      <ul className='flex items-center justify-center gap-4'>
        {links.map((link) => (
          <NavLink link={link} />
        ))}
      </ul>
    </nav>
  );
};
