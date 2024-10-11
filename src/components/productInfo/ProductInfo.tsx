'use client';

import { useMemo } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import StarRating from '../starRating/StarRating';
import Spinner from '../spinner/Spinner';
import HeartButton from '../heartButton/HeartButton';

import { useCart } from '@/hooks/useCart';
import { useCartControls } from '@/hooks/useCartControls';

import { ProductInfoProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './ProductInfo.scss';

const ProductInfo = ({
  product,
  currentUser,
  onUpdate,
  onRefetch,
}: ProductInfoProps) => {
  const { btnLabel, inCart } = useCartControls(product);
  const { quantity, isLoading, handleChange, handleClick } = useCart(product);

  const ratings = useMemo(() => {
    return (
      !isNaN(product.ratingsAverage / product.ratingsQuantity) &&
      product.ratingsAverage / product.ratingsQuantity
    );
  }, [product]);

  const reviewLabel = useMemo(() => {
    return product.ratingsQuantity === 0 || product.ratingsQuantity > 1
      ? `${product.ratingsQuantity} reviews`
      : `${product.ratingsQuantity} review`;
  }, [product.ratingsQuantity]);

  return (
    <section className='productInfo'>
      <div className='container'>
        <h3>{product.name}</h3>
        <p className='desc'>{product.desc}</p>
        <div className='wrapper'>
          <div className='reviewWrap'>
            <div className='starRating'>
              <StarRating name='read-only' value={+ratings} readOnly />
            </div>
            <span className='totalReview'>{reviewLabel}</span>
          </div>
          <HeartButton
            actionId={product.id}
            likes={product.likes}
            currentUser={currentUser}
            onUpdate={onUpdate}
            onRefetch={onRefetch}
          />
          <span className='price'>{formatCurrency(product.price)}</span>
        </div>
        <div className='quantity'>
          <input
            type='number'
            value={quantity}
            defaultValue={1}
            min={1}
            max={10}
            onChange={handleChange}
          />
          <button
            type='button'
            disabled={!!inCart ?? !!isLoading}
            onClick={handleClick}
          >
            <ShoppingCartIcon />
            {!!isLoading ? <Spinner size={13} /> : btnLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
