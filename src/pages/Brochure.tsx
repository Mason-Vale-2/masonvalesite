import React, { useState, useEffect } from 'react';
import FlipBook from '../components/Book';
import CtaMenu from '../components/Cta_menu';
//import BrochureMenu from '../components/Brochure-menu';

const Brochure: React.FC = () => {

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

      <FlipBook />


    </div>
  );
};

export default Brochure;