import Footer from '../footer/Footer';
import Designer from '../designer/Designer';
import Navbar from '../navbar/Navbar';
import ClientOnly from '../clientOnly/ClientOnly';
import ScrollTop from '../scrollTop/ScrollTop';
import ModalProvider from '@/providers/ModalProvider';
import CartProvider from '@/providers/CartProvider';
import ToasterProvider from '@/providers/ToasterProvider';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <ClientOnly>
        <CartProvider>
          <Navbar />
          <ToasterProvider />
          <ModalProvider />
          {children}
          <Footer />
          <Designer />
          <ScrollTop />
        </CartProvider>
      </ClientOnly>
    </main>
  );
};

export default Layout;
