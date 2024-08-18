'use client';

import { useQuery } from '@tanstack/react-query';

import RelatedProduct from '../relatedProduct/RelatedProduct';
import RelatedCardSkeleton from '../relatedCardSkeleton/RelatedCardSkeleton';

import { ProductType, RelatedProductsProps } from '@/types';
import { getRelatedProducts } from '@/services/productService';

import './RelatedProducts.scss';

const RelatedProducts = ({
  productId,
  ingredients,
  currentUser,
  onUpdate,
}: RelatedProductsProps) => {
  const {
    isLoading,
    data: products,
    refetch,
  } = useQuery({
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
            ? Array.from(new Array(4)).map((_, index) => {
                return <RelatedCardSkeleton key={index} />;
              })
            : products
                ?.filter((product: ProductType) => product.id !== productId)
                .slice(0, 4)
                .map((product: ProductType) => {
                  return (
                    <RelatedProduct
                      key={product.id}
                      product={product}
                      currentUser={currentUser}
                      onUpdate={onUpdate}
                      onRefetch={refetch}
                    />
                  );
                })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
