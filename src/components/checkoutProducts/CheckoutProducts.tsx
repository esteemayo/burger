import { CheckoutProductsProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import CheckoutProduct from '../checkoutProduct/CheckoutProduct';

import './CheckoutProducts.scss';

const CheckoutProducts = ({
  products,
  totalPrice,
  onIncrement,
  onDecrement,
  onRemove,
}: CheckoutProductsProps) => {
  return (
    <div className='checkoutProducts'>
      <div className='checkoutProductBox'>
        {products.map((product) => {
          return (
            <CheckoutProduct
              key={product.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onRemove={onRemove}
              {...product}
            />
          );
        })}
      </div>
      <div className='checkoutTotal'>
        <div className='checkoutTotalPrice'>
          <span>Items total</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
        <div className='checkoutTotalPrice'>
          <span>Discount</span>
          <span>$0.00</span>
        </div>
        <div className='checkoutTotalPrice'>
          <span>Delivery charge</span>
          <span>$0.00</span>
        </div>
      </div>
      <div className='totalCheckout'>
        <span>Total:</span>
        <span>{formatCurrency(totalPrice)}</span>
      </div>
    </div>
  );
};

export default CheckoutProducts;
