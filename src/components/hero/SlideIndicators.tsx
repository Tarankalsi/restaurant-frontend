import React from 'react';

interface SlideIndicatorsProps {
  totalSlides: number;
  activeSlide: number;
  onSlideChange: (index: number) => void;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  totalSlides,
  activeSlide,
  onSlideChange,
}) => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-3 h-3 rounded-full ${
            index === activeSlide ? "bg-white" : "bg-white/50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};

export default SlideIndicators; 