import type { Metadata } from 'next';

import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Burger. | Login',
  description: 'Log into your account',
  keywords:
    'Burger app login, food delivery sign in, online food ordering login, food ordering and delivery login',
};

const Login = () => {
  return <LoginClient />;
};

export default Login;
