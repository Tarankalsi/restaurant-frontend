import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Card from '../common/Card';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items }) => {
  const { ref: categoryRef, isIntersecting: categoryIsIntersecting } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div 
      ref={categoryRef}
      className={`mb-12 transition-all duration-1000 ${
        categoryIsIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card 
            key={index} 
            padding="md" 
            shadow="sm" 
            className={`text-center transition-all duration-500 ${
              categoryIsIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {item.isPopular && (
              <div className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                Popular
              </div>
            )}
            <h4 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h4>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <p className="text-amber-700 font-bold">{item.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory; 