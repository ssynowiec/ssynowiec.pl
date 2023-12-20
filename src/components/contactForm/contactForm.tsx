'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';

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
      <Input label='Name' register={register} name='name' />
      <Input label='Email' register={register} name='email' type='email' />
      <label htmlFor='message'>Message</label>
      <textarea id='message' {...register('message')} />
      <Button type='submit'>Send message</Button>
    </form>
  );
};
