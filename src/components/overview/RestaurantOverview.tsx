import React from 'react';
import FeatureCard from './FeatureCard';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const RestaurantOverview: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const features = [
    {
      icon: "fa-utensils",
      title: "Fine Dining",
      description: "Experience world-class cuisine in an elegant atmosphere"
    },
    {
      icon: "fa-wine-glass-alt",
      title: "Premium Wines",
      description: "Extensive wine list curated by our expert sommelier"
    },
    {
      icon: "fa-star",
      title: "Award Winning",
      description: "Recognized for culinary excellence and service"
    },
    {
      icon: "fa-calendar-alt",
      title: "Private Events",
      description: "Perfect venue for special occasions and celebrations"
    }
  ];

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 fade-in-up ${isIntersecting ? 'animate' : ''}`}>
            Why Choose Saveur?
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto fade-in-up ${isIntersecting ? 'animate' : ''} stagger-1`}>
            We combine traditional culinary techniques with modern innovation to create unforgettable dining experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isIntersecting={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantOverview; 