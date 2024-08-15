import type { Metadata } from 'next';

import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
  title: 'Burger. App Register | Create Your Account',
  description: 'Create your account',
  keywords:
    'Burger app signup, food delivery sign up, online food ordering signup, food ordering and delivery signup',
};

const Register = () => {
  return <RegisterClient />;
};

export default Register;
