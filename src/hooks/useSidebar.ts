import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { SidebarActionType, SidebarStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useSidebar = create<SidebarStore & SidebarActionType>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openSidebar'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeSidebar'
      ),
  }))
);
