import React from "react";

const Brochure: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-50">
      <section className="py-20 lg:py-32 text-white pt-20 relative" style={{ backgroundColor: '#909c98' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4 animate-fade-in-up sticky top-0 z-40">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Brochure
            </h1>
            <p className="font-sans text-xl text-gold-400 max-w-3xl mx-auto">
              Explore our services and offerings in detail
            </p>
          </div>
        </div>
      </section>
    </div>
      )
    };

export default Brochure;