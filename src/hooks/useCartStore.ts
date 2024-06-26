'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools, persist } from 'zustand/middleware';

import { CartActionType, CartStore } from '@/types';

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<CartStore & CartActionType>()(
  persist(
    devtools((set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      reset: () =>
        set(
          produce((state) => {
            state.products = INITIAL_STATE.products;
            state.totalItems = INITIAL_STATE.totalItems;
            state.totalPrice = INITIAL_STATE.totalPrice;
          }),
          false,
          'resetCart'
        ),
      addToCart: (payload) =>
        set(
          produce((state) => {
            state.products.push(payload);
            state.totalItems += payload.quantity;
            state.totalPrice += payload.price * payload.quantity;
          }),
          false,
          'addToCart'
        ),
      clearCart: () =>
        set(
          produce((state) => {
            state.products = INITIAL_STATE.products;
          }),
          false,
          'clearCart'
        ),
      removeFromCart: (payload) =>
        set(
          produce((state) => {
            const productInState = get().products;

            state.products = productInState.filter(
              (productItem) => productItem.id !== payload
            );
          }),
          false,
          'removeFromCart'
        ),
      toggleQuantity: (payload) =>
        set(
          produce((state) => {
            const productInState = get().products;

            state.products = productInState
              .map((productItem) => {
                if (productItem.id === payload.id) {
                  if (payload.type === 'inc') {
                    return {
                      ...productItem,
                      quantity:
                        productItem.quantity >= 10
                          ? productItem.quantity
                          : productItem.quantity + 1,
                    };
                  }

                  if (payload.type === 'dec') {
                    return {
                      ...productItem,
                      quantity: productItem.quantity - 1,
                    };
                  }
                }

                return productItem;
              })
              .filter((productItem) => productItem.quantity !== 0);
          }),
          false,
          'toggleQuantity'
        ),
      calcTotals: () =>
        set(
          produce((state) => {
            const productInState = get().products;

            let { totalItems, totalPrice } = productInState.reduce(
              (productTotal, productItem) => {
                const { price, quantity } = productItem;
                const itemTotal = price * quantity;

                productTotal.totalItems += quantity;
                productTotal.totalPrice += itemTotal;

                return productTotal;
              },
              { totalItems: 0, totalPrice: 0 }
            );

            totalItems = parseFloat(totalItems.toFixed(2));
            totalPrice = parseFloat(totalPrice.toFixed(2));

            state.totalItems = totalItems;
            state.totalPrice = totalPrice;
          }),
          false,
          'calcTotals'
        ),
    })),
    { name: 'cart' }
  )
);
