import Cart from '../cart/Cart';
import Reviews from '../reviews/Reviews';

import './ProductReview.scss';

const ProductReview = () => {
  return (
    <section className='productReview'>
      <div className='container'>
        <Reviews />
        <Cart />
      </div>
    </section>
  );
};

export default ProductReview;
