'use client';

import { useCallback } from 'react';

import Designer from '../designer/Designer';
import Footer from '../footer/Footer';
import ScrollTop from '../scrollTop/ScrollTop';
import Navbar from '../navbar/Navbar';
import ClientOnly from '../clientOnly/ClientOnly';
import Sidebar from '../sidebar/Sidebar';

import ModalProvider from '@/providers/ModalProvider';
import CartProvider from '@/providers/CartProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import AuthProvider from '@/providers/AuthProvider';
import SkeletonProvider from '@/providers/SkeletonProvider';

import { useSidebar } from '@/hooks/useSidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const onClose = useSidebar((store) => store.onClose);

  const handleClose = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;

      if (!target.classList.contains('sidebar')) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <main onClick={handleClose}>
      <AuthProvider>
        <ClientOnly>
          <SkeletonProvider>
            <CartProvider>
              <Navbar />
              <Sidebar />
              <ToasterProvider />
              <ModalProvider />
              {children}
              <Footer />
              <Designer />
              <ScrollTop />
            </CartProvider>
          </SkeletonProvider>
        </ClientOnly>
      </AuthProvider>
    </main>
  );
};

export default Layout;
