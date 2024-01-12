import { Wrapper } from '@/components/wrapper/wrapper';
import { type Metadata } from 'next';
import { ContactForm } from '@/components/contactForm/contactForm';
import { PageTitle } from '@/components/pageTitle/pageTitle';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact with me | ssynowiec.pl',
};

const ContactPage = () => {
  return (
    <main className='flex h-full flex-col'>
      <Wrapper>
        <section className='flex w-full flex-col'>
          <PageTitle>Contact</PageTitle>
          <Breadcrumbs
            previousPages={[{ name: 'Home', href: '/' }]}
            currentPage='Contact'
          />
          <ContactForm />
        </section>
      </Wrapper>
    </main>
  );
};

export default ContactPage;
