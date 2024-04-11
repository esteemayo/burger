'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useCallback } from 'react';

import { CartMenuProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './CartMenu.scss';

const CartMenu = ({
  products,
  totalPrice,
  onIncrement,
  onDecrement,
  onRemove,
}: CartMenuProps) => {
  const router = useRouter();

  const productUrl = useCallback(
    (id: number) => {
      return router.push(`/product/${encodeURIComponent(id)}`);
    },
    [router]
  );

  return (
    <div className='cartCard'>
      {products.length < 1 ? (
        <>
          <div className='cardHeader empty'>Empty cart</div>
          <hr />
          <div className='cartFooter'>
            <Link href='/products' className='cartBtn'>
              Continue shopping
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className='cardHeader'>Your cart</div>
          <div className='cardProductBox'>
            {products.slice(0, 3).map((productItem) => {
              const { id, name, price, quantity } = productItem;
              return (
                <div key={id} className='productBox'>
                  <span className='quantity'>{quantity}</span>
                  <div className='cardItem' onClick={() => productUrl(id)}>
                    {name}
                  </div>
                  <div className='cardButtons'>
                    <button type='button' onClick={(e) => onDecrement(e, id)}>
                      <Image
                        src='/svg/chevron-down.svg'
                        width={17}
                        height={17}
                        alt='chevron-down icon'
                      />
                    </button>
                    <button
                      type='button'
                      disabled={quantity >= 10}
                      onClick={(e) => onIncrement(e, id)}
                    >
                      <Image
                        src='/svg/chevron-up.svg'
                        width={17}
                        height={17}
                        alt='chevron-up icon'
                      />
                    </button>
                  </div>
                  <div className='deleteBtn' onClick={() => onRemove(id)}>
                    <RemoveShoppingCartIcon />
                  </div>
                  <span className='price'>{formatCurrency(price)}</span>
                </div>
              );
            })}
          </div>
          <div className='itemTotal'>
            <span className='subTotal'>Items subtotal:</span>
            <span>{formatCurrency(totalPrice)}</span>
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
