'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import LoginForm from './LoginForm';
import LoginImage from './LoginImage';

import './Login.scss';

const LoginClient = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'authenticated') {
    router.push('/');
    return;
  }

  return (
    <div className='login'>
      <div className='container'>
        <div className='wrapper'>
          <LoginImage />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginClient;
