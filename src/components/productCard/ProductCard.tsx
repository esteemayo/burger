'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { useCart } from '@/hooks/useCart';
import { useCartControls } from '@/hooks/useCartControls';

import { ProductCardProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import Spinner from '../spinner/Spinner';

import './ProductCard.scss';

const ProductCard = ({ product }: ProductCardProps) => {
  const { isLoading, handleClick } = useCart(product);
  const { inCart, btnLabel } = useCartControls(product);

  const url = useMemo(() => {
    return `/product/${encodeURIComponent(product.id)}`;
  }, [product.id]);

  return (
    <article className='productCard'>
      <div className='imgWrapper'>
        <div>
          <Image src='/svg/heart-1.svg' width={20} height={20} alt='heart icon' />
        </div>
        <span className='overlay'>
          <button
            type='button'
            className='cartButton'
            disabled={inCart ?? isLoading}
            onClick={handleClick}
          >
            {isLoading ? <Spinner color='#a00c1a' /> : btnLabel}
          </button>
        </span>
        <Image
          src={product.image}
          width={300}
          height={270}
          alt={product.name}
        />
      </div>
      <div className='cardFooter'>
        <Link href={url}>
          <h2 className='heading'>{product.name}</h2>
          <span className='price'>{formatCurrency(product.price)}</span>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
