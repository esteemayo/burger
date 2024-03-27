import Footer from '../footer/Footer';
import Designer from '../designer/Designer';
import Navbar from '../navbar/Navbar';
import ClientOnly from '../clientOnly/ClientOnly';
import ScrollTop from '../scrollTop/ScrollTop';
import ToasterProvider from '@/providers/ToasterProvider';
import ModalProvider from '@/providers/ModalProvider';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <ClientOnly>
        <Navbar />
        <ToasterProvider />
        <ModalProvider />
        {children}
        <Footer />
        <Designer />
        <ScrollTop />
      </ClientOnly>
    </main>
  );
};

export default Layout;
