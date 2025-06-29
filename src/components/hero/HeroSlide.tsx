import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import ReservationWidget from '../reservation/ReservationWidget';

interface HeroSlideProps {
  imageUrl: string;
  title: string;
  description: string;
  isActive: boolean;
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  guests: string;
  setGuests: (guests: string) => void;
}

const HeroSlide: React.FC<HeroSlideProps> = ({
  imageUrl,
  title,
  description,
  isActive,
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
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
        <div className="container mx-auto px-4">
          <div className="flex flex-row flex-wrap items-center justify-between gap-8">
            <div className="w-full lg:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-fade-in-up">
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
            <div className="w-full lg:w-auto">
              <ReservationWidget
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide; 