'use client';

import { useEffect } from 'react';

import { useCartStore } from '@/hooks/useCartStore';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const products = useCartStore((store) => store.products);
  const calcTotals = useCartStore((store) => store.calcTotals);

  useEffect(() => {
    calcTotals();
  }, [calcTotals, products]);

  return <>{children}</>;
};

export default CartProvider;
