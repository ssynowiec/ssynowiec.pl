'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

export interface NavigationLink {
  text: string;
  href: string;
}

interface NavLinkProps {
  link: NavigationLink;
}

export const NavLink = ({ link }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === link.href;

  return (
    <li>
      <Link href={link.href} className={clsx({ 'font-bold': isActive })}>
        {link.text}
      </Link>
    </li>
  );
};
