import React, { useState } from 'react';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ContactPage: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Address',
      content: '123 Gourmet Avenue, Downtown District, New York, NY 10001'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Phone',
      content: '+1 (212) 555-1234'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      content: 'info@saveur.com'
    },
    {
      icon: 'fa-clock',
      title: 'Hours',
      content: 'Tuesday - Sunday: 12:00 PM - 10:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Get in touch with us for reservations, inquiries, or to share your dining experience.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`fade-in-left ${isIntersecting ? 'animate' : ''}`}>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`flex items-start space-x-4 fade-in-up ${isIntersecting ? 'animate' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={info.icon} className="text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <Card padding="md" shadow="sm" className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Icon name="fa-map" size="xl" className="mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Gourmet Avenue, NY</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`fade-in-right ${isIntersecting ? 'animate' : ''}`}>
              <Card padding="lg" shadow="lg">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                    <Input
                      type="email"
                      label="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="tel"
                      label="Phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                    <Input
                      label="Subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <Textarea
                    label="Message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    required
                  />

                  <Button variant="primary" size="lg" className="w-full" type="submit">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 