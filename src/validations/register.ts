import { RegisterData, RegisterErrors } from '@/types';

export const validateRegisterInputs = (data: RegisterData) => {
  const { name, email, password, confirmPassword } = data;
  const errors: RegisterErrors = {};

  if (name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (email.trim() === '') {
    errors.email = 'Email address is required';
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }

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
