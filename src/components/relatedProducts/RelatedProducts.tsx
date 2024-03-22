import RelatedProduct from '../relatedProduct/RelatedProduct';

import './RelatedProducts.scss';

const RelatedProducts = () => {
  return (
    <section className='relatedProducts'>
      <div className='container'>
        <h2 className='relatedHeader'>Related products</h2>
        <div className='relatedWrap'>
          <RelatedProduct />
          <RelatedProduct />
          <RelatedProduct />
          <RelatedProduct />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
