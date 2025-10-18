"use client";

import React, { useEffect, useRef } from 'react';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const initVanta = async () => {
      // Dynamically import Vanta.js to avoid SSR issues
      const VANTA = await import('vanta/dist/vanta.net.min');
      
      if (vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x00bcd4, // Cyan color (#00bcd4)
          backgroundColor: 0x0a0a0a, // Dark background (#0a0a0a)
          points: 10.00, // Reduced for better performance
          maxDistance: 18.00, // Reduced for better performance
          spacing: 16.00,
          showDots: false,
          showLines: true,
          lineWidth: 0.4, // Slightly thinner lines
          // Performance optimizations
          forceAnimate: true,
          backgroundAlpha: 0.0,
          // Additional performance settings
          THREE: window.THREE, // Use global THREE if available
        });
      }
    };

    initVanta();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 w-full h-full z-0"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default VantaBackground;
