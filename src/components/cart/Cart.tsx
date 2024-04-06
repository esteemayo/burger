'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Image from 'next/image';

import { useCartStore } from '@/hooks/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';

import './Cart.scss';

const Cart = () => {
  const removeFromCart = useCartStore((store) => store.removeFromCart);
  const products = useCartStore((store) => store.products);
  const toggleQuantity = useCartStore((store) => store.toggleQuantity);

  const handleIncrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, productId: number) => {
      e.stopPropagation();

      toggleQuantity({ type: 'inc', id: productId });
    },
    [toggleQuantity]
  );

  const handleDecrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, productId: number) => {
      e.stopPropagation();

      toggleQuantity({ type: 'dec', id: productId });
    },
    [toggleQuantity]
  );

  return (
    <aside className='productCart'>
      <div className='detailBox'>
        <div className='cardWrap'>
          <div className='cardHeading'>Your cart</div>
          {products.length < 1 ? (
            <div className='emptyCart'>
              <div className='emptyHeading'>Empty cart</div>
              <div className='emptyLink'>
                <Link href='/'>Continue shopping</Link>
              </div>
            </div>
          ) : (
            <div className='cardBody'>
              {products.map((product) => {
                const { id, name, price, quantity } = product;
                return (
                  <div key={id} className='catProduct'>
                    <div className='cardBox'>
                      <div className='cardProductWrap'>
                        <div className='cardProduct'>
                          <div className='cardName'>
                            <p>
                              <span>{quantity}</span>
                              {name}
                            </p>
                          </div>
                          <div className='cardButtons'>
                            <button
                              type='button'
                              onClick={(e) => handleDecrement(e, id)}
                            >
                              <Image
                                src='/svg/chevron-down.svg'
                                width={17}
                                height={17}
                                alt='chevron-down icon'
                              />
                            </button>
                            <button
                              type='button'
                              onClick={(e) => handleIncrement(e, id)}
                            >
                              <Image
                                src='/svg/chevron-up.svg'
                                width={17}
                                height={17}
                                alt='chevron-up icon'
                              />
                            </button>
                          </div>
                          <button
                            type='button'
                            className='deleteCardBtn'
                            onClick={() => removeFromCart(id)}
                          >
                            <RemoveShoppingCartIcon />
                          </button>
                          <div className='cardPrice'>
                            {formatCurrency(price)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {products.length > 0 && (
            <div className='cardFooter'>
              <Link href='/checkout'>Proceed to Checkout</Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Cart;
