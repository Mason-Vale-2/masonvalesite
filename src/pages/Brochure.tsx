import React, { useState, useEffect } from 'react';
import { FlipbookViewer } from '@maxvankuik/flipbook-viewer';
import CtaMenu from '../components/Cta_menu';
//import BrochureMenu from '../components/Brochure-menu';

const Brochure: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });
  const [isMounted, setIsMounted] = useState(false);

  const pages = Array.from({ length: 12 }, (_, i) => ({
    imageUrl: `/brochure/brochure-${String(i + 1).padStart(2, '0')}.jpg`, // md need doot /
    width: 1700,
    height: 1700, 
  }));


  const getOptimalDimensions = (screenWidth: number) => {
    if (screenWidth >= 1700) {
      return { width: 1700, height: 1700 };
    }

    const scaleFactor = 1700 / screenWidth; 
    const size = Math.min(2386, 1700 * scaleFactor);
    return { width: size, height: size };
  };

  useEffect(() => {
    setIsMounted(true);


    const recalculateImageSizes = () => {
      const imageDimensions = getOptimalDimensions(dimensions.width);

      pages.forEach((page, index) => {
        pages[index] = {
          ...page,
          width: imageDimensions.width,
          height: imageDimensions.height,
        };
      });
    };

    recalculateImageSizes(); // initial calculation
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      recalculateImageSizes(); // re-calculate on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) {
    return null;
  }


  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#f5f6f5',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >

      <CtaMenu style={{
        position: 'fixed',
        top: '5vh',
        right: '2vh',
        zIndex: 100,
        maxWidth: '90vw',
        marginRight: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }} />

      <FlipbookViewer
        pages={pages}
        enableFullscreen={true}
        enableZoom={true}
        enableKeyboard={true}
        showThumbnails={false}
        style={{
          borderRadius: '4px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          background: '#f5f6f5',
          margin: '20px',
        }}
      />


    </div>
  );
};

export default Brochure;