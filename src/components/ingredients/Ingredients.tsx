'use client';

import Spinner from '../spinner/Spinner';
import Ingredient from '../ingredient/Ingredient';

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
      <div className='ingredientWrap'>
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
      <button type='button' disabled={disabled || loading} onClick={onAdd}>
        {loading ? <Spinner size={13} color='#a00c1a' /> : 'Add'}
      </button>
    </div>
  );
};

export default Ingredients;
