'use client';

import { useQuery } from '@tanstack/react-query';

import RelatedProduct from '../relatedProduct/RelatedProduct';
import RelatedCardSkeleton from '../relatedCardSkeleton/RelatedCardSkeleton';

import { getRelatedProducts } from '@/services/productService';

import './RelatedProducts.scss';

interface RelatedProductsProps {
  productId: string;
  ingredients?: string[];
}

const RelatedProducts = ({ productId, ingredients }: RelatedProductsProps) => {
  const { isLoading, data: products }  = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: async () => {
      const { data } = await getRelatedProducts(ingredients);
      return data;
    },
    enabled: !!ingredients,
  });

  return (
    <section className='relatedProducts'>
      <div className='container'>
        <h2 className='relatedHeader'>Related products</h2>
        <div className='relatedWrap'>
          {isLoading
            ? products?.map((item) => {
                return <RelatedCardSkeleton key={item.id} />;
              })
            : products
              ?.filter((product) => product.id !== productId)
              .slice(0, 4)
              .map((product) => {
                return <RelatedProduct key={product.id} product={product} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
