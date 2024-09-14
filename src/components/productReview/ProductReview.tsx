'use client';

import { useQuery } from '@tanstack/react-query';

import Cart from '../cart/Cart';
import Reviews from '../reviews/Reviews';

import { ProductReviewProps } from '@/types';
import { getReviewsOnProduct } from '@/services/productService';

import './ProductReview.scss';

const ProductReview = ({ actionId, productReviews }: ProductReviewProps) => {
  const { isLoading, data: reviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data } = await getReviewsOnProduct(actionId);
      return data;
    },
    enabled: !!actionId,
  });

  return (
    <section className='productReview'>
      <div className='container'>
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
