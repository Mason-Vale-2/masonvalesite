import React, { useState, useEffect } from 'react';
import { Home, Palette, TreePine, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSlideshow: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Development & Renovations',
      description: 'Comprehensive construction services from concept to completion',
      image: '/Development-Renovations.png',
      details: 'Transform your vision into reality with our full-service construction and renovation expertise.'
    },
    {
      icon: Palette,
      title: 'Tailored Interiors',
      description: 'Bespoke interior design solutions for luxury living spaces',
      image: '/Tailored-Interiors.png',
      details: 'Create stunning interiors that reflect your personal style and enhance your lifestyle.'
    },
    {
      icon: TreePine,
      title: 'Outdoor Lifestyle',
      description: 'Creating stunning outdoor spaces and landscape designs',
      image: '/Outdoor-Lifestyle.png',
      details: 'Design and build exceptional outdoor living spaces that extend your home seamlessly.'
    },
    {
      icon: Zap,
      title: 'Renewable Systems & Smart Technologies',
      description: 'Cutting-edge sustainable and smart home solutions',
      image: '/Smart-tech-Renew.png',
      details: 'Integrate the latest smart home and renewable energy technologies for modern living.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="py-20 lg:py-32 bg-luxury-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Our Services
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Main Slideshow */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
                    <div className="max-w-4xl mx-auto">
                      <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mb-8 mx-auto">
                        <service.icon className="w-10 h-10 text-black" />
                      </div>
                      
                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        {service.title}
                      </h3>
                      
                      <p className="font-sans text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
                        {service.description}
                      </p>
                      
                      <p className="font-sans text-base md:text-lg text-gold-300 max-w-3xl mx-auto">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold-500 scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Service Cards Below */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`bg-luxury-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-gold-500' : ''
              }`}
            >
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-gold-600" />
              </div>
              
              <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h4>
              
              <p className="font-sans text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlideshow;