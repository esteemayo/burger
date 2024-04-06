'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useCartStore } from '@/hooks/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';

import './CheckoutTotal.scss';

const CheckoutTotal = () => {
  const products = useCartStore((store) => store.products);
  const totalPrice = useCartStore((store) => store.totalPrice);

  return (
    <div className='checkoutTotal'>
      <div className='checkoutWrap'>
        <div className='checkoutDetail'>
          <div className='checkoutCard'>
            <div className='checkoutHeader'>
              Your order from
              <p className='checkoutCustomer'>Emmanuel adebayo</p>
            </div>
            <div className='checkoutBody'>
              <div className='checkoutProductBox'>
                {products.map((product) => {
                  const { id, name, price, quantity } = product;
                  return (
                    <div key={id} className='checkoutProduct'>
                      <div className='checkoutProductName'>
                        <Link href={`/product/${id}`}>
                          <p>
                            <span></span>
                            {name}
                          </p>
                        </Link>
                        <div className='checkoutQty'>
                          <button type='button'>-</button>
                          <span className='qty'>{quantity}</span>
                          <button type='button'>+</button>
                        </div>
                      </div>
                      <div className='checkoutDeleteWrap'>
                        <button type='button'>
                          <Image
                            src='/svg/thrash.svg'
                            width={15}
                            height={15}
                            alt='delete icon'
                          />
                        </button>
                      </div>
                      <div className='checkoutPrice'>
                        <span>{formatCurrency(price)}</span>
                      </div>
                    </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTotal;
