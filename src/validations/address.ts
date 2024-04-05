import { AddressData, AddressErrors } from '@/types';

export const validateAddressInputs = (data: AddressData) => {
  const { state, city, street } = data;
  const errors: AddressErrors = {};

  if (state.trim() === '') {
    errors.state = 'State field is required';
  }

  if (city.trim() === '') {
    errors.city = 'City field is required';
  }

  if (street.trim() === '') {
    errors.street = 'Street field is required';
  }

  return errors;
};
