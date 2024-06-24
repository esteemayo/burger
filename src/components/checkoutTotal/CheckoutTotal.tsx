'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { useCartStore } from '@/hooks/useCartStore';
import { useCartControls } from '@/hooks/useCartControls';

import CheckoutProducts from '../checkoutProducts/CheckoutProducts';

import './CheckoutTotal.scss';

const CheckoutTotal = () => {
  const { data: session } = useSession();
  const { handleDecrement, handleIncrement } = useCartControls();

  const totalPrice = useCartStore((store) => store.totalPrice);
  const products = useCartStore((store) => store.products);
  const removeFromCart = useCartStore((store) => store.removeFromCart);

  return (
    <div className='checkoutTotal'>
      <div className='checkoutBox'>
        <div className='checkoutDetail'>
          <div className='checkoutCard'>
            <div className='checkoutHeader'>
              Your order from
              <p className='checkoutCustomer'>{session?.user.name}</p>
            </div>
            <div className='checkoutBody'>
              {products.length < 1 || !session ? (
                <div className='emptyCartWrap'>
                  <div className='emptyCartTitle'>Empty cart</div>
                  <div className='emptyCartLinkWrap'>
                    <Link href='/products' className='emptyCartLink'>
                      Continue shopping
                    </Link>
                  </div>
                </div>
              ) : (
                <CheckoutProducts
                  products={products}
                  totalPrice={totalPrice}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onRemove={removeFromCart}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTotal;
