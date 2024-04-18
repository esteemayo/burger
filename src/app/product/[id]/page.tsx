import Hero from '@/components/hero/Hero';
import ProductReview from '@/components/productReview/ProductReview';
import EmptyState from '@/components/emptyState/EmptyState';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';
import ProductInfo from '@/components/productInfo/ProductInfo';

import './Product.scss';

const Product = () => {
  const product = false

  if (!product) {
    return <EmptyState />
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
