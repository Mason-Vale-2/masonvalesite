import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-luxury-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Let's Talk
          </h2>
          <p className="font-sans text-xl md:text-2xl text-gold-600 font-light">
            Your Vision. Our Expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-sans text-sm text-gray-600 mb-1">Phone</p>
                  <a 
                    href="tel:07515653418"
                    className="font-sans text-lg text-gray-900 hover:text-gold-600 transition-colors duration-300"
                  >
                    07515 653418
                  </a>
                  <br />
                  <a
                    href="tel:07767812992"
                    className="font-sans text-lg text-gray-900 hover:text-gold-600 transition-colors duration-300"
                  >
                    07767812992
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-sans text-sm text-gray-600 mb-1">Email</p>
                  <a 
                    href="mailto:enquiries@mason-vale.com" 
                    className="font-sans text-lg text-gray-900 hover:text-gold-600 transition-colors duration-300"
                  >
                    enquiries@mason-vale.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-sans text-sm text-gray-600 mb-1">Address</p>
                  <p className="font-sans text-lg text-gray-900">
                    167-169 Great Portland Street, <br />
                    London W1W 5PF
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="font-sans text-lg mb-6 text-gray-900">Follow Us</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-luxury-600 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:text-black" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-luxury-600 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-black" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-luxury-600 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex items-center">
            <div className="bg-luxury-200 p-8 rounded-xl w-full text-center">
              <h3 className="font-serif text-3xl font-semibold mb-6 text-gray-900">
                Ready to Start?
              </h3>
              <p className="font-sans text-gray-700 mb-8">
                Let’s discuss your required project today.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:07515653418"
                  className="block bg-gold-500 hover:bg-gold-600 text-black font-sans font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
                >
                  Call Now: 07515653418
                </a>
                
                <a
                  href="mailto:enquiries@mason-vale.com"
                  className="block border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-black font-sans font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;