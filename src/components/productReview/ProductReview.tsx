'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Cart from '../cart/Cart';
import Reviews from '../reviews/Reviews';

import { useCartStore } from '@/hooks/useCartStore';
import { ReviewType } from '@/types';
import { getReviewsOnProduct } from '@/services/productService';

import './ProductReview.scss';

export interface ProductReviewProps {
  actionId: string;
}

const ProductReview = ({ actionId }: ProductReviewProps) => {
  const products = useCartStore((store) => store.products);

  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<ReviewType>([]);

  const fetchReviews = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await getReviewsOnProduct(actionId);
      setReviews(data);
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const productClasses = useMemo(() => {
    return products.length < 1 ? 'container emptyContainer' : 'container';
  }, [products.length]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return (
    <section className='productReview'>
      <div className={productClasses}>
        <Reviews
          actionId={actionId}
          loading={isLoading}
          reviews={reviews}
          onAction={fetchReviews}
        />
        <Cart />
      </div>
    </section>
  );
};

export default ProductReview;
