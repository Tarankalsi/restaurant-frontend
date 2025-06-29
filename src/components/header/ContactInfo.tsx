import React from 'react';
import Icon from '../common/Icon';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 text-sm text-gray-600">
      <div className="flex items-center hover:text-amber-700">
        <Icon name="fa-map-marker-alt" className="mr-2 text-amber-700" />
        <span>123 Gourmet Avenue, NY</span>
      </div>
      <div className="flex items-center hover:text-amber-700">
        <Icon name="fa-phone-alt" className="mr-2 text-amber-700" />
        <span>+1 (212) 555-1234</span>
      </div>
    </div>
  );
};

export default ContactInfo; 