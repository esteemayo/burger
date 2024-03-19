import { products } from '@/data';
import ProductCard from '../productCard/ProductCard';

import './ProductLists.scss';

const ProductLists = () => {
  return (
    <section className='productLists'>
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </section>
  );
};

export default ProductLists;
