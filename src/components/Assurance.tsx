import React from 'react';
import { 
  Users, 
  MessageCircle, 
  Star, 
  Hammer, 
  Calendar, 
  Shield, 
  Eye,
  CheckCircle,
  Award,
  Clock
} from 'lucide-react';

const Assurance: React.FC = () => {
  const pillars = [
    {
      icon: Users, 
      title: 'Proficiency',
      description: 'Our team is composed of skilled professionals who are passionate about delivering bespoke, high-end services. You\'ll benefit from our deep knowledge and experience, empowering you to make confident well-informed decisions throughout your project. We always intentionally limit the number of construction projects undertaken to ensure consistent progress, continuity through to completion.'
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Clear, consistent communication is the cornerstone of a successful project. We keep you in the loop from start to finish, responding to your questions and feedback promptly with calls returned within a few hours and emails answered by the next working day.'
    },
    {
      icon: Award,
      title: 'Reputation Reliability',
      description: 'As a merged 2025 entity, our company brings together two trusted family businesses with over 28 years of combined experience in construction & specialist renovations. This integration unites decades of hands-on expertise, strong craftsmanship, and a reputation for reliability. Built on trust and favourable relationships, we will deliver dependable services, consistent quality, and innovative solutions across every project.'
    },
    {
      icon: Hammer,
      title: 'Craftsmanship & Project Management',
      description: 'Excellence is how we honour your investment. As high-end full service construction and renovation specialists we set ambitious standards and consistently raise them, crafting tailored, enduring solutions that reflect your vision. We prioritise your time and budget through a streamlined plan. Through proactive management and swift problem-solving, we navigate the dynamic nature of construction to keep your project on track.'
    },
    {
      icon: Eye,
      title: 'Discretion You Can Trust',
      description: 'Due to the private nature of our work, we limit the photographs we share publicly to respect client confidentiality. However, we are happy to present a detailed portfolio during a private face to face consultation.'
    },
    {
      icon: Shield,
      title: 'Peace of Mind',
      description: 'We hold comprehensive Public Liability Insurance, specifically tailored to cover construction projects and specialist renovation works. This ensures protection for our clients, partners, and the public throughout the duration of our projects.'
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-luxury-50 to-luxury-100 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gold-100 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-gold-200 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-r from-gold-100 to-gold-200 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Why Work With Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-luxury-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
            >
              <div className="relative mb-6">
                {pillar.title === 'Craftsmanship & Project Management' ? (
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Hammer className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                )}
              </div>
              
              <div className="relative z-10">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                
                <p className="font-sans text-gray-700 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assurance;