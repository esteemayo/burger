'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/formatCurrency';

import { ProductCardProps } from '@/types';

import './ProductCard.scss';

const ProductCard = ({ product }: ProductCardProps) => {
  const { handleClick } = useCart(product);

  const url = useMemo(() => {
    return `/product/${encodeURIComponent(product.id)}`;
  }, [product.id]);

  return (
    <article className='productCard'>
      <div className='imgWrapper'>
        <span className='overlay'>
          <button type='button' className='cartButton' onClick={handleClick}>
            Add to cart
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
