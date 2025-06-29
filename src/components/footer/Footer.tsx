import React from 'react';
import FooterSection from './FooterSection';
import Icon from '../common/Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="About Saveur">
            <p className="text-gray-300 mb-4">
              Experience culinary excellence in an elegant atmosphere. Our passion for food and service creates unforgettable dining moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Icon name="fa-facebook-f" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Icon name="fa-instagram" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Icon name="fa-twitter" />
              </a>
            </div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Menu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Reservations</a></li>
            </ul>
          </FooterSection>

          <FooterSection title="Contact Info">
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Icon name="fa-map-marker-alt" className="mr-2" />
                123 Gourmet Avenue, NY
              </p>
              <p className="flex items-center">
                <Icon name="fa-phone-alt" className="mr-2" />
                +1 (212) 555-1234
              </p>
              <p className="flex items-center">
                <Icon name="fa-envelope" className="mr-2" />
                info@saveur.com
              </p>
            </div>
          </FooterSection>

          <FooterSection title="Hours">
            <div className="space-y-2 text-gray-300">
              <p><strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 11:00 PM</p>
              <p><strong>Sunday:</strong> 10:00 AM - 9:00 PM</p>
            </div>
          </FooterSection>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Saveur Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 