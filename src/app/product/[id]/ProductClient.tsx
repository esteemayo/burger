'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Loader from '@/components/loader/Loader';
import Hero from '@/components/hero/Hero';
import ProductInfo from '@/components/productInfo/ProductInfo';

import ProductReview from '@/components/productReview/ProductReview';
import EmptyState from '@/components/emptyState/EmptyState';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';

import { getProductClient } from '@/services/productService';
import { ProductClientProps, SingleProductType } from '@/types';

import './Product.scss';

const fetchProduct = async (productId: string) => {
  const { data } = await getProductClient(productId);
  return data;
};

const ProductClient = ({ productId }: ProductClientProps) => {
  const { data: session } = useSession();

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId,
  });

  const [product, setProduct] = useState<SingleProductType | null>(null);

  useEffect(() => {
    setProduct(data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && !product) {
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
      <Hero name={product?.name!} image={product?.image!} />
      <ProductInfo
        product={product!}
        currentUser={session?.user}
        onUpdate={setProduct}
        onRefetch={refetch}
      />
      <ProductReview
        actionId={product?.id!}
        productName={product?.name!}
        productReviews={product?.reviews!}
      />
      <RelatedProducts
        productId={product?.id!}
        ingredients={product?.ingredients!}
        currentUser={session?.user}
      />
    </div>
  );
};

export default ProductClient;
