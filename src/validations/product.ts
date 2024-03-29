import { ProductData, ProductErrors } from '@/types';

export const validateProductInput = (data: ProductData) => {
  const { name, desc, price } = data;
  const errors: ProductErrors = {};

  if (name.trim() === '') {
    errors.name = 'Product name is required';
  }

  if (desc.trim() === '') {
    errors.desc = 'Description is required';
  }

  if (!price) {
    errors.price = 'Price is required';
  } else if (price < 1) {
    errors.price = 'Price must be equal or greater than 1';
  }

  return errors;
};
