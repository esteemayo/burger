'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCallback, useMemo } from 'react';

import { IFavorite } from '@/types';
import { likeProduct } from '@/services/productService';

const useFavorite: IFavorite = (
  actionId,
  currentUser,
  likes,
  onLike,
  onUpdate,
  onRefetch
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

        onLike?.((prev) => {
          return [...prev].map((item) => (item.id === actionId ? data : item));
        });
        onUpdate?.(data);
        onRefetch?.();
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
