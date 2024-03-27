import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { ProductModalActionType, ProductModalStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useProductModal = create<
  ProductModalStore & ProductModalActionType
>(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openProductModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeProductModal'
      ),
  }))
);
