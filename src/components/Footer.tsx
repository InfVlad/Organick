import type { FC } from 'react';

interface FooterProps {
  text: string;
}

const Footer: FC<FooterProps> = ({ text }) => {
  return <div className='text-black'>{text}</div>;
};

export default Footer;
