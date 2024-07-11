'use client';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { CartItem } from '@/types';
import { useCartStore } from './useCartStore';

export const useCart = (product: CartItem) => {
  const router = useRouter();
  const { data: session } = useSession();

  const addToCart = useCartStore((store) => store.addToCart);
  const totalItems = useCartStore((store) => store.totalItems);

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

      if (session.user.isAdmin) {
        toast.warn('You are not authorized!');
        return;
      }

      addToCart({ ...product, quantity });
      setQuantity(1);

      toast.success('Product added to cart!');
    },
    [addToCart, product, quantity, router, session]
  );

  const cartQuantity = useMemo(() => {
    return !session ? 0 : totalItems;
  }, [session, totalItems]);

  return {
    cartQuantity,
    quantity,
    setQuantity,
    handleChange,
    handleClick,
  };
};
