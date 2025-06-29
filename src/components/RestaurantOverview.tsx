import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const RestaurantOverview: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "fa-utensils",
      title: "Fine Dining Experience",
      description:
        "Contemporary cuisine with Mediterranean influences using locally sourced ingredients.",
      link: "View Menu",
    },
    {
      icon: "fa-clock",
      title: "Opening Hours",
      description:
        "Lunch: 12:00 PM - 3:00 PM | Dinner: 6:00 PM - 10:30 PM | Closed on Mondays",
      link: "See Full Schedule",
    },
    {
      icon: "fa-map-marker-alt",
      title: "Prime Location",
      description: "123 Gourmet Avenue, Downtown District, New York, NY 10001",
      link: "Get Directions",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            Welcome to Saveur
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Where culinary artistry meets exceptional service in an
            atmosphere of refined elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-6">
                <i className={`fas ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href="#"
                className="text-amber-700 hover:text-amber-800 font-medium inline-flex items-center cursor-pointer"
              >
                {feature.link}
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantOverview; 