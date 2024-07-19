import type { Metadata } from 'next';

import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Burger | Login',
  description: 'Log into your account',
  keywords: 'login, signin, burger, account, auth',
};

const Login = () => {
  return <LoginClient />;
};

export default Login;
