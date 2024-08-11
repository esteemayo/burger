'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { useCartStore } from '@/hooks/useCartStore';
import { useCartControls } from '@/hooks/useCartControls';

import CartItem from '../cartItem/CartItem';

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
            <div className='emptyCart'>
              <div className='emptyHeading'>Empty cart</div>
              <div className='emptyLink'>
                <Link href='/products'>Continue shopping</Link>
              </div>
            </div>
          ) : (
            <div className={cardClasses}>
              {products.map((product) => {
                const { id, name, price, quantity } = product;
                return (
                  <CartItem
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    quantity={quantity}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onRemove={removeFromCart}
                  />
                );
              })}
            </div>
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
