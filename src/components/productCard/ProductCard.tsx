'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { ProductCardProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './ProductCard.scss';

const ProductCard = ({ id, name, image, price }: ProductCardProps) => {
  const url = useMemo(() => {
    return `/product/${encodeURIComponent(id)}`;
  }, [id]);

  return (
    <article className='productCard'>
      <div className='imgWrapper'>
        <span className='overlay'>
          <button type='button' className='cartButton'>
            Add to cart
          </button>
        </span>
        <Image src={image} width={300} height={270} alt={name} />
      </div>
      <div className='cardFooter'>
        <Link href={url}>
          <h2 className='heading'>{name}</h2>
          <span className='price'>{formatCurrency(price)}</span>
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
