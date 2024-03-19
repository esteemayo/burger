import ProductLists from '@/components/productLists/ProductLists';

import './Products.scss';

const Products = () => {
  return (
    <div className='products'>
      <div className='container'>
        <ProductLists />
      </div>
    </div>
  );
};

export default Products;
