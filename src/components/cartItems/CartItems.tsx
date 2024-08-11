'use client';

import { useMemo } from 'react';

import { CartItemsProps } from '@/types';
import CartItem from '../cartItem/CartItem';

import './CartItems.scss';

const CartItems = ({
  products,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemsProps) => {
  const cardClasses = useMemo(() => {
    return products.length <= 4 ? 'cardItems hide' : 'cardItems';
  }, [products.length]);

  return (
    <div className={cardClasses}>
      {products.map((product) => {
        const { id, name, price, quantity } = product;
        return (
          <CartItem
            key={id}
            id={id}
            name={name}
            price={price}
            quantity={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default CartItems;
