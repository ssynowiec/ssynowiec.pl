import { ReactNode } from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ type, onClick, children }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='my-3 rounded-lg bg-gradient-to-br from-[#ec4899] via-[#ef4444] via-40% to-[#eab308] px-5 py-3 font-medium tracking-wider text-white transition duration-200 hover:shadow-md hover:shadow-[#eab308]/50'
    >
      {children}
    </button>
  );
};
