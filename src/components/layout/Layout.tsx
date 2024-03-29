import Footer from '../footer/Footer';
import Designer from '../designer/Designer';
import Navbar from '../navbar/Navbar';
import ClientOnly from '../clientOnly/ClientOnly';
import ScrollTop from '../scrollTop/ScrollTop';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <ClientOnly>
        <Navbar />
        {children}
        <Footer />
        <Designer />
        <ScrollTop />
      </ClientOnly>
    </main>
  );
};

export default Layout;
