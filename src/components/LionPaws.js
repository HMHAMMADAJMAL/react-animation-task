import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const LionPaws = () => {
  useEffect(() => {
    gsap.to('.lion-paws', {
      x: '100%',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div className="lion-paws-container">
      <div className="lion-paws">🐾</div>
    </div>
  );
};

export default LionPaws;
