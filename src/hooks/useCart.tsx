'use client';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import { CartItem } from '@/types';
import { useCartStore } from './useCartStore';

export const useCart = (product: CartItem) => {
  const router = useRouter();
  const { data: session } = useSession();

  const addToCart = useCartStore((store) => store.addToCart);

  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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

      if (session.user.isAdmin) {
        toast.warn('You are not authorized!');
        return;
      }

      setIsLoading(true);

      setTimeout(() => {
        addToCart({ ...product, quantity });
        setQuantity(1);

        toast.success('Product added to cart!');
        setIsLoading(false);
      }, 1000);
    },
    [addToCart, product, quantity, router, session]
  );

  return {
    quantity,
    isLoading,
    setQuantity,
    handleChange,
    handleClick,
  };
};
