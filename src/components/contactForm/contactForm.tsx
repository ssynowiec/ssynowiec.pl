'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/button/button';

interface Inputs {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

  return (
    <form className='flex flex-col py-3' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' {...register('name')} />
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' {...register('email')} />
      <label htmlFor='message'>Message</label>
      <textarea id='message' {...register('message')} />
      <Button type='submit'>Send message</Button>
    </form>
  );
};
