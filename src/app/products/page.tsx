import type { Metadata } from 'next';

import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Burger | Products',
};

const Products = () => {
  return <ProductsClient />;
};

export default Products;
