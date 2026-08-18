import React from 'react';
import { Phone } from 'lucide-react';
import { Send } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Home } from 'lucide-react';

const phoneNumber = '07515653418';
const whatsappNumber = `340${phoneNumber}`;
const email = 'enquiries@mason-vale.com';
const websiteUrl = '/';


interface CtaMenuProps {
  style?: React.CSSProperties;
}

const CtaMenu: React.FC<CtaMenuProps> = ({ style }) => {
  return (
    <div 
      className="fixed top-4 right-4 z-50 flex flex-row items-center gap-2 md:gap-4 w-fit md:w-auto"
      style={{
        ...style,
      }}
    >
      <a
        href={`tel:${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 md:gap-3 px-2 py-1 md:px-4 md:py-3 text-sm md:text-lg font-semibold bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg whitespace-nowrap"
      >
        <Phone size={32} className="md:size-8" />
        <span className="hidden md:inline">Call Us</span>
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 md:gap-3 px-2 py-1 md:px-4 md:py-3 text-sm md:text-lg font-semibold bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg whitespace-nowrap"
      >
        <Send size={32} className="md:size-8" />
        <span className="hidden md:inline">WhatsApp</span>
      </a>

      <a
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 md:gap-3 px-2 py-1 md:px-4 md:py-3 text-sm md:text-lg font-semibold bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg whitespace-nowrap"
      >
        <Mail size={32} className="md:size-8" />
        <span className="hidden md:inline">Email</span>
      </a>

      <a
        href={`${websiteUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 md:gap-3 px-2 py-1 md:px-4 md:py-3 text-sm md:text-lg font-semibold bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg whitespace-nowrap"
      >
        <Home size={32} className="md:size-8" />
        <span className="hidden md:inline">Visit Site</span>
      </a>
    </div>
  );
};

export default CtaMenu;