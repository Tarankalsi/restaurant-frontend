import React from 'react';
import Button from './common/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FeaturedSection {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const FeaturedSections: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const featuredSections: FeaturedSection[] = [
    {
      id: 1,
      title: "Seasonal Menu Highlights",
      description:
        "Our chef creates seasonal menus that showcase the finest ingredients at their peak. Each dish is thoughtfully crafted to deliver exceptional flavors and presentations that delight all senses.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=Seasonal%20gourmet%20dishes%20arranged%20on%20a%20wooden%20table%20with%20fresh%20ingredients%20surrounding%20them.%20Chef%5Cs%20special%20menu%20with%20colorful%20vegetables%2C%20premium%20meats%2C%20and%20artistic%20plating.%20Natural%20lighting%20highlighting%20the%20vibrant%20colors%20and%20textures%20of%20the%20food%20against%20an%20elegant%20restaurant%20background&width=600&height=400&seq=4&orientation=landscape",
      buttonText: "Explore Seasonal Menu",
    },
    {
      id: 2,
      title: "Chef's Recommendations",
      description:
        "Discover our executive chef's personal selections, featuring signature dishes that have become favorites among our regular guests. Each recommendation represents the pinnacle of our culinary philosophy.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=Professional%20chef%20in%20white%20uniform%20and%20toque%20presenting%20a%20beautifully%20plated%20signature%20dish%20with%20confident%20smile.%20Kitchen%20background%20with%20soft%20focus%20showing%20other%20chefs%20working.%20Premium%20culinary%20creation%20with%20artistic%20presentation%20and%20garnish%20on%20an%20elegant%20plate&width=600&height=400&seq=5&orientation=landscape",
      buttonText: "View Chef's Selections",
    },
    {
      id: 3,
      title: "Private Dining Experience",
      description:
        "Our exclusive private dining rooms offer an intimate setting for special celebrations, business meetings, or romantic evenings. Personalized service and customized menus ensure a memorable experience.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=Elegant%20private%20dining%20room%20with%20luxurious%20decor%2C%20crystal%20chandelier%2C%20and%20perfectly%20set%20table%20for%20special%20occasions.%20Intimate%20space%20with%20sophisticated%20ambiance%2C%20premium%20table%20settings%2C%20and%20warm%20lighting.%20Exclusive%20restaurant%20area%20designed%20for%20celebrations%20with%20high-end%20furnishings%20and%20tasteful%20decorations&width=600&height=400&seq=6&orientation=landscape",
      buttonText: "Book Private Dining",
    },
    {
      id: 4,
      title: "Special Events & Celebrations",
      description:
        "From anniversaries to corporate gatherings, our events team specializes in creating bespoke experiences. We handle every detail to ensure your special occasion exceeds expectations.",
      imageUrl:
        "https://readdy.ai/api/search-image?query=Elegant%20restaurant%20event%20setup%20with%20beautifully%20decorated%20tables%20for%20a%20celebration.%20Champagne%20glasses%2C%20floral%20arrangements%2C%20and%20sophisticated%20place%20settings.%20Warm%20ambient%20lighting%20creating%20a%20festive%20atmosphere%20in%20an%20upscale%20dining%20space%20with%20attention%20to%20every%20detail&width=600&height=400&seq=7&orientation=landscape",
      buttonText: "Plan Your Event",
    },
  ];

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        {featuredSections.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-16 last:mb-0`}
          >
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src={section.imageUrl}
                alt={section.title}
                className={`w-full h-auto rounded-lg shadow-md object-cover object-top hover-lift transition-all duration-500 ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                } ${isIntersecting ? 'animate' : ''}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              />
            </div>
            <div
              className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} ${
                index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'
              } ${isIntersecting ? 'animate' : ''}`}
              style={{ transitionDelay: `${index * 0.2 + 0.1}s` }}
            >
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <Button variant="primary" size="md">
                {section.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSections; 