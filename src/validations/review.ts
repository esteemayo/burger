import { ReviewData, ReviewErrors } from '@/types';

export const validateReviewInputs = (
  data: ReviewData,
  rating: null | number
) => {
  const { desc} = data;
  const errors: ReviewErrors = {};

  if (desc.trim() === '') {
    errors.desc = 'A review must have a description';
  }

  if (!rating) {
    errors.rating = 'A review must have a rating';
  }

  return errors;
};
