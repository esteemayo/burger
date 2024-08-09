'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

import Input from '../input/Input';
import DropZone from '../dropZone/DropZone';

import ErrorMessage from '../errorMessage/ErrorMessage';
import IngredientInput from '../ingredientInput/IngredientInput';

import { ProductImageProps } from '@/types';

const ProductImage = ({
  ingredient,
  ingredients,
  loading,
  error,
  onAdd,
  onChange,
  onDelete,
  onSelect,
}: ProductImageProps) => {
  const disableBtn = useMemo(() => {
    return ingredient.trim() === '' ? true : false;
  }, [ingredient]);

  return (
    <>
      <IngredientInput
        ingredient={ingredient}
        ingredients={ingredients}
        loading={loading}
        error={error}
        onAdd={onAdd}
        onChange={onChange}
        onDelete={onDelete}
      />
      <DropZone id='image' label='Image' onSelect={onSelect} />
    </>
  );
};

export default ProductImage;
