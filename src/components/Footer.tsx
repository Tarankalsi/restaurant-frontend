import React from 'react';
import FooterSection from './footer/FooterSection';
import Icon from './common/Icon';
import Input from './common/Input';
import Button from './common/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <FooterSection title="SAVEUR" index={0}>
            <p className="text-gray-400 mb-6">
              A culinary destination where exceptional food, impeccable
              service, and elegant ambiance create unforgettable dining
              experiences.
            </p>
            <div className="flex space-x-4">
              {['fa-facebook-f', 'fa-instagram', 'fa-twitter', 'fa-pinterest-p'].map((icon, index) => (
                <a
                  key={icon}
                  href="#"
                  className="bg-gray-800 hover:bg-amber-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </FooterSection>

          <FooterSection title="Contact" index={1}>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start hover:text-white transition-colors duration-300">
                <Icon name="fa-map-marker-alt" className="mt-1 mr-3 text-amber-500" />
                <span>
                  123 Gourmet Avenue, Downtown District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center hover:text-white transition-colors duration-300">
                <Icon name="fa-phone-alt" className="mr-3 text-amber-500" />
                <span>+1 (212) 555-1234</span>
              </li>
              <li className="flex items-center hover:text-white transition-colors duration-300">
                <Icon name="fa-envelope" className="mr-3 text-amber-500" />
                <span>info@saveur.com</span>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Opening Hours" index={2}>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between hover:text-white transition-colors duration-300">
                <span>Monday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between hover:text-white transition-colors duration-300">
                <span>Tuesday - Friday</span>
                <span>12:00 - 22:30</span>
              </li>
              <li className="flex justify-between hover:text-white transition-colors duration-300">
                <span>Saturday</span>
                <span>12:00 - 23:30</span>
              </li>
              <li className="flex justify-between hover:text-white transition-colors duration-300">
                <span>Sunday</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Newsletter" index={3}>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on special events,
              seasonal menus, and exclusive offers.
            </p>
            <form className="flex mb-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full border-none"
              />
              <Button
                variant="primary"
                size="sm"
                className="rounded-l-none"
              >
                <Icon name="fa-paper-plane" />
              </Button>
            </form>
            <div className="flex space-x-3">
              {['fa-cc-visa', 'fa-cc-mastercard', 'fa-cc-amex', 'fa-cc-paypal'].map((icon, index) => (
                <Icon key={icon} name={icon} size="xl" className="text-gray-400" />
              ))}
            </div>
          </FooterSection>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Saveur Restaurant. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, index) => (
                <a key={policy} href="#" className="hover:text-amber-500 cursor-pointer transition-colors duration-300">
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 