import { cva } from 'class-variance-authority';
import type { FC } from 'react';
import classMerge from '~/utils/classMerge';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const buttonVariants = cva('active:', {
  variants: {
    variant: {
      default: 'text-green-400',
      outline: 'font-bolder',
    },
  },
});

const Button: FC<ButtonProps> = ({ text, className, ...props }) => {
  return (
    // inside class merge you can put default styles, conditional styles, and
    <button className={classMerge('bg-red-400', className)} type='button' {...props}>
      {text}
    </button>
  );
};

export default Button;
