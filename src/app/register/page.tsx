import type { Metadata } from 'next';

import RegisterForm from './RegisterForm';
import RegisterImage from './RegisterImage';

import './Register.scss';

export const metadata: Metadata = {
  title: 'Burger - Register page',
  description: 'Create your account',
  keywords: 'register, signup, burger, account, auth',
};

const Register = () => {
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

export default Register;
