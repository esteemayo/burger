import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { AddressAction, AddressStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useAddressModal = create<AddressStore & AddressAction>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openAddressModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeAddressModal'
      ),
  }))
);
