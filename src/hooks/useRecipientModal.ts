'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { ReciepientAction, RecipientStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useRecipient = create<RecipientStore & ReciepientAction>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openRecipientModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeRecipientModal'
      ),
  }))
);
