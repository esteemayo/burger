import type { Metadata } from 'next';

import LoginForm from './LoginForm';
import LoginImage from './LoginImage';

import './Login.scss';

export const metadata: Metadata = {
  title: 'Burger - Login page',
  description: 'Log into your account',
  keywords: 'login, signin, burger, account, auth',
};

const Login = () => {
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

export default Login;
