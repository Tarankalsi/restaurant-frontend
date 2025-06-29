import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  index?: number;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children, index = 0 }) => {
  return (
    <div className="mb-8 md:mb-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default FooterSection; 