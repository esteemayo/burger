import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { StarRatingProps } from '@/types';

const StarRating = ({ name, value, ...rest }: StarRatingProps) => {
  return (
    <Rating
      {...rest}
      name={name}
      value={value}
      precision={0.5}
      emptyIcon={
        <StarIcon
          style={{ fill: '#00000059', opacity: 0.55 }}
          fontSize='inherit'
        />
      }
    />
  );
};

export default StarRating;
