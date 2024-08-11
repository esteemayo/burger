'use client';

import Image from 'next/image';
import Link from 'next/link';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import { formatCurrency } from '@/utils/formatCurrency';

const CartItem = ({
  id,
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div className='catProduct'>
      <div className={'cardBox'}>
        <div className='cardProductWrap'>
          <div className='cardProduct'>
            <div className='cardName'>
              <p>
                <span>{quantity}</span>
                <Link href={`/product/${id}`}>{name}</Link>
              </p>
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
              <button type='button' onClick={(e) => onIncrement(e, id)}>
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
              onClick={() => onRemove(id)}
            >
              <RemoveShoppingCartIcon />
            </button>
            <div className='cardPrice'>{formatCurrency(price)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
