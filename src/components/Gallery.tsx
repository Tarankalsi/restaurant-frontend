import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface GalleryImage {
  id: number;
  imageUrl: string;
  caption: string;
}

const Gallery: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Elegant%20restaurant%20interior%20with%20sophisticated%20decor%2C%20ambient%20lighting%2C%20and%20tastefully%20arranged%20tables.%20High-end%20dining%20space%20with%20architectural%20details%2C%20premium%20furnishings%2C%20and%20warm%20color%20palette.%20Upscale%20atmosphere%20with%20attention%20to%20design%20elements%20and%20comfortable%20seating%20arrangements&width=400&height=300&seq=8&orientation=landscape",
      caption: "Main Dining Area",
    },
    {
      id: 2,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Exquisitely%20plated%20gourmet%20seafood%20dish%20with%20artistic%20presentation%20on%20a%20designer%20plate.%20Premium%20fish%20or%20shellfish%20preparation%20with%20delicate%20garnishes%20and%20sauce%20drizzles.%20Professional%20food%20styling%20with%20attention%20to%20color%2C%20texture%2C%20and%20composition%20against%20an%20elegant%20restaurant%20background&width=400&height=300&seq=9&orientation=landscape",
      caption: "Seafood Specialties",
    },
    {
      id: 3,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Cozy%20restaurant%20corner%20with%20intimate%20table%20setting%2C%20soft%20lighting%2C%20and%20elegant%20decor.%20Romantic%20dining%20spot%20with%20comfortable%20seating%2C%20premium%20tableware%2C%20and%20sophisticated%20ambiance.%20Warm%20atmosphere%20with%20tasteful%20design%20elements%20and%20attention%20to%20comfort%20and%20privacy&width=400&height=300&seq=10&orientation=landscape",
      caption: "Intimate Dining Corner",
    },
    {
      id: 4,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Gourmet%20dessert%20plate%20with%20artistic%20presentation%2C%20featuring%20chocolate%20elements%2C%20fresh%20berries%2C%20and%20decorative%20garnishes.%20Beautifully%20crafted%20sweet%20creation%20with%20multiple%20textures%20and%20complementary%20flavors.%20Professional%20pastry%20presentation%20on%20an%20elegant%20plate%20with%20restaurant-quality%20styling&width=400&height=300&seq=11&orientation=landscape",
      caption: "Artisanal Desserts",
    },
    {
      id: 5,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Sophisticated%20bar%20area%20in%20upscale%20restaurant%20with%20premium%20spirits%20display%2C%20elegant%20glassware%2C%20and%20professional%20bartender.%20Modern%20design%20with%20ambient%20lighting%2C%20comfortable%20seating%2C%20and%20high-end%20finishes.%20Stylish%20drinking%20environment%20with%20attention%20to%20detail%20and%20luxurious%20atmosphere&width=400&height=300&seq=12&orientation=landscape",
      caption: "Craft Cocktail Bar",
    },
    {
      id: 6,
      imageUrl:
        "https://readdy.ai/api/search-image?query=Exclusive%20private%20dining%20room%20with%20elegant%20table%20setting%2C%20sophisticated%20decor%2C%20and%20premium%20furnishings.%20Intimate%20space%20designed%20for%20special%20occasions%20with%20attention%20to%20lighting%2C%20comfort%2C%20and%20ambiance.%20High-end%20dining%20environment%20with%20privacy%20and%20luxury%20for%20important%20celebrations&width=400&height=300&seq=13&orientation=landscape",
      caption: "Private Dining Suite",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif font-bold text-gray-900 fade-in-up ${isIntersecting ? 'animate' : ''}`}>
            Gallery
          </h2>
          <p className={`mt-4 text-gray-600 max-w-2xl mx-auto fade-in-up ${isIntersecting ? 'animate' : ''} stagger-1`}>
            Experience the ambiance and culinary artistry that defines
            Saveur.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-6 space-x-6 hide-scrollbar">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`flex-none w-80 relative fade-in-up ${isIntersecting ? 'animate' : ''} hover-lift`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.imageUrl}
                alt={image.caption}
                className="w-full h-64 object-cover object-top rounded-lg shadow-md transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 