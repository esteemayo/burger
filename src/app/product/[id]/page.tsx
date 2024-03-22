import ProductInfo from '@/components/productInfo/ProductInfo';
import ProductReview from '@/components/productReview/ProductReview';

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
      <ProductReview />
    </div>
  );
};

export default Product;
