import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { forceScrollToTop } from '../utils/navigation';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Aggressive navigation function that forces scroll to top
  const handleNavigation = (path: string) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
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
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(139, 150, 145, 0.5)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="/Screenshot_2025-08-04_at_02.49.14-removebg-preview.png" 
              alt="Mason Vale" 
              className="h-20 w-auto object-contain"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
                               <button 
                     onClick={() => handleNavigation('/')}
                     className="font-sans text-gray-200 hover:text-gold-400 transition-colors duration-300"
                   >
                     Home
                   </button>
                   <button 
                     onClick={() => handleNavigation('/about')}
                     className="font-sans text-gray-200 hover:text-gold-400 transition-colors duration-300"
                   >
                     About
                   </button>
                   <button 
                     onClick={() => handleNavigation('/services')}
                     className="font-sans text-gray-200 hover:text-gold-400 transition-colors duration-300"
                   >
                     Services
                   </button>
                   <button 
                     onClick={() => handleNavigation('/contact')}
                     className="font-sans text-gray-200 hover:text-gold-400 transition-colors duration-300"
                   >
                     Contact
                   </button>
            <a 
              href="tel:07767812992"
              className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-black font-sans font-semibold px-4 py-2 rounded-full transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
                           <button
                   onClick={toggleMenu}
                   className="md:hidden text-gray-200 hover:text-gold-400 transition-colors duration-300"
                 >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

                       {/* Mobile Menu */}
               {isMenuOpen && (
                 <div className="md:hidden py-6 border-t" style={{ backgroundColor: 'rgba(139, 150, 145, 0.5)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="flex flex-col space-y-4">
                                   <button 
                       onClick={() => handleNavigation('/')}
                       className="font-sans text-gray-200 hover:text-gold-400 transition-colors duration-300 px-4 py-2 text-left"
                     >
                       Home
                     </button>
                     <button 
                       onClick={() => handleNavigation('/about')}
                       className="font-sans text-gray-200 hover:text-gold-400 transition-colors duration-300 px-4 py-2 text-left"
                     >
                       About
                     </button>
                     <button 
                       onClick={() => handleNavigation('/services')}
                       className="font-sans text-gray-200 hover:text-gold-400 transition-colors duration-300 px-4 py-2 text-left"
                     >
                       Services
                     </button>
                     <button 
                       onClick={() => handleNavigation('/contact')}
                       className="font-sans text-gray-200 hover:text-gold-400 transition-colors duration-300 px-4 py-2 text-left"
                     >
                       Contact
                     </button>
              <a 
                href="tel:07767812992"
                className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-black font-sans font-semibold px-4 py-2 rounded-full transition-colors duration-300 mx-4 w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;