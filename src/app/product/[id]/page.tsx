import Hero from '@/components/hero/Hero';
import ProductReview from '@/components/productReview/ProductReview';
import EmptyState from '@/components/emptyState/EmptyState';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';
import ProductInfo from '@/components/productInfo/ProductInfo';

import './Product.scss';

const Product = () => {
  const product = true;

  if (product) {
    return (
      <EmptyState
        title='Product not found'
        subtitle="Looks like there's no product with that ID."
        imgSrc='empty'
      />
    );
  }

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
