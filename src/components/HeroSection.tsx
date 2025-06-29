import React, { useState, useEffect } from 'react';
import HeroSlide from './hero/HeroSlide';
import SlideIndicators from './hero/SlideIndicators';
import ReservationWidget from './reservation/ReservationWidget';

interface HeroSlideData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const heroSlides: HeroSlideData[] = [
    {
      id: 1,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Elegant%20restaurant%20interior%20with%20warm%20ambient%20lighting%2C%20sophisticated%20table%20settings%20with%20white%20tablecloths%2C%20crystal%20glasses%2C%20and%20modern%20decor%20elements.%20Professional%20waitstaff%20serving%20guests%20in%20an%20upscale%20dining%20atmosphere%20with%20soft%20focus%20background%20and%20rich%2C%20inviting%20colors&width=1200&height=600&seq=1&orientation=landscape",
      title: "Experience Culinary Excellence",
      description: "Indulge in an extraordinary culinary journey where every dish tells a story and every meal becomes a cherished memory.",
    },
    {
      id: 2,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Close-up%20of%20exquisitely%20plated%20gourmet%20dish%20with%20vibrant%20colors%20and%20artistic%20presentation.%20Chef%5Cs%20signature%20creation%20with%20fresh%20ingredients%2C%20delicate%20garnishes%2C%20and%20perfect%20portion%20sizing.%20Soft%20background%20lighting%20highlighting%20the%20texture%20and%20detail%20of%20the%20premium%20culinary%20masterpiece&width=1200&height=600&seq=2&orientation=landscape",
      title: "Signature Dishes Crafted with Passion",
      description: "Indulge in an extraordinary culinary journey where every dish tells a story and every meal becomes a cherished memory.",
    },
    {
      id: 3,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Romantic%20restaurant%20setting%20with%20candlelit%20tables%2C%20elegant%20wine%20glasses%2C%20and%20intimate%20seating%20arrangements.%20Warm%2C%20sophisticated%20atmosphere%20with%20subtle%20lighting%2C%20premium%20decor%20elements%2C%20and%20a%20view%20of%20the%20city%20lights%20through%20large%20windows.%20Perfect%20ambiance%20for%20special%20occasions&width=1200&height=600&seq=3&orientation=landscape",
      title: "Perfect Setting for Special Moments",
      description: "Indulge in an extraordinary culinary journey where every dish tells a story and every meal becomes a cherished memory.",
    },
  ];

  return (
    <section className="relative min-h-[900px] md:h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          imageUrl={slide.imageUrl}
          title={slide.title}
          description={slide.description}
          isActive={index === activeSlide}
        />
      ))}
       <ReservationWidget
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
      />

      <SlideIndicators
        totalSlides={heroSlides.length}
        activeSlide={activeSlide}
        onSlideChange={handleSlideChange}
      />

     
    </section>
  );
};

export default HeroSection;