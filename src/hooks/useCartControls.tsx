'use client';

import { useCallback, useMemo } from 'react';

import { CartItem } from '@/types';
import { useCartStore } from './useCartStore';

export const useCartControls = (product?: CartItem) => {
  const toggleQuantity = useCartStore((store) => store.toggleQuantity);
  const products = useCartStore((store) => store.products);

  const handleDecrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, productId: number) => {
      e.stopPropagation();
      toggleQuantity({ type: 'dec', id: productId });
    },
    [toggleQuantity]
  );

  const handleIncrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, productId: number) => {
      e.stopPropagation();
      toggleQuantity({ type: 'inc', id: productId });
    },
    [toggleQuantity]
  );

  const inCart = useMemo(() => {
    const inCart = products.find((item) => item.id === product?.id);
    return !!inCart;
  }, [product?.id, products]);

  const btnLabel = useMemo(() => {
    return inCart ? 'In cart' : 'Add to cart';
  }, [inCart]);

  return {
    inCart,
    btnLabel,
    handleDecrement,
    handleIncrement,
  };
};
