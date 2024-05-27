import Hero from '@/components/hero/Hero';
import ProductReview from '@/components/productReview/ProductReview';
import ProductInfo from '@/components/productInfo/ProductInfo';
import RelatedProducts from '@/components/relatedProducts/RelatedProducts';

import { ProductClientProps } from '@/types';

import './Product.scss';

const ProductClient = ({ product }: ProductClientProps) => {
  return (
    <div className='product'>
      <Hero name={product.name} image={product.image} />
      <ProductInfo product={product} />
      <ProductReview />
      <RelatedProducts />
    </div>
  );
};

export default ProductClient;
