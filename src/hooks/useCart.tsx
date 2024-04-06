'use client';

import { useCallback, useState } from 'react';

import { CartItem } from '@/types';
import { useCartStore } from './useCartStore';

export const useCart = (product: CartItem) => {
  const addToCart = useCartStore((store) => store.addToCart);
  const toggleQuantity = useCartStore((store) => store.toggleQuantity);

  const [quantity, setQuantity] = useState(1);

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

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      addToCart({ ...product, quantity });
    },
    [addToCart, product, quantity]
  );

  return {
    quantity,
    setQuantity,
    handleClick,
    handleDecrement,
    handleIncrement,
  };
};
