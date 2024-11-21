import type { Metadata } from 'next';

import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
  title: 'Burgers. App Register | Create Your Account',
  description:
    'Create your burgers account and unlock a world of flavors! Sign up for your Burgers. account to discover new recipes, order burger online, and manage your meal planning. Sign up now and start cooking a storm',
  keywords:
    'Burger app signup, burger delivery sign up, online burger ordering signup, burger ordering and delivery signup',
};

const Register = () => {
  return <RegisterClient />;
};

export default Register;
