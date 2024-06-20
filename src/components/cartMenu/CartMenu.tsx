'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import CartMenuItem from '../cartMenuItem/CartMenuItem';
import EmptyCartMenu from '../emptyCartMenu/EmptyCartMenu';

import { formatCurrency } from '@/utils/formatCurrency';

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
        <>
          <div className='cardHeader'>Your cart</div>
          <div className='cardProductBox'>
            {products.slice(0, 3).map((productItem) => {
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
        </>
      )}
    </div>
  );
};

export default CartMenu;
