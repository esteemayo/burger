import { UserData, UserDataErrors } from '@/types';

export const validateAccountData = (data: UserData) => {
  const { name, email, phone, address } = data;
  const errors: UserDataErrors = {};

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
    errors.phone = 'Phone is required';
  } else {
    const regEx = /^(?!1)(\d{3})(\d{4})$/;
    if (!phone.match(regEx)) {
      errors.phone = 'Phone number must be a valid phone number';
    }
  }

  if (address.trim() === '') {
    errors.address = 'Address is required';
  }

  return errors;
};
