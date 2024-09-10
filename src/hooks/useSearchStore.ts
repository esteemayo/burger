import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { SearchActionType, SearchStore } from '@/types';

const INITIAL_STATE = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const useSearchStore = create<SearchStore & SearchActionType>()(
  devtools((set) => ({
    products: INITIAL_STATE.products,
    isError: INITIAL_STATE.isError,
    isLoading: INITIAL_STATE.isLoading,
    isSuccess: INITIAL_STATE.isSuccess,
    message: INITIAL_STATE.message,
    searchProductPending: () =>
      set(
        produce((state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.isError = false;
        }),
        false,
        'pending'
      ),
    searchProductFulfilled: (payload) =>
      set(
        produce((state) => {
          state.isLoading = false;
          state.products = payload;
          state.isError = false;
        }),
        false,
        'fulfilled'
      ),
    searchProductFailure: (payload) =>
      set(
        produce((state) => {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.message = payload;
        }),
        false,
        'rejected'
      ),
  }))
);
