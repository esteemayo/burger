import Menus from '@/components/menus/Menus';
import Header from '@/components/header/Header';
import Offer from '@/components/offer/Offer';
import Features from '@/components/features/Features';

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <Menus />
      <Offer />
    </div>
  );
};

export default Home;
