import ProductClient from './ProductClient';
import EmptyState from '@/components/emptyState/EmptyState';

import { SingleProductType } from '@/types';
import { getProduct } from '@/services/productService';

const getData = async (productId: string) => {
  const { data, status } = await getProduct(productId);

  if (status !== 200) {
    throw new Error('Failed!');
  }

  return data;
};

interface IParams {
  params: {
    id: string;
  };
}

const Product = async ({ params: { id } }: IParams) => {
  const product: SingleProductType = await getData(id);
  console.log(product);

  if (!product) {
    return (
      <EmptyState
        title='Product not found'
        subtitle="Looks like there's no product with that ID."
        imgSrc='empty'
      />
    );
  }

  return <ProductClient product={product} />;
};

export default Product;
