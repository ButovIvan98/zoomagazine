import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import Categories from '../components/Categories/Categories';
import Offers from '../components/Offers/Offers';
import About from '../components/About/About';
import '../ui/homepage/style/Homepage.css';

const HomePage: React.FC = () => {
  return (
    <>
      <Header showHero />
      <main>
        <PromoBanner />
        <Categories />
        <Offers />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
