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
        ? data.map((item) => {
            return <ProductCardSkeleton key={item.id} />;
          })
        : type === 'products'
        ? data.slice(0, productToShow).map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })
        : data.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
    </section>
  );
};

export default ProductLists;
