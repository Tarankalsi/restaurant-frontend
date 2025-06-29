import React from 'react';
import HeroSection from '../components/HeroSection';
import RestaurantOverview from '../components/overview/RestaurantOverview';
import FeaturedSections from '../components/FeaturedSections';
import Gallery from '../components/Gallery';
import ReservationForm from '../components/ReservationForm';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <RestaurantOverview />
      <FeaturedSections />
      <Gallery />
      <ReservationForm />
    </>
  );
};

export default HomePage; 