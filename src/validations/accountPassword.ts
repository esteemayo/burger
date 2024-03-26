import { UserPassword, UserPasswordErrors } from '@/types';

export const validatePasswordInputs = (data: UserPassword) => {
  const { password, confirmPassword } = data;
  const errors: UserPasswordErrors = {};

  if (password === '') {
    errors.password = 'Pasword is required';
  } else if (password.length < 8) {
    errors.password = 'Password must not be less than 8 characters';
  } else if (!confirmPassword) {
    errors.confirmPassword = 'Confirm your password';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
