'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ProductInfoProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import { useCart } from '@/hooks/useCart';
import StarRating from '../starRating/StarRating';

import './ProductInfo.scss';

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { quantity, handleChange, handleClick } = useCart(product);

  const reviewLabel = useMemo(() => {
    return product.ratingsQuantity < 2
      ? `${product.ratingsQuantity} review`
      : `${product.ratingsQuantity} reviews`;
  }, [product.ratingsQuantity]);

  return (
    <section className='productInfo'>
      <div className='container'>
        <h3>{product.name}</h3>
        <p className='desc'>{product.desc}</p>
        <div className='wrapper'>
          <div className='reviewWrap'>
            <div className='starRating'>
              <StarRating
                name='read-only'
                value={product.ratingsAverage}
                readOnly
              />
            </div>
            <span className='totalReview'>{reviewLabel}</span>
          </div>
          <span className='heartWrap'>
            <Image
              src='/svg/heart-1.svg'
              width={20}
              height={20}
              alt='heart icon'
            />
          </span>
          <span className='price'>{formatCurrency(product.price)}</span>
        </div>
        <div className='quantity'>
          <input type='number' value={quantity} defaultValue={1} min={1} max={10} onChange={handleChange} />
          <button type='button' onClick={handleClick}>
            <ShoppingCartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
