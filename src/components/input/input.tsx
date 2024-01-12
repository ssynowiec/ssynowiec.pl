interface InputProps {
  name: string;
  register: any;
  label: string;
  type?: 'text' | 'password' | 'email' | 'textarea';
  placeholder?: string;
  required?: boolean;
}

export const Input = ({
  name,
  register,
  label,
  type = 'text',
  placeholder,
  required = false,
  ...rest
}: InputProps) => {
  const classes =
    'rounded-lg px-3 py-2 bg-gray-200/60 placeholder:text-gray-800/60 dark:bg-gray-800/60 placeholder:dark:text-gray-200/60';

  return (
    <div className='my-1 flex flex-col'>
      <label htmlFor={name} className='my-2'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      {type !== 'textarea' ? (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...rest}
          {...register(name)}
          className={classes}
        />
      ) : (
        <textarea
          id={name}
          placeholder={placeholder}
          {...rest}
          {...register(name)}
          className={classes}
        />
      )}
    </div>
  );
};
