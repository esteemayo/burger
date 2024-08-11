'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import CartItems from '../cartItems/CartItems';
import EmptyCart from '../emptyCart/EmptyCart';

import { useCartStore } from '@/hooks/useCartStore';
import { useCartControls } from '@/hooks/useCartControls';

import './Cart.scss';

const Cart = () => {
  const { data: session } = useSession();
  const { handleDecrement, handleIncrement } = useCartControls();

  const products = useCartStore((store) => store.products);
  const removeFromCart = useCartStore((store) => store.removeFromCart);

  const cartClasses = useMemo(() => {
    return products.length < 1 ? 'productCart emptyProductCart' : 'productCart';
  }, [products.length]);

  const emptyHeaderClasses = useMemo(() => {
    return products.length < 1 ? 'cardHeading emptyCardHeading' : 'cardHeading';
  }, [products.length]);

  const cardClasses = useMemo(() => {
    return products.length <= 4 ? 'cardItems hide' : 'cardItems';
  }, [products.length]);

  const footerClasses = useMemo(() => {
    return !!session && products.length > 0
      ? 'cardFooter show'
      : 'cardFooter hide';
  }, [products.length, session]);

  return (
    <aside className={cartClasses}>
      <div className='detailBox'>
        <div className='cardWrap'>
          <div className={emptyHeaderClasses}>Your cart</div>
          {products.length < 1 || !session ? (
            <EmptyCart />
          ) : (
            <CartItems
              products={products}
              cardClasses={cardClasses}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onRemove={removeFromCart}
            />
          )}
          <div className={footerClasses}>
            <Link href='/checkout'>Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
