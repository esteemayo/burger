import ProductClient from './ProductClient';
import EmptyState from '@/components/emptyState/EmptyState';

const Product = () => {
  const product = true;

  if (!product) {
    return (
      <EmptyState
        title='Product not found'
        subtitle="Looks like there's no product with that ID."
        imgSrc='empty'
      />
    );
  }

  return <ProductClient />;
};

export default Product;
