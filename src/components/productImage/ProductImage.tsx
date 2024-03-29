'use client';

import { useMemo } from 'react';

import Input from '../input/Input';
import DropZone from '../dropZone/DropZone';

import { ProductImageProps } from '@/types';

import './ProductImage.scss';

const ProductImage = ({
  ingredient,
  ingredients,
  onAdd,
  onChange,
  onDelete,
}: ProductImageProps) => {
  const disableBtn = useMemo(() => {
    return ingredient.trim() === '' ? true : false;
  }, [ingredient]);

  return (
    <div className='productImage'>
      <div className='ingredientWrap'>
        <Input
          name='ingredient'
          label='Ingredients'
          value={ingredient}
          placeholder='Ingredients'
          onChange={onChange}
        />
        <div className='ingredientLists'>
          <div className='ingredients'>
            {ingredients?.map((item) => {
              return (
                <span key={item} onDoubleClick={(e) => onDelete(e, item)}>
                  {item}
                </span>
              );
            })}
          </div>
          <button type='button' disabled={!!disableBtn} onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
      <DropZone />
    </div>
  );
};

export default ProductImage;
