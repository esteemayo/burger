'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

import Button from '../button/Button';

const GoogleButton = () => {
  return (
    <Button
      label='Continue with Google'
      className='googleBtn'
      onClick={() => signIn('google')}
    >
      <Image src='/img/google.png' width={15} height={15} alt='google icon' />
    </Button>
  );
};

export default GoogleButton;
