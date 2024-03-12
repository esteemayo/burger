import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Designer from '../designer/Designer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <Designer />
    </main>
  );
};

export default Layout;
