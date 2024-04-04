import { RecipientData, RecipientErrors } from '@/types';

export const validateRecipientInputs = (data: RecipientData) => {
  const { name, email, phone } = data;
  const errors: RecipientErrors = {};

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

  if (phone.trim() === '') {
    errors.phone = 'Phone number is required';
  }

  return errors;
};
