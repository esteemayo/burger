'use client';

import { useSession } from 'next-auth/react';

import Hero from '@/components/hero/Hero';
import ProductReview from '@/components/productReview/ProductReview';
import ProductInfo from '@/components/productInfo/ProductInfo';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';

import { ProductClientProps } from '@/types';

import './Product.scss';

const ProductClient = ({ product }: ProductClientProps) => {
  const { data: session } = useSession()
  
  return (
    <div className='product'>
      <Hero name={product.name} image={product.image} />
      <ProductInfo product={product} currentUser={session?.user} />
      <ProductReview actionId={product.id} />
      <RelatedProducts productId={product.id} />
    </div>
  );
};

export default ProductClient;
