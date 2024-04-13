'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { useCart } from '@/hooks/useCart';
import { useCartStore } from '@/hooks/useCartStore';

import { RelatedProductProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './RelatedProduct.scss';

const RelatedProduct = ({ product }: RelatedProductProps) => {
  const { handleClick } = useCart(product);
  const products = useCartStore((store) => store.products);

  const inCart = useMemo(() => {
    const inCart = products.find((item) => item.id === product.id);
    return !!inCart;
  }, [product.id, products]);

  const btnLabel = useMemo(() => {
    return inCart ? 'In cart' : 'Add to cart';
  }, [inCart]);

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
              disabled={inCart}
              onClick={handleClick}
            >
              {btnLabel}
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
