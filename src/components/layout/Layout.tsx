import Footer from '../footer/Footer';
import Designer from '../designer/Designer';
import Navbar from '../navbar/Navbar';
import ScrollTop from '../scrollTop/ScrollTop';
import Sidebar from '../sidebar/Sidebar';
import ClientOnly from '../clientOnly/ClientOnly';

import ModalProvider from '@/providers/ModalProvider';
import CartProvider from '@/providers/CartProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import AuthProvider from '@/providers/AuthProvider';
import SkeletonProvider from '@/providers/SkeletonProvider';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
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
