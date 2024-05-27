'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ProductInfoProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import StarRating from '../starRating/StarRating';

import './ProductInfo.scss';

const ProductInfo = ({
  name,
  desc,
  price,
  ratingsAverage,
  ratingsQuantity,
}: ProductInfoProps) => {
  const reviewLabel = useMemo(() => {
    return ratingsQuantity < 2
      ? `${ratingsQuantity} review`
      : `${ratingsQuantity} reviews`;
  }, [ratingsQuantity]);

  return (
    <section className='productInfo'>
      <div className='container'>
        <h3>{name}</h3>
        <p className='desc'>{desc}</p>
        <div className='wrapper'>
          <div className='reviewWrap'>
            <div className='starRating'>
              <StarRating name='read-only' value={ratingsAverage} readOnly />
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
          <span className='price'>{formatCurrency(price)}</span>
        </div>
        <div className='quantity'>
          <input type='number' defaultValue={1} min={1} max={10} />
          <button type='button'>
            <ShoppingCartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
