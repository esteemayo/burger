'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';

import RelatedCardSkeleton from '../relatedCardSkeleton/RelatedCardSkeleton';

import { ProductType, RelatedProductsProps } from '@/types';
import { getRelatedProducts } from '@/services/productService';

import './RelatedProducts.scss';

const RelatedProduct = dynamic(
  () => import('../relatedProduct/RelatedProduct'),
  {
    ssr: false,
  }
);

const fetchRelatedProducts = async (ingredients: string[] | undefined) => {
  const { data } = await getRelatedProducts(ingredients);
  return data;
};

const RelatedProducts = ({
  productId,
  ingredients,
  currentUser,
}: RelatedProductsProps) => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: async () => {
      const { data } = await getRelatedProducts(ingredients);
      return data;
    },
    enabled: !!ingredients,
  });

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <section className='relatedProducts'>
      <div className='container'>
        <h2 className='relatedHeader'>Related products</h2>
        <div className='relatedWrap'>
          {products?.length === 0 ? (
            <span>No related products</span>
          ) : isLoading ? (
            Array.from(new Array(4)).map((_, index) => {
              return <RelatedCardSkeleton key={index} />;
            })
          ) : (
            products
              ?.filter((product) => product.id !== productId)
              .slice(0, 4)
              .map((product) => {
                return (
                  <RelatedProduct
                    key={product.id}
                    product={product}
                    currentUser={currentUser}
                    onLike={setProducts}
                    onRefetch={refetch}
                  />
                );
              })
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
