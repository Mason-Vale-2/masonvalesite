import React from 'react';

interface CtaButtonProps {
  onOpenMenu: () => void;
}

const CtaButton: React.FC<CtaButtonProps> = ({ onOpenMenu }) => {
  return (
    <button
      onClick={onOpenMenu}
      className="fixed top-10 right-10 flex items-center justify-center w-25 h-12 bg-gold-500 hover:bg-gold-600 text-black font-sans font-semibold rounded-full transition-colors duration-300 shadow-lg z-50"
      aria-label="Contact Us"
    >
      <span className="text-sm p-2.5">Contact Us</span>
    </button>
  );
};

export default CtaButton;