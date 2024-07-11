'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useMemo } from 'react';

import { CartItem } from '@/types';
import { useCartStore } from './useCartStore';

export const useCartControls = (product?: CartItem) => {
  const { data: session } = useSession();

  const products = useCartStore((store) => store.products);
  const toggleQuantity = useCartStore((store) => store.toggleQuantity);

  const handleDecrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, productId: string) => {
      e.stopPropagation();
      toggleQuantity({ type: 'dec', id: productId });
    },
    [toggleQuantity]
  );

  const handleIncrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, productId: string) => {
      e.stopPropagation();
      toggleQuantity({ type: 'inc', id: productId });
    },
    [toggleQuantity]
  );

  const inCart = useMemo(() => {
    const inCart = products.find((item) => item.id === product?.id);
    return !!inCart;
  }, [product?.id, products]);

  const cartQuantity = useMemo(() => {
    return !session ? 0 : totalItems;
  }, [session, totalItems]);

  const btnLabel = useMemo(() => {
    if (!session) {
      return 'Add to cart';
    }

    return inCart ? 'In cart' : 'Add to cart';
  }, [inCart, session]);

  return {
    inCart,
    btnLabel,
    cartQuantity,
    handleDecrement,
    handleIncrement,
  };
};
