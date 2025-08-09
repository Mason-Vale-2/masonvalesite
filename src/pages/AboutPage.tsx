import React from 'react';
import { Shield, Award, Clock, Leaf, CheckCircle, Users, MapPin, Phone, Mail, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const commitments = [
    {
      icon: Shield,
      title: 'Health & Safety',
      text: 'Ensuring Compliance with Regulations',
      benefit: 'Your project meets all safety standards and legal requirements'
    },
    {
      icon: Award,
      title: 'Uncompromising Quality', 
      text: 'Premium materials and expert craftsmanship',
      benefit: 'Your investment appreciates in value over time'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      text: 'Reliable project completion on schedule',
      benefit: 'You can plan your life around our dependable timelines'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      text: 'Eco-friendly solutions and renewable technologies',
      benefit: 'Reduce your environmental impact while saving on energy costs'
    },
  ];





  return (
    <div className="min-h-screen bg-luxury-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-white pt-20 relative" style={{ backgroundColor: '#909c98' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4 animate-fade-in-up sticky top-0 z-40">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              About Mason Vale
            </h1>
            <p className="font-sans text-xl text-gold-400 max-w-3xl mx-auto">
              Transforming spaces with precision, passion, and unparalleled craftsmanship
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12 bg-gradient-to-b from-luxury-50 to-luxury-100 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-10 w-40 h-40 border border-gold-200 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gold-100 rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-8">
            <div className="animate-slide-in-left">
              <div className="relative">
                <img 
                  src="/masonvale-website/project-images/47157429-4b23-49de-b9d3-231fd4da56da.JPG"
                  alt="Luxury Renovation Project"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold-500 p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">25+</div>
                    <div className="text-sm text-black">Years Combined</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="font-sans text-lg leading-relaxed text-gray-700 mb-6">
                We specialise in prime renovations and remodelling across a wide spectrum of property types from Period and Luxury homes to Contemporary spaces and Bespoke New Builds. Our strength lies in strategic collaborations with leading brands and a network of highly dedicated, skilled craftspeople, architects, designers, and engineers.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700 mb-6">
                These dedicated, skilled personnel enable us to deliver comprehensive, end-to-end services. In all aspects of construction, including new builds, alterations, extensions, refurbishments, swimming pools, bespoke outdoor creations, plus Smart home technologies and renewable solutions tailored to each client's needs.
              </p>
              
              <p className="font-sans text-lg leading-relaxed text-gray-700">
                From the initial concept and customized planning to final execution, our clients are fully informed and guided through every stage of the project.
              </p>
            </div>
          </div>





          {/* Commitments Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-slide-in-left">
              <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-8">
                Our Commitments
              </h3>
              
              <div className="space-y-6">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <commitment.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-gray-900 mb-2">
                        {commitment.title}
                      </h4>
                      <p className="font-sans text-gray-600 mb-2">
                        {commitment.text}
                      </p>
                      <p className="font-sans text-sm text-gold-600 font-medium">
                        {commitment.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-luxury-300 p-8 rounded-2xl text-gray-900">
                <blockquote className="font-serif text-xl italic text-gray-900 mb-6">
                  "Every detail matters and every project reflects the highest standards of craftsmanship and care."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-gray-900">Mason Vale Team</div>
                    <div className="font-sans text-sm text-gray-600">Dedicated to Excellence</div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 