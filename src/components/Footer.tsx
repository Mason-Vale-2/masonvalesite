import React from 'react';
import { useNavigate } from 'react-router-dom';
import { forceScrollToTop } from '../utils/navigation';
import { publicAsset } from '../utils/assets';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  // Aggressive navigation function that forces scroll to top
  const handleNavigation = (path: string) => {
    // Force scroll to top immediately
    forceScrollToTop();
    
    // Navigate to the path
    navigate(path);
    
    // Force scroll to top again after navigation
    setTimeout(() => {
      forceScrollToTop();
    }, 0);
    
    setTimeout(() => {
      forceScrollToTop();
    }, 50);
    
    setTimeout(() => {
      forceScrollToTop();
    }, 100);
  };

  return (
            <footer className="text-gray-200 py-12 border-t backdrop-blur-sm" style={{ backgroundColor: '#909c98', borderColor: '#6A7470' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <img 
                src={publicAsset('Screenshot_2025-08-04_at_02.49.14-removebg-preview.png')} 
                alt="Mason Vale" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex flex-wrap space-x-6">
                                 <button 
                     onClick={() => handleNavigation('/')}
                     className="font-sans text-gray-300 hover:text-gold-400 transition-colors duration-300"
                   >
                     Home
                   </button>
                   <button 
                     onClick={() => handleNavigation('/services')}
                     className="font-sans text-gray-300 hover:text-gold-400 transition-colors duration-300"
                   >
                     Services
                   </button>
                   <button 
                     onClick={() => handleNavigation('/contact')}
                     className="font-sans text-gray-300 hover:text-gold-400 transition-colors duration-300"
                   >
                     Contact
                   </button>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-sans text-gray-300 mb-2">
              Copyright © 2025 Mason Vale. All rights reserved.
            </p>
            <p className="font-sans text-gray-300 text-sm">
              Jake Amrit - Client Director
            </p>
            <p className="font-sans text-gray-300 text-sm mt-1">
              Dave Warah - Technical Director
            </p>
            <p className="font-sans text-gray-300 text-sm mt-1">
              Rosario Russo - Head of Architecture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;