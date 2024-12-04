'use client';

import { useQuery } from '@tanstack/react-query';

import Cart from '../cart/Cart';
import Reviews from '../reviews/Reviews';

import { ProductReviewProps } from '@/types';
import { getReviewsOnProduct } from '@/services/productService';

import './ProductReview.scss';

const fetchProductReviews = async (actionId: string) => {
  const { data } = await getReviewsOnProduct(actionId);
  return data;
};

const ProductReview = ({
  actionId,
  productName,
  productReviews,
}: ProductReviewProps) => {
  const { isLoading, data: reviews } = useQuery({
    queryKey: ['reviews', actionId],
    queryFn: () => fetchProductReviews(actionId),
    enabled: !!actionId,
  });

  return (
    <section className='productReview'>
      <div className='container'>
        <Reviews
          actionId={actionId}
          productName={productName}
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
