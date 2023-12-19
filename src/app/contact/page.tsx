import { Wrapper } from '@/components/wrapper/wrapper';
import { Metadata } from 'next';
import { ContactForm } from '@/components/contactForm/contactForm';

export const metadata: Metadata = {
  title: 'Contact with me | ssynowiec.pl',
};

const ContactPage = () => {
  return (
    <main className='flex h-full flex-col'>
      <Wrapper>
        <section className='flex w-full flex-col'>
          <h1 className='text-left text-5xl font-bold'>Contact</h1>
          <ContactForm />
        </section>
      </Wrapper>
    </main>
  );
};

export default ContactPage;
