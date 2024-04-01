import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { AccountMenuStore, AccountMenuType } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useAccountMenu = create<AccountMenuStore & AccountMenuType>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openMenu'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeMenu'
      ),
  }))
);
