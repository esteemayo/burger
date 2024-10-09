'use client';

import { useCallback } from "react";

import { useSidebar } from "./useSidebar";

export const useCloseSidebar = () => {
  const onClose = useSidebar((store) => store.onClose);

  const closeHandler = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;

      if (!target.classList.contains('sidebar')) {
        onClose();
      }
    },
    [onClose]
  );

  return {
    closeHandler,
  };
};
