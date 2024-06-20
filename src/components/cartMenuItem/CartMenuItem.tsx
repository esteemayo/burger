'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useCallback } from 'react';

import { CartMenuItemProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './CartMenuItem.scss';

const CartMenuItem = ({
  id,
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}: CartMenuItemProps) => {
  const router = useRouter();

  const productUrl = useCallback(
    (_e: React.MouseEvent<HTMLDivElement>) => {
      router.push(`/product/${encodeURIComponent(id)}`);
      return;
    },
    [id, router]
  );

  return (
    <div key={id} className='cartMenuItem'>
      <span className='quantity'>{quantity}</span>
      <div className='cardItem' onClick={productUrl}>
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
};

export default CartMenuItem;
