import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Designer from '../designer/Designer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Designer />
    </>
  );
};

export default Layout;
