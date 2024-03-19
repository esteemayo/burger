'use client';

import { useMemo } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { ProductCardProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './ProductCard.scss';

const ProductCard = ({ id, name, image, price }: ProductCardProps) => {
  const url = useMemo(() => {
    return `/product/${encodeURIComponent(id)}`;
  }, [id]);

  return (
    <article className='productCard'>
      <Link href={url}>
        <div className='imgWrapper'>
          <span className='overlay'>
            <button type='button' className='cartButton'>
              Add to cart
            </button>
          </span>
          <Image src={image} width={300} height={270} alt={name} />
        </div>
        <div className='cardFooter'>
          <h2 className='heading'>{name}</h2>
          <span className='price'>{formatCurrency(price)}</span>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
