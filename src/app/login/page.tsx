import type { Metadata } from 'next';

import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Burger. | Login',
  description:
    'Access your food account and unlock a world of flavors! Log in to your Burger. account to discover new recipes, order food online, and manage your meal planning. Sign in now and start cooking a storm',
  keywords:
    'Burger app login, food delivery sign in, online food ordering login, food ordering and delivery login',
};

const Login = () => {
  return <LoginClient />;
};

export default Login;
