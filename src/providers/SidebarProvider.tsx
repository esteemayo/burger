'use client';

import { useCallback } from 'react';

import { useSidebar } from '@/hooks/useSidebar';

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const onClose = useSidebar((store) => store.onClose);

  const handleClose = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;

      if (!target.classList.contains('sidebar')) {
        onClose();
      }
    },
    [onClose]
  );

  return <div onClick={handleClose}>{children}</div>;
};

export default SidebarProvider;
