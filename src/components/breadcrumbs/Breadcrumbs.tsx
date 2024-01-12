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
        previousPages.map((element, index) => (
          <>
            <li key={index}>
              <Link
                href={element.href}
                className='underline underline-offset-4'
              >
                {element.name}
              </Link>
            </li>
            <p className='mx-1'>&#62;</p>
          </>
        ))}
      <li className='font-bold text-orange-400'>{currentPage}</li>
    </ul>
  );
};
