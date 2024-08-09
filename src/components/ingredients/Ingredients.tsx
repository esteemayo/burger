'use client';

import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

import { IngredientsProps } from '@/types';

import './Ingredients.scss';

const Ingredients = ({
  ingredients,
  loading,
  disabled,
  onAdd,
  onDelete,
}: IngredientsProps) => {
  return (
    <div className='ingredients'>
      <div className='wrapper'>
        {ingredients?.map((item) => {
          return (
            <span key={item}>
              {item}
              <Image
                src='/svg/x-mark.svg'
                width={15}
                height={15}
                alt='delete icon'
                onClick={(e) => onDelete(e, item)}
              />
            </span>
          );
        })}
      </div>
      <button type='button' disabled={!!disabled || loading} onClick={onAdd}>
        {loading ? <ClipLoader size={13} color='#a00c1a' /> : 'Add'}
      </button>
    </div>
  );
};

export default Ingredients;
