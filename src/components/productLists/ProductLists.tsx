import ProductCard from '../productCard/ProductCard';
import ProductCardSkeleton from '../productCardSkeleton/ProductCardSkeleton';

import { ProductListsProps } from '@/types';

import './ProductLists.scss';

const ProductLists = ({
  type,
  data,
  loading,
  productToShow,
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
            return <ProductCard key={item.id} product={item} />;
          })
        : data?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
    </section>
  );
};

export default ProductLists;
