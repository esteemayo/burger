'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { CartItem } from '@/types';
import { useCartStore } from './useCartStore';

export const useCart = (product: CartItem) => {
  const router = useRouter();
  const { data: session } = useSession();

  const addToCart = useCartStore((store) => store.addToCart);

  const [quantity, setQuantity] = useState(1);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (!session) {
        router.push('/login');
        return;
      }

      addToCart({ ...product, quantity });
    },
    [addToCart, product, quantity]
  );

  return {
    quantity,
    setQuantity,
    handleChange,
    handleClick,
  };
};
