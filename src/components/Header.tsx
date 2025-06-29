import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './header/ContactInfo';
import SocialLinks from './header/SocialLinks';
import Navigation from './header/Navigation';
import Button from './common/Button';
import Icon from './common/Icon';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <ContactInfo />
          
          <div className="flex items-center space-x-6">
            {/* <div className="relative">
              <button className="text-sm text-gray-600 flex items-center hover:text-amber-700">
                <span>English</span>
                <Icon name="fa-chevron-down" className="ml-1 text-xs" />
              </button>
            </div> */}
            
            <SocialLinks />
            
            {/* <div className="flex items-center">
              <a href="#" className="text-gray-600 hover:text-amber-700">
                <Icon name="fa-user" className="mr-1" />
                <span className="text-sm">Sign In</span>
              </a>
            </div> */}
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-serif font-bold text-amber-800 hover:text-amber-900 cursor-pointer"
            >
              SAVEUR
            </Link>
          </div>
          
          <Navigation />
          
          <Link to="/contact">
            <Button variant="primary" size="md">
              Reserve Table
            </Button>
          </Link>
          
          <button className="md:hidden text-gray-600 hover:text-amber-700">
            <Icon name="fa-bars" size="xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 