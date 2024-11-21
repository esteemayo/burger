import type { Metadata } from 'next';

import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Burgers. App Login | Access Your Account',
  description:
    'Access your burgers account and unlock a world of flavors! Log in to your Burgers. account to discover new recipes, order burger online, and manage your meal planning. Sign in now and start cooking a storm',
  keywords:
    'Burger app login, burger delivery sign in, online burger ordering login, burger ordering and delivery login',
};

const Login = () => {
  return <LoginClient />;
};

export default Login;
