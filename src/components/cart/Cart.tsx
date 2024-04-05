'use client';

import Image from 'next/image';
import Link from 'next/link';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import { useCartStore } from '@/hooks/useCartStore';
import { formatCurrency } from '@/utils/formatCurrency';

import './Cart.scss';

const Cart = () => {
  const products = useCartStore((store) => store.products);

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
                            <button type='button'>
                              <Image
                                src='/svg/chevron-down.svg'
                                width={17}
                                height={17}
                                alt='chevron-down icon'
                              />
                            </button>
                            <button type='button'>
                              <Image
                                src='/svg/chevron-up.svg'
                                width={17}
                                height={17}
                                alt='chevron-up icon'
                              />
                            </button>
                          </div>
                          <button type='button' className='deleteCardBtn'>
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
