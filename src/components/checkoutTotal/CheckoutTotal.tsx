'use client';

import Skeleton from 'react-loading-skeleton';
import { useMemo } from 'react';
import { useSession } from 'next-auth/react';

import EmptyCheckout from '../emptyCheckout/EmptyCheckout';
import CheckoutProducts from '../checkoutProducts/CheckoutProducts';

import { useCartStore } from '@/hooks/useCartStore';
import { useCartControls } from '@/hooks/useCartControls';

import './CheckoutTotal.scss';

const CheckoutTotal = () => {
  const { data: session, status } = useSession();
  const { handleDecrement, handleIncrement } = useCartControls();

  const totalPrice = useCartStore((store) => store.totalPrice);
  const products = useCartStore((store) => store.products);
  const removeFromCart = useCartStore((store) => store.removeFromCart);

  const customerLabel = useMemo(() => {
    return session?.user.name;
  }, [session]);

  return (
    <div className='checkoutTotal'>
      <div className='checkoutBox'>
        <div className='checkoutDetail'>
          <div className='checkoutCard'>
            <div className='checkoutHeader'>
              Your order from
              <p className='checkoutCustomer'>
                {status === 'loading' ? <Skeleton width={120} height={10} /> : customerLabel}
              </p>
            </div>
            <div className='checkoutBody'>
              {products.length < 1 || !session ? (
                <EmptyCheckout />
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
