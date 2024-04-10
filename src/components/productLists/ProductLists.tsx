import { ProductListsProps } from '@/types';
import ProductCard from '../productCard/ProductCard';

import './ProductLists.scss';

const ProductLists = ({ products }: ProductListsProps) => {
  return (
    <section className='productLists'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};

export default ProductLists;
