import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const LaptopScreen = () => {
  useEffect(() => {
    gsap.to('.laptop-screen', {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className="laptop-container">
      <div className="laptop-screen">
        {/* Your laptop screen content goes here */}
      </div>
    </div>
  );
};

export default LaptopScreen;
