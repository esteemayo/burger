'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import './ErrorState.scss';

const ErrorState = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='errorState'>
      <div className='container'>
        <Image src='/svg/bug.svg' width={500} height={500} alt='error' />
      </div>
    </div>
  );
};

export default ErrorState;
