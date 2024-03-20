import Reviews from '@/components/reviews/Reviews';
import ProductInfo from '@/components/productInfo/ProductInfo';

import './Product.scss';

const Product = () => {
  return (
    <div className='product'>
      <header className='productHeader'>
        <div className='headingWrap'>
          <h1 className='productHeading'>Double grilled chicken burger</h1>
          <div className='productSubHeading'>
            <span>Welcome to burger</span>
          </div>
        </div>
      </header>
      <ProductInfo />
      <section className='reviewCart'>
        <div className='container'>
          <Reviews />
          <div>cart</div>
        </div>
      </section>
    </div>
  );
};

export default Product;
