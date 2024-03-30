'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import DropZone from '../dropZone/DropZone';
import Input from '../input/Input';
import ErrorMessage from '../errorMessage/ErrorMessage';

import { ProductImageProps } from '@/types';

import './ProductImage.scss';

const ProductImage = ({
  ingredient,
  ingredients,
  error,
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
        {error && <ErrorMessage message={error} />}
        <div className='ingredientLists'>
          <div className='ingredients'>
            {ingredients?.map((item) => {
              return (
                <span key={item} onDoubleClick={(e) => onDelete(e, item)}>
                  {item}
                  <Image
                    src='/svg/x-mark.svg'
                    width={10}
                    height={10}
                    alt='delete icon'
                  />
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
