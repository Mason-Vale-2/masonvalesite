import React from 'react';
import { publicAsset } from '../utils/assets';
import { Home, Palette, TreePine, Zap, CheckCircle, Star, Award } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Development & Renovations',
      description: 'Comprehensive construction services from concept to completion',
              image: publicAsset('Development-Renovations.png'),
      features: [
        'New builds',
        'Contemporary extensions',
        'Loft conversions',
        'Period Property restorations',
        'Full property refurbs',
        'Kitchens, bathrooms & bedroom renovations'
      ],
      process: `Our work is grounded in close partnerships with respected architects and structural engineers, ensuring that every project benefits from a unified vision and technical excellence. We take pride in managing all build & renovation processes with efficiency, foresight, and a focus on the details that truly matter. Where we see opportunities for improvement, we're not afraid to challenge convention to deliver the best result for the client.

Our expertise spans both traditional and contemporary construction methods from restoring period buildings to construction of modern living spaces designing and assembling precision-made components crafted off-site. This ability to combine craftsmanship with innovation allows us to deliver projects that are both technically outstanding and rich in character.

We have delivered complete construction from substructure to superstructure, full restoration/renovations, and extensions, working with defined materials.`
    },
    {
      icon: Palette,
      title: 'Tailored Interiors',
      description: 'Bespoke interior design solutions for luxury living spaces',
              image: publicAsset('Tailored-Interiors.png'),
      features: [
        'Luxury Interior Design',
        'Custom Furniture & Joinery',
        'High-End Material Selection',
        'Lighting Design & Installation',
        'Bespoke joinery',
      ],
      process: `Each space is tailored to the client's vision, combining off-the-shelf solutions with bespoke elements to optimise both form and function. We also occasionally blend modern materials with reclaimed features to create interiors rich in character and individuality.

Working closely with designers and architects, we bring refined, practical spaces to life with an unwavering focus on detail. Our in-house craftsmen including carpenters, tilers, and decorators collaborate with trusted specialists when needed to deliver the highest standards.

Our portfolio includes kitchens, bathrooms, living spaces, studies, and bedrooms, each reflecting a thoughtful approach to materials, finishes, and craftsmanship.`
    },
    {
      icon: TreePine,
      title: 'Outdoor Lifestyle',
      description: 'Creating stunning outdoor spaces and landscape designs',
              image: publicAsset('Outdoor-Lifestyle.png'),
      features: [
        'Luxury Swimming Pool Design',
        'Outdoor Kitchen & Dining Areas',
        'Landscape design',
        'Garden Design & Planting',
        'Outdoor lighting solutions',
        'Water Features & Fountains',
        'Pergolas & electric awnings',
        'Outdoor bespoke structures'
      ],
      process: `We design and craft exceptional outdoor living spaces that combine elegant landscaping, ambient garden lighting, and serene water features with beautifully integrated swimming pools. Every element from layout to finishing touches like custom barbecue islands is thoughtfully considered to elevate outdoor luxury.`
    },
    {
      icon: Zap,
      title: 'Renewable Systems & Smart Technologies',
      description: 'Cutting-edge sustainable and smart home solutions',
      image: publicAsset('Smart-tech-Renew.png'),
      features: [
        'Solar Panel Installation',
        'Smart Home Automation',
        'Heat Pump Systems',
        'Smart Security & CCTV',
        'Integrated Audio/Visual',
        'Climate Control Systems'
      ],
      process: `Homes today are making the most of smart and sustainable technology to boost comfort, improve security, and reduce environmental impact. To get the best results, it's important to plan and integrate these systems right from the start of a project.

These varied technologies require specialist installation processes, we have collaborative resources and experienced specialist skill sets to bring everything together so it all engages at the right time, with all the prep work done to keep the project running smoothly.

We provide a wide range of modern systems for homes from heating, cooling, and ventilation solutions like Heat Pumps, Air Conditioning, to smart electrical features such as Automated Lighting, Home Control Systems, and Integrated Data Networks reaching to the levels of fully immersive high end experiences in beautifully designed Home Cinemas.`
    }
  ];

  return (
    <div className="min-h-screen w-full bg-luxury-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-white pt-20 relative" style={{ backgroundColor: '#909c98' }}>
        <div className="max-w-7xl mx-auto px-6 text-center sticky top-0 z-40">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up">
            Our Services
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gold-400 font-light max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive luxury construction and renovation services tailored to your vision
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-luxury-50' : 'bg-luxury-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-left`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[422px] lg:h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-6 left-6 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-slide-in-right`}>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                
                <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                    What We Offer
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                        <span className="font-sans text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                    Our Approach
                  </h3>
                  <div className="space-y-4">
                    <p className="font-sans text-gray-700 leading-relaxed whitespace-pre-line">
                      {service.process}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-luxury-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 animate-fade-in-up">
            Why Choose Mason Vale
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">28+ Years Experience</h3>
              <p className="font-sans text-gray-300">
                Combined expertise from two trusted family businesses with a proven track record.
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Premium Quality</h3>
              <p className="font-sans text-gray-300">
                Uncompromising standards and attention to detail in every project we undertake.
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Complete Service</h3>
              <p className="font-sans text-gray-300">
                End-to-end solutions from initial concept to final execution and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;