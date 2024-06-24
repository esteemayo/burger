'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { formatCurrency } from '@/utils/formatCurrency';
import { useCartStore } from '@/hooks/useCartStore';
import { useCartControls } from '@/hooks/useCartControls';

import CheckoutItem from '../checkoutItem/CheckoutItem';

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
                <>
                  <div className='checkoutProductBox'>
                    {products.map((product) => {
                      return (
                        <CheckoutItem
                          key={product.id}
                          onIncrement={handleIncrement}
                          onDecrement={handleDecrement}
                          onRemove={removeFromCart}
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTotal;
