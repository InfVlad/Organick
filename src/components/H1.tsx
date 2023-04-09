import type { FC } from 'react';

interface H1Props {
  text: string;
}

const H1: FC<H1Props> = ({ text }) => {
  return <div>{text}</div>;
};

export default H1;
