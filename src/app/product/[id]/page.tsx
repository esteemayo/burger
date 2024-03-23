import Hero from '@/components/hero/Hero';
import ProductReview from '@/components/productReview/ProductReview';
import ProductInfo from '@/components/productInfo/ProductInfo';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';

import './Product.scss';

const Product = () => {
  return (
    <div className='product'>
      <Hero />
      <ProductInfo rating={4} />
      <ProductReview />
      <RelatedProducts />
    </div>
  );
};

export default Product;
