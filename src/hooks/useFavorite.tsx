'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCallback, useMemo, useState } from 'react';

import { CurrentUserType, IFavorite } from '@/types';
import { likeProduct } from '@/services/productService';

const useFavorite: IFavorite = (
  actionId: string,
  currentUser: CurrentUserType | undefined,
  likes: string[],
  onUpdate
) => {
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);

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
        setIsLiked(!!data);
        onUpdate?.(data);
      } catch (err: unknown) {
        console.log(err);
        setIsLiked(false);
        toast.error('Something went wrong');
      }
    },
    [actionId, currentUser, router]
  );

  return {
    isLiked,
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
