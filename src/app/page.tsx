import Header from '@/components/header/Header';
import Menus from '@/components/menus/Menus';
import Features from '@/components/features/Features';
import Offer from '@/components/offer/Offer';
import NewsLetter from '@/components/newsletter/NewsLetter';

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Menus />
      <Offer />
      <NewsLetter />
    </>
  );
};

export default Home;
