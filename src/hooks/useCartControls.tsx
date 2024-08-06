'use client';

import { useSession } from 'next-auth/react';
import { useCallback, useMemo } from 'react';

import { CartItem } from '@/types';
import { useCartStore } from './useCartStore';

export const useCartControls = (product?: CartItem) => {
  const { data: session } = useSession();

  const totalItems = useCartStore((store) => store.totalItems);
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
    if (!!session) {
      const inCart = products.find((item) => item.id === product?.id);
      return !!inCart;
    }
  }, [product?.id, products, session]);

  const cartQuantity = useMemo(() => {
    return !!session ? totalItems : 0;
  }, [session, totalItems]);

  const btnLabel = useMemo(() => {
    return inCart ? 'In cart' : 'Add to cart';
  }, [inCart]);

  return {
    inCart,
    btnLabel,
    cartQuantity,
    handleDecrement,
    handleIncrement,
  };
};
