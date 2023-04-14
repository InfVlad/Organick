import type { FC } from 'react';
import Image from 'next/image';

const SiteLogo: FC = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image src='/assets/logo.svg' alt='site logo' width={37} height={54} />
      <span className='font-roboto text-[38px] font-bold text-primary-green'>Organick</span>
    </div>
  );
};

export default SiteLogo;
