import { relatedProducts } from '@/data';
import RelatedProduct from '../relatedProduct/RelatedProduct';

import './RelatedProducts.scss';

const RelatedProducts = () => {
  return (
    <section className='relatedProducts'>
      <div className='container'>
        <h2 className='relatedHeader'>Related products</h2>
        <div className='relatedWrap'>
          {relatedProducts.map((product) => {
            return <RelatedProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
