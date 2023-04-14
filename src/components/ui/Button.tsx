import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import type { FC } from 'react';
import classMerge from '~/utils/classMerge';

const buttonVariants = cva(
  'flex items-center justify-center gap-4 rounded-2xl border border-primary-green bg-primary-green font-roboto text-[20px] font-bold text-white min-w-[237px] h-[80px] px-[39px] py-[28px] group transition-all duration-500 hover:bg-white hover:text-primary-green',
  {
    variants: {
      variant: {
        default: '',
        yellow: 'bg-primary-yellow border-primary-yellow text-primary-green',
        white: 'bg-white text-primary-green',
        noIcon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    Required<VariantProps<typeof buttonVariants>> {
  submit: boolean;
  text: string;
}

const Button: FC<ButtonProps> = ({ className, submit = false, text, variant, ...props }) => {
  if (variant !== 'noIcon') {
    return (
      // inside class merge you can put default styles, conditional styles, and
      <button
        className={classMerge(buttonVariants({ variant, className }))}
        type={submit ? 'submit' : 'button'}
        {...props}
      >
        {text}
        <Image
          src='/assets/icons/Aerrow.svg'
          className='transition-all duration-500 group-hover:translate-x-4'
          alt='arrow'
          width={20}
          height={20}
        />
      </button>
    );
  }
  return (
    // inside class merge you can put default styles, conditional styles, and
    <button
      className={classMerge(buttonVariants({ variant, className }))}
      type={submit ? 'submit' : 'button'}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
