'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { StatusAction, StatusStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useStatusModal = create<StatusStore & StatusAction>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openStatusModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeStatusModal'
      ),
  }))
);
