import React from 'react';
import Icon from '../common/Icon';
import Card from '../common/Card';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
  isIntersecting?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  index = 0,
  isIntersecting = false 
}) => {
  return (
    <Card 
      padding="lg" 
      shadow="sm" 
      className={`text-center fade-in-up ${isIntersecting ? 'animate' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={icon} size="xl" className="text-amber-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default FeatureCard; 