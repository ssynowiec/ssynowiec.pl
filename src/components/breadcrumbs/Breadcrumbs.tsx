import Link from 'next/link';

interface BreadcrumbsProps {
  previousPages?: { name: string; href: string }[];
  currentPage: string;
}

export const Breadcrumbs = ({
  previousPages,
  currentPage,
}: BreadcrumbsProps) => {
  return (
    <ul className='flex'>
      {previousPages &&
        previousPages.map((element) => (
          <li key={element.name} className='flex'>
            <Link href={element.href} className='underline underline-offset-4'>
              {element.name}
            </Link>
            <p className='mx-1'>&#62;</p>
          </li>
        ))}
      <li className='font-bold text-orange-400' key={currentPage}>
        {currentPage}
      </li>
    </ul>
  );
};
