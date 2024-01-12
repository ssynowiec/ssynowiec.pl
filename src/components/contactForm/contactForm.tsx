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
      <Input label='Name' placeholder='John' register={register} name='name' />
      <Input
        label='Email'
        placeholder='jonh@example.com'
        register={register}
        name='email'
        type='email'
      />
      <Input
        label='Message'
        placeholder='Your message'
        register={register}
        name='message'
        type='textarea'
      />
      <Button type='submit'>Send message</Button>
    </form>
  );
};
