'use client';

import { useMemo } from 'react';

import Ingredients from '../ingredients/Ingredients';
import Input from '../input/Input';
import ErrorMessage from '../errorMessage/ErrorMessage';

import { IngredientInputProps } from '@/types';

const IngredientInput = ({
  ingredient,
  ingredients,
  loading,
  error,
  onAdd,
  onChange,
  onDelete,
}: IngredientInputProps) => {
  const disableBtn = useMemo(() => {
    return ingredient.trim() === '' ? true : false;
  }, [ingredient]);

  return (
    <div className='ingredientInput'>
      <Input
        name='ingredient'
        label='Ingredients'
        value={ingredient}
        placeholder='Ingredients'
        onChange={onChange}
      />
      {error && <ErrorMessage message={error} />}
      <Ingredients
        ingredients={ingredients}
        loading={loading}
        disabled={!!disableBtn}
        onAdd={onAdd}
        onDelete={onDelete}
      />
    </div>
  );
};

export default IngredientInput;
