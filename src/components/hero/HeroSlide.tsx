import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

interface HeroSlideProps {
  imageUrl: string;
  title: string;
  description: string;
  isActive: boolean;
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  imageUrl,
  title,
  description,
  isActive,
}) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 flex">
          <div className="w-full md:w-1/2 text-white pb-80 md:pb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold  animate-fade-in-up">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {description}
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/menu">
                <Button variant="primary" size="lg">
                  Explore Our Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide; 