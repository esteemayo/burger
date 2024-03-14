import Footer from '../footer/Footer';
import Designer from '../designer/Designer';
import Navbar from '../navbar/Navbar';
import ScrollTop from '../scrollTop/ScrollTop';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <Designer />
      <ScrollTop />
    </main>
  );
};

export default Layout;
