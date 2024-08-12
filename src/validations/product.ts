import { ProductData, ProductErrors } from '@/types';

export const validateProductInput = (
  data: ProductData,
  ingredients: string[]
) => {
  const { name, desc, price } = data;
  const errors: ProductErrors = {};

  if (name.trim() === '') {
    errors.name = 'Product name is required';
  }

  if (desc.trim() === '') {
    errors.desc = 'Description is required';
  }

  if (price.trim() === '') {
    errors.price = 'Price is required';
  } else if (price === '0') {
    errors.price = 'Price must be equal or greater than 1';
  }

  if (ingredients.length < 1) {
    errors.ingredients = 'Ingredients is required';
  }

  return errors;
};
