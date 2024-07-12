'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCallback, useMemo } from 'react';

import { CurrentUserType, IFavorite } from '@/types';
import { likeProduct } from '@/services/productService';

const useFavorite: IFavorite = (
  actionId: string,
  currentUser: CurrentUserType | undefined,
  likes: string[],
  onUpdate
) => {
  const router = useRouter();

  const hasFavorited = useMemo(() => {
    const product = likes ?? [];
    const userId = currentUser?.id ?? '';

    const list = product.includes(userId);
    return !!list;
  }, [currentUser, likes]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        router.push('/login');
        return;
      }

      try {
        const { data } = await likeProduct(actionId);
        onUpdate(data);
      } catch (err: unknown) {
        console.log(err);
        toast.error('Something went wrong');
      }
    },
    [actionId, currentUser, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
