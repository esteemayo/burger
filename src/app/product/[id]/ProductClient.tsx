'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

import Hero from '@/components/hero/Hero';
import ProductReview from '@/components/productReview/ProductReview';
import ProductInfo from '@/components/productInfo/ProductInfo';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';

import { ProductClientProps } from '@/types';
import { getProduct } from '@/services/productService';

import './Product.scss';
import EmptyState from '@/components/emptyState/EmptyState';
import http from '@/services/httpService';

const ProductClient = ({ productId }: ProductClientProps) => {
  const { data: session } = useSession();

  const { data: product } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const { data } = await http.get(`/api/products/${productId}`);
      return data;
    },
    enabled: !!productId,
  });

  if (!product) {
    return (
      <EmptyState
        title='Product not found'
        subtitle="Looks like there's no product with that ID."
        imgSrc='empty'
      />
    );
  }

  return (
    <div className='product'>
      <Hero name={product.name} image={product.image} />
      <ProductInfo product={product} currentUser={session?.user} />
      <ProductReview actionId={product.id} />
      <RelatedProducts
        productId={product.id}
        ingredients={product.ingredients}
      />
    </div>
  );
};

export default ProductClient;
