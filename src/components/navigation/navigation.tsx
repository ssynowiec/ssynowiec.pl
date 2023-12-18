import Link from 'next/link';

interface NavigationLink {
  text: string;
  href: string;
}

const links: NavigationLink[] = [
  { text: 'contact', href: '/contact' },
  { text: 'about', href: '/about' },
  { text: 'projects', href: '/projects' },
];

export const Navigation = () => {
  return (
    <nav>
      <ul className='flex items-center justify-center'>
        {links.map((link) => (
          <li key={link.href} className='mr-4'>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
