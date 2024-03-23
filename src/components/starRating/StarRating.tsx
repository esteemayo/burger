import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { StarRatingProps } from '@/types';

const StarRating = ({ name, value, ...rest }: StarRatingProps) => {
  return (
    <Rating
      {...rest}
      name={name}
      value={value}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
    />
  );
};

export default StarRating;
