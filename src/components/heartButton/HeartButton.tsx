import HeartIcon from '../heartIcon/HeartIcon';

import './HeartButton.scss';

const HeartButton = () => {
  return (
    <span className='heartWrap'>
      <HeartIcon isFavorite />
    </span>
  );
};

export default HeartButton;
