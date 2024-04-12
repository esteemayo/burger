import { ReviewData, ReviewErrors } from '@/types';

export const validateReviewInputs = (data: ReviewData) => {
  const { desc, name, email } = data;
  const errors: ReviewErrors = {};

  if (desc.trim() === '') {
    errors.desc = 'A review must have a description';
  }

  if (name.trim() === '') {
    errors.name = "A review must have a user's name";
  }

  if (email.trim() === '') {
    errors.email = "A review must have a user's email address";
  }

  return errors;
};
