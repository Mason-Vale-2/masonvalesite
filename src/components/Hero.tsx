import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-background.png")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto w-full">
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0 animate-fade-in"
          style={{ 
            animationDelay: '0.2s', 
            animationFillMode: 'forwards',
            animationDuration: '1.2s',
            animationTimingFunction: 'ease-out'
          }}
        >
          Creative Design<br />
          &<br />
          <span className="text-gold-500">Build Solutions</span>
        </h1>
        
        <p 
          className="font-sans text-2xl md:text-3xl lg:text-4xl font-light mb-12 opacity-90 max-w-3xl mx-auto opacity-0 animate-fade-in"
          style={{ 
            animationDelay: '0.5s', 
            animationFillMode: 'forwards',
            animationDuration: '1.2s',
            animationTimingFunction: 'ease-out'
          }}
        >
          Tailored Transformations for Luxury Living
        </p>
        
        <button
          onClick={scrollToContact}
          className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-black font-sans font-bold px-12 py-6 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg mb-8 opacity-0 animate-fade-in"
          style={{ 
            animationDelay: '0.8s', 
            animationFillMode: 'forwards',
            animationDuration: '1.2s',
            animationTimingFunction: 'ease-out'
          }}
        >
          <span>Let's Talk</span>
          <svg className="w-8 h-8 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;