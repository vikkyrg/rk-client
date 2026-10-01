import React from 'react';
import BusinessHero from '../components/BusinessHero';
import QuickActions from '../components/QuickActions';
import Services from '../components/Services';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import ContactCTA from '../components/ContactCTA';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
  return (
    <>
      <AnimatedPage className="bg-organic-pattern">
        <BusinessHero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Location />
        <ContactCTA />
      </AnimatedPage>
      <QuickActions />
    </>
  );
};

export default Home;
