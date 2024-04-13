'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { useCart } from '@/hooks/useCart';
import { useCartStore } from '@/hooks/useCartStore';

import { ProductCardProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './ProductCard.scss';

const ProductCard = ({ product }: ProductCardProps) => {
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
    <article className='productCard'>
      <div className='imgWrapper'>
        <span className='overlay'>
          <button
            type='button'
            className='cartButton'
            disabled={inCart}
            onClick={handleClick}
          >
            {btnLabel}
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
