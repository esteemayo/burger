import type { Metadata } from 'next';

import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
  title: 'Burger. | Register',
  description: 'Create your account',
  keywords: 'register, signup, burger, account, auth',
};

const Register = () => {
  return <RegisterClient />;
};

export default Register;
