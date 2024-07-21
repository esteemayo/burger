'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import Cart from '../cart/Cart';
import Reviews from '../reviews/Reviews';

import { useCartStore } from '@/hooks/useCartStore';
import { ProductReviewProps } from '@/types';
import { getReviewsOnProduct } from '@/services/productService';

import './ProductReview.scss';

const ProductReview = ({ actionId, currentUser, productReviews }: ProductReviewProps) => {
  const { isLoading, data: reviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await getReviewsOnProduct(actionId);
      return data;
    },
    enabled: !!actionId,
  });

  const products = useCartStore((store) => store.products);

  const productClasses = useMemo(() => {
    return products.length < 1 ? 'container emptyContainer' : 'container';
  }, [products.length]);

  return (
    <section className='productReview'>
      <div className={productClasses}>
        <Reviews
          actionId={actionId}
          loading={isLoading}
          reviews={reviews}
          productReviews={productReviews}
        />
        <Cart />
      </div>
    </section>
  );
};

export default ProductReview;
