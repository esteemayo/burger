import type { Metadata } from 'next';

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

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { id } = params;

  const { data } = await getProduct(id);

  return {
    title: `Burger - ${data.name} page`,
  };
}

const Product = async ({ params: { id } }: IParams) => {
  const product: SingleProductType = await getData(id);

  // if (!product) {
  //   return (
  //     <EmptyState
  //       title='Product not found'
  //       subtitle="Looks like there's no product with that ID."
  //       imgSrc='empty'
  //     />
  //   );
  // }

  return <ProductClient product={product} productId={id} />;
};

export default Product;
