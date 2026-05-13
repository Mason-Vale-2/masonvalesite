import React from 'react';
import { Shield, Award, Clock, Leaf, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-luxury-50 to-luxury-100 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-10 w-40 h-40 border border-gold-200 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gold-100 rotate-45"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-lg leading-relaxed text-gray-700 mb-8">
              We specialise in prime renovations and remodelling across a wide spectrum of property types from Period and Prestige homes to Contemporary spaces and Bespoke New Builds. Our strength lies in strategic collaborations with leading brands and a network of highly dedicated, skilled craftspeople, architects, designers, and engineers.
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-gray-700 mb-8">
              These dedicated, skilled personnel enable us to deliver comprehensive, end-to-end services. In all aspects of construction, including new builds, alterations, extensions, refurbishments, swimming pools, bespoke outdoor creations, plus Smart home technologies and renewable solutions tailored to each client's needs.
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-gray-700">
              From the initial concept and customized planning to final execution, our clients are fully informed and guided through every stage of the project.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
              We are committed to:
            </h3>
            
            <div className="space-y-6 mb-8">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <commitment.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-gray-900">
                      {commitment.title}
                    </h4>
                    <p className="font-sans text-sm text-gray-600">
                      {commitment.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-luxury-300 p-6 rounded-xl text-gray-900">
              <blockquote className="font-serif text-lg italic text-gray-900">
                "Every detail matters and every project reflects the highest standards of craftsmanship and care."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;