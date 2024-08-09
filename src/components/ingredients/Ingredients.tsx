'use client';

import { ClipLoader } from 'react-spinners';

import { IngredientsProps } from '@/types';
import Ingredient from '../ingredient/Ingredient';

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
        {ingredients?.map((ingredient) => {
          return (
            <Ingredient
              key={ingredient}
              ingredient={ingredient}
              onDelete={onDelete}
            />
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
