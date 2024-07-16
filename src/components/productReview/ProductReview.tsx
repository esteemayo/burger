'use client';

import { useMemo } from 'react';

import Cart from '../cart/Cart';
import Reviews from '../reviews/Reviews';

import { useCartStore } from '@/hooks/useCartStore';

import './ProductReview.scss';

interface ProductReviewProps {
  actionId: string;
  reviews: object[];
}

const ProductReview = ({ actionId, reviews }: ProductReviewProps) => {
  const products = useCartStore((store) => store.products);

  const productClasses = useMemo(() => {
    return products.length < 1 ? 'container emptyContainer' : 'container';
  }, [products.length]);

  return (
    <section className='productReview'>
      <div className={productClasses}>
        <Reviews actionId={actionId} reviews={reviews} />
        <Cart />
      </div>
    </section>
  );
};

export default ProductReview;
