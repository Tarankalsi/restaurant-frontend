import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/menu', label: 'Menu' },
    { id: '/about', label: 'About' },
    { id: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.id}
          className={`font-medium hover:text-amber-700 pb-1 transition-all duration-300 ${
            location.pathname === item.id 
              ? 'text-gray-900 border-b-2 border-amber-700' 
              : 'text-gray-600'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation; 