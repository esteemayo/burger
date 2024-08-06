'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { ClipLoader } from 'react-spinners';
import Image from 'next/image';

import { useCart } from '@/hooks/useCart';
import { useCartControls } from '@/hooks/useCartControls';

import { RelatedProductProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './RelatedProduct.scss';

const RelatedProduct = ({ product }: RelatedProductProps) => {
  const { isLoading, handleClick } = useCart(product);
  const { inCart, btnLabel } = useCartControls(product);

  const url = useMemo(() => {
    return `/product/${encodeURIComponent(product.id)}`;
  }, [product.id]);

  return (
    <article className='relatedProduct'>
      <div className='relatedBox'>
        <div className='relatedThumbnail'>
          <span className='relatedOverlay'>
            <button
              type='button'
              className='relatedBtn'
              disabled={inCart ?? isLoading}
              onClick={handleClick}
            >
              {true ? <ClipLoader size={20} color='#a00c1a' /> : btnLabel}
            </button>
          </span>
          <Image
            src={product.image}
            width={220}
            height={170}
            alt={product.name}
          />
        </div>
        <div className='relatedContent'>
          <Link href={url}>
            <h2 className='relatedHeading'>{product.name}</h2>
            <span className='relatedPrice'>
              {formatCurrency(product.price)}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RelatedProduct;
