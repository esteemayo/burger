import Link from 'next/link';
import Image from 'next/image';

import { CheckoutProductProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

import './CheckoutProduct.scss';

const CheckoutProduct = ({
  id,
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}: CheckoutProductProps) => {
  return (
    <article className='checkoutProduct'>
      <div className='checkoutProductName'>
        <Link href={`/product/${id}`}>
          <p>
            <span></span>
            {name}
          </p>
        </Link>
        <div className='checkoutQty'>
          <button type='button' onClick={(e) => onDecrement(e, id)}>
            -
          </button>
          <span className='qty'>{quantity}</span>
          <button
            type='button'
            disabled={quantity >= 10}
            onClick={(e) => onIncrement(e, id)}
          >
            +
          </button>
        </div>
      </div>
      <div className='checkoutDeleteWrap'>
        <button type='button' onClick={() => onRemove(id)}>
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
    </article>
  );
};

export default CheckoutProduct;
