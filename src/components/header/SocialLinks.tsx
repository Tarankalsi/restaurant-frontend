import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialPlatforms = [
  { icon: <FaFacebookF />, href: 'https://facebook.com' },
  { icon: <FaInstagram />, href: 'https://instagram.com' },
  { icon: <FaTwitter />, href: 'https://twitter.com' },
];

const SocialLinks: React.FC = () => (
  <div className="flex items-center space-x-4">
    {socialPlatforms.map((platform, idx) => (
      <a
        key={idx}
        href={platform.href}
        className="text-gray-600 hover:text-amber-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {platform.icon}
      </a>
    ))}
  </div>
);

export default SocialLinks;