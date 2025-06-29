import React from 'react';
import { Link } from 'react-router-dom';
import MenuCategory from '../components/menu/MenuCategory';
import Button from '../components/common/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
}

const MenuPage: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroIsIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const { ref: menuRef, isIntersecting: menuIsIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const { ref: buttonRef, isIntersecting: buttonIsIntersecting } = useIntersectionObserver<HTMLDivElement>();

  const appetizers: MenuItem[] = [
    {
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and mozzarella",
      price: "$16",
      isPopular: true,
    },
    {
      name: "Burrata Caprese",
      description: "Fresh burrata with heirloom tomatoes and basil",
      price: "$18",
    },
    {
      name: "Seared Scallops",
      description: "Diver scallops with cauliflower puree and pancetta",
      price: "$24",
    },
  ];

  const mainCourses: MenuItem[] = [
    {
      name: "Wagyu Beef Tenderloin",
      description: "8oz tenderloin with truffle mashed potatoes",
      price: "$68",
      isPopular: true,
    },
    {
      name: "Lobster Thermidor",
      description: "Maine lobster with cognac cream sauce",
      price: "$52",
    },
    {
      name: "Duck Confit",
      description: "Confit duck leg with cherry reduction",
      price: "$42",
    },
  ];

  const desserts: MenuItem[] = [
    {
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla ice cream",
      price: "$14",
      isPopular: true,
    },
    {
      name: "Crème Brûlée",
      description: "Classic vanilla bean crème brûlée",
      price: "$12",
    },
    {
      name: "Tiramisu",
      description: "Traditional Italian tiramisu with coffee",
      price: "$13",
    },
  ];

  const beverages: MenuItem[] = [
    {
      name: "Signature Cocktails",
      description: "House-crafted cocktails with premium spirits",
      price: "$16",
    },
    {
      name: "Wine Selection",
      description: "Curated wine list with sommelier recommendations",
      price: "$12-85",
    },
    {
      name: "Artisan Coffee",
      description: "Freshly brewed coffee and espresso drinks",
      price: "$6",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`bg-amber-700 text-white py-20 transition-all duration-1000 ${
          heroIsIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with the finest ingredients and culinary expertise.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section 
        ref={menuRef}
        className={`py-16 transition-all duration-1000 delay-300 ${
          menuIsIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <MenuCategory title="Appetizers" items={appetizers} />
          <MenuCategory title="Main Courses" items={mainCourses} />
          <MenuCategory title="Desserts" items={desserts} />
          <MenuCategory title="Beverages" items={beverages} />
          
          <div 
            ref={buttonRef}
            className={`text-center mt-12 transition-all duration-1000 delay-500 ${
              buttonIsIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Make a Reservation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage; 