import React from 'react';
import HeroBgImg from '../../assets/images/heroBg.jpg';
import Features from '../../components/features/Features';
import Hero from '../../components/hero/Hero';
import Process from '../../components/process/Process';
import Proof from '../../components/proof/Proof';
import Sizer from '../../components/sizer/Sizer';

const Home = () => {
  return (
    <div>
      <Hero
        texts={{
          title: 'Sunrises Gabura',
          description: 'Want Sustainable Embankment Not Relief On The Coast',
          bg: HeroBgImg,
          buttons: [
            {
              title: 'Learn More',
              url: '/about',
            },
          ],
        }}
      />
      <Features />
      <Sizer />
      <Process />
      <Proof />
    </div>
  );
};

export default Home;
