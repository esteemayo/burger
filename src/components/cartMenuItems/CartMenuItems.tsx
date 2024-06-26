import Link from 'next/link';

import CartMenuItem from '../cartMenuItem/CartMenuItem';

import { CartMenuItemsProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './CartMenuItems.scss';

const CartMenuItems = ({
  products,
  totalPrice,
  onIncrement,
  onDecrement,
  onRemove,
}: CartMenuItemsProps) => {
  return (
    <div className='cartMenuItems'>
      <div className='cardHeader'>Your cart</div>
      <div className='cardProductBox'>
        {products.map((productItem) => {
          return (
            <CartMenuItem
              key={productItem.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onRemove={onRemove}
              {...productItem}
            />
          );
        })}
      </div>
      <div className='itemTotal'>
        <span className='subTotal'>Items subtotal:</span>
        <span className='subTotalPrice'>{formatCurrency(totalPrice)}</span>
      </div>
      <Link href='/checkout' className='checkoutBtn'>
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartMenuItems;
