'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import RegisterForm from './RegisterForm';
import RegisterImage from './RegisterImage';

import './Register.scss';

const RegisterClient = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'authenticated') {
    router.push('/');
    return;
  }

  return (
    <div className='register'>
      <div className='container'>
        <div className='wrapper'>
          <RegisterImage />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterClient;
