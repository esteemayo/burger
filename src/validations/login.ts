import { LoginData, LoginErrors } from '@/types';

export const validateLoginInputs = (data: LoginData) => {
  const { email, password } = data;
  const errors: LoginErrors = {};

  if (email.trim() === '') {
    errors.email = 'Email address is required';
  }

  if (password === '') {
    errors.password = 'Pasword is required';
  } else if (password.length < 8) {
    errors.password = 'Passwords must not be less than 8 characters';
  }

  return errors;
};
