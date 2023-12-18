const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className='text-center'>
      &copy; {currentYear} Stanisław Synowiec. All rights reserved.
    </footer>
  );
};
