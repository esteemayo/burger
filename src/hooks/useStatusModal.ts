'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { StatusAction, StatusStore } from '@/types';

const INITIAL_STATE = {
  order: null,
  isOpen: false,
};

export const useStatusModal = create<StatusStore & StatusAction>()(
  devtools((set) => ({
    order: INITIAL_STATE.order,
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
    onSelect: (payload) =>
      set(
        produce((state) => {
          state.order = payload;
        }),
        false,
        'selectedOrder'
      ),
  }))
);
