import React from 'react';
import '../../App.css';
import Cards from './Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Services from './Services';
import About from './About';
import Process from './Process';

function Home() {
  return (
    <>
      <HeroSection />
      
      < About />
      
      <Services />
      
      <Cards />

      <Process />

      <Footer />
    </>
  );
}

export default Home;
