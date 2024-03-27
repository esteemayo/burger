'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { AccountModalActionType, AccountModalStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useAccountModal = create<
  AccountModalStore & AccountModalActionType
>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openAccountModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeAccountModal'
      ),
  }))
);
