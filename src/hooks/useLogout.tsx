'use client';

import { useCallback } from 'react';
import { signOut } from 'next-auth/react';

import { useSidebar } from './useSidebar';

export const useLogout = () => {
  const isOpen = useSidebar((store) => store.isOpen);
  const onClose = useSidebar((store) => store.onClose);

  const handleClose = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  const handleLogout = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      signOut({
        callbackUrl: '/',
      });

      handleClose?.();
    },
    [handleClose]
  );

  return {
    isOpen,
    onClose,
    handleClose,
    handleLogout,
  };
};
