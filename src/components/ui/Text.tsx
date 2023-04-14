import { cva, type VariantProps } from 'class-variance-authority';
import type { FC } from 'react';
import classMerge from '~/utils/classMerge';

const textVariants = cva('font-roboto font-extrabold text-primary-green', {
  variants: {
    variant: {
      h1: 'text-[70px]',
      h2: 'text-[50px]',
      h3: 'text-[40px]',
      h4: 'text-[35px]',
      h5: 'text-[30px]',
      h6: 'text-[25px]',
      p: 'font-openSans text-[18px] font-normal text-primary-grey',
      list: 'font-openSans text-[18px] font-bold text-primary-grey',
      cursive: 'font-yellowtail text-[36px] font-normal text-secondary-green',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
}

const Text: FC<TextProps> = ({ children, className, variant, ...props }) => {
  const tags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
    list: 'p',
    cursive: 'h3',
  } as const;

  const As = tags[variant ?? 'p'];
  return (
    // inside class merge you can put default styles, conditional styles, and
    <As className={classMerge(textVariants({ variant, className }))} {...props}>
      {children}
    </As>
  );
};

export default Text;
