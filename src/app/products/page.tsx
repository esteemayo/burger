import type { Metadata } from 'next';

import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Burger. App | Products',
};

const Products = () => {
  return <ProductsClient />;
};

export default Products;
