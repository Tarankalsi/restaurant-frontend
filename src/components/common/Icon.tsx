import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const classes = `fas ${name} ${sizeClasses[size]} ${className}`;

  return <i className={classes}></i>;
};

export default Icon; 