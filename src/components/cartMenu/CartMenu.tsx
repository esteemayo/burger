'use client';

import { useSession } from 'next-auth/react';

import EmptyCartMenu from '../emptyCartMenu/EmptyCartMenu';
import CartMenuItems from '../cartMenuItems/CartMenuItems';

import './CartMenu.scss';

const CartMenu = ({
  products,
  totalPrice,
  onIncrement,
  onDecrement,
  onRemove,
}: CartMenuProps) => {
  const { data: session } = useSession();

  return (
    <div className='cartCard'>
      {products.length < 1 || !session ? (
        <EmptyCartMenu />
      ) : (
        <CartMenuItems
          products={products}
          totalPrice={totalPrice}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
        />
      )}
    </div>
  );
};

export default CartMenu;
