import React from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Icon from '../components/common/Icon';

const AboutPage: React.FC = () => {
  const { ref: heroRef, isIntersecting: heroIsIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const { ref: storyRef, isIntersecting: storyIsIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const { ref: teamRef, isIntersecting: teamIsIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const { ref: valuesRef, isIntersecting: valuesIsIntersecting } = useIntersectionObserver<HTMLDivElement>();

  const teamMembers = [
    {
      name: "Chef Antoine Dubois",
      role: "Executive Chef",
      description: "Award-winning chef with 20+ years of culinary excellence",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marie Laurent",
      role: "Pastry Chef",
      description: "Master of French pastries and desserts",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Pierre Moreau",
      role: "Sommelier",
      description: "Expert wine pairing and cellar management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: "fa-leaf",
      title: "Sustainability",
      description: "We source local, organic ingredients and practice eco-friendly operations."
    },
    {
      icon: "fa-heart",
      title: "Passion",
      description: "Every dish is crafted with love and attention to detail."
    },
    {
      icon: "fa-star",
      title: "Excellence",
      description: "We strive for perfection in every aspect of our service."
    },
    {
      icon: "fa-users",
      title: "Community",
      description: "Building lasting relationships with our guests and suppliers."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`bg-gradient-to-r from-amber-700 to-amber-800 text-white py-20 transition-all duration-1000 ${
          heroIsIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A culinary journey that began with a simple dream: to create extraordinary dining experiences that touch the soul.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className={`py-16 transition-all duration-1000 delay-300 ${
          storyIsIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, SAVEUR has been at the forefront of culinary innovation, 
                combining traditional French techniques with modern creativity. Our journey 
                began in a small kitchen with big dreams, and today we continue to push 
                the boundaries of fine dining.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every dish tells a story - from the carefully selected ingredients to the 
                final presentation. We believe that dining is not just about eating; it's 
                about creating memories that last a lifetime.
              </p>
              <Link to="/menu">
                <Button variant="primary" size="lg">
                  Explore Our Menu
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" 
                alt="Restaurant Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section 
        ref={teamRef}
        className={`py-16 bg-gray-50 transition-all duration-1000 delay-500 ${
          teamIsIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of culinary professionals brings years of experience 
              and creativity to every dish we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} padding="lg" shadow="md" className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        ref={valuesRef}
        className={`py-16 transition-all duration-1000 delay-700 ${
          valuesIsIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from kitchen to table.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} padding="lg" shadow="sm" className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} className="text-2xl text-amber-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 