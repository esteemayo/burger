import dynamic from 'next/dynamic';

import { ProductListsProps } from '@/types';
import ProductCardSkeleton from '../productCardSkeleton/ProductCardSkeleton';

import './ProductLists.scss';

const ProductCard = dynamic(() => import ('../productCard/ProductCard'), {
  ssr: false,
});

const ProductLists = ({
  type,
  data,
  loading,
  productToShow,
  onLike,
  onRefetch,
}: ProductListsProps) => {
  return (
    <section className='productLists'>
      {loading
        ? Array(6)
            .fill(0)
            .map((_, index) => {
              return <ProductCardSkeleton key={index} />;
            })
        : type === 'products'
        ? data?.slice(0, productToShow).map((item) => {
            return (
              <ProductCard
                key={item.id}
                product={item}
                onLike={onLike}
                onRefetch={onRefetch}
              />
            );
          })
        : data?.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onLike={onLike}
                onRefetch={onRefetch}
              />
            );
          })}
    </section>
  );
};

export default ProductLists;
