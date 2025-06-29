import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './header/ContactInfo';
import SocialLinks from './header/SocialLinks';
import Navigation from './header/Navigation';
import Button from './common/Button';
import Icon from './common/Icon';

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
          
          <div className="hidden md:block">
            <Navigation />
          </div>
          
          <Link to="/contact" className="hidden md:block">
            <Button variant="primary" size="md">
              Reserve Table
            </Button>
          </Link>
          
          <button
            className="md:hidden text-gray-600 hover:text-amber-700"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open navigation menu"
          >
            <Icon name="fa-bars" size="xl" />
          </button>
        </div>
      </div>
      {/* Mobile Nav Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col">
          <div className="bg-white shadow-lg p-6 flex flex-col gap-6 w-4/5 max-w-xs h-full">
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-serif font-bold text-amber-800">SAVEUR</span>
              <button
                onClick={() => setMobileNavOpen(false)}
                className="text-gray-600 hover:text-amber-700"
                aria-label="Close navigation menu"
              >
                <Icon name="fa-times" size="xl" />
              </button>
            </div>
            <Navigation />
            <Link to="/contact" onClick={() => setMobileNavOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                Reserve Table
              </Button>
            </Link>
            <div className="mt-auto pt-8">
              <SocialLinks />
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMobileNavOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;