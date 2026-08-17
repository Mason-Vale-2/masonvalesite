import React, { useState, useEffect } from 'react';
import { FlipbookViewer } from '@maxvankuik/flipbook-viewer';

const Brochure: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });
  const [isMounted, setIsMounted] = useState(false);

  const pages = Array.from({ length: 12 }, (_, i) => ({
    imageUrl: `/brochure/brochure-${String(i + 1).padStart(2, '0')}.jpg`,
    width: 1700,
    height: 1700, // значения будут пересчитываться динамически при рендере
  }));

  // Функция расчёта оптимальных размеров изображения в зависимости от ширины экрана
  const getOptimalDimensions = (screenWidth: number) => {
    if (screenWidth >= 1700) {
      return { width: 1700, height: 1700 };
    }
    // При screenWidth < 1700 — плавное увеличение размера до макс. 2386
    const scaleFactor = 1700 / screenWidth; // чем меньше экран, тем больше масштаб
    const size = Math.min(2386, 1700 * scaleFactor);
    return { width: size, height: size };
  };

  useEffect(() => {
    setIsMounted(true);

    // Пересчитываем размеры изображений при изменении размера окна
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

  const isMobile = dimensions.width < 768;
  const paddingX = isMobile ? 4 : 20;
  const paddingY = isMobile ? 4 : 16;

  return (
    <div
      style={{
        // width: '100vw',
        // height: '100vh',
        background: '#f5f6f5',
        padding: `${paddingY}px ${paddingX}px`,
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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