'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';

import DropZone from '../dropZone/DropZone';
import Input from '../input/Input';
import ErrorMessage from '../errorMessage/ErrorMessage';

import { ProductImageProps } from '@/types';

import './ProductImage.scss';

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
          <button type='button' disabled={!!disableBtn || loading} onClick={onAdd}>
            {loading ? <ClipLoader size={10} color='#a00c1a' /> : 'Add'}
          </button>
        </div>
      </div>
      <DropZone id='image' label='Image' onSelect={onSelect} />
    </div>
  );
};

export default ProductImage;
