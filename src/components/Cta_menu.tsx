import React from 'react';
import { Phone, Mail } from 'lucide-react';
import WhatsUpIcon from '/whatsapp.svg';

const phoneNumber = '07463961175';
const whatsappNumber = `44${phoneNumber}`;
const email = 'enquiries@mason-vale.com'; 

interface CtaMenuProps {
  style?: React.CSSProperties;
}

const CtaMenu: React.FC<CtaMenuProps> = ({ style }) => {

  return (
    <div
      className="fixed top-[3vh] right-[0vh] z-[100] max-w-[90vw] mr-[10px] flex flex-row md:flex-col items-center md:items-start justify-center gap-2 md:gap-3 p-2 md:p-3 transition-all duration-300"
      style={{
        ...style,
      }}
    >
      <a
        href={`tel:${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 px-2.5 sm:px-3 md:px-4 py-1.5 md:py-3 text-xs sm:text-sm md:text-lg font-semibold bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg whitespace-nowrap max-h-10"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        <span className="hidden min-[375px]:inline">Call Us</span>
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 px-2.5 sm:px-3 md:px-4 py-1.5 md:py-3 text-xs sm:text-sm md:text-lg font-semibold bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg whitespace-nowrap max-h-10"
      >
        <img src={WhatsUpIcon} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        <span className="hidden min-[375px]:inline">WhatsApp</span>
      </a>

      <a
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 px-2.5 sm:px-3 md:px-4 py-1.5 md:py-3 text-xs sm:text-sm md:text-lg font-semibold bg-gold-500 hover:bg-gold-600 backdrop-blur-md rounded-full transition-colors duration-300 shadow-lg whitespace-nowrap max-h-10"
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        <span className="hidden min-[375px]:inline">Email</span>
      </a>
    </div>
  );
};

export default CtaMenu;