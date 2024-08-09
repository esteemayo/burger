import Image from 'next/image';

import './Ingredient.scss';

const Ingredient = ({ ingredient, onDelete }) => {
  return (
    <span key={ingredient} className='ingredient'>
      {ingredient}
      <Image
        src='/svg/x-mark.svg'
        width={15}
        height={15}
        alt='delete icon'
        onClick={(e) => onDelete(e, ingredient)}
      />
    </span>
  );
};

export default Ingredient;
