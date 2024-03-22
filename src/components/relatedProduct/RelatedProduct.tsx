'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { RelatedProductProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './RelatedProduct.scss';

const RelatedProduct = ({ id, name, image, price }: RelatedProductProps) => {
  const url = useMemo(() => {
    return `/product/${encodeURIComponent(id)}`;
  }, [id]);

  return (
    <article className='relatedProduct'>
      <div className='relatedBox'>
        <div className='relatedThumbnail'>
          <span className='relatedOverlay'>
            <button type='button' className='relatedBtn'>
              Add to cart
            </button>
          </span>
          <Image src={image} width={220} height={170} alt={name} />
        </div>
        <div className='relatedContent'>
          <Link href={url}>
            <h2 className='relatedHeading'>{name}</h2>
            <span className='relatedPrice'>{formatCurrency(price)}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RelatedProduct;
