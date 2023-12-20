interface InputProps {
  name: string;
  register: any;
  label: string;
  type?: 'text' | 'password' | 'email' | 'textarea';
}

export const Input = ({
  name,
  register,
  label,
  type = 'text',
  ...rest
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...rest} {...register(name)} />
    </>
  );
};
