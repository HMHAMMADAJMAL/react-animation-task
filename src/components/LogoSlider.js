import React from 'react';
import { gsap } from 'gsap';

const logos = [
  { name: "Logo1", src: "../assets/logo.jpg" },
];
const LogoSlider = () => {
  const handleHover = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      duration: 0.3,
    });
  };

  const handleHoverOut = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <div className="logo-slider">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="logo"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          <img src={logo.src} alt={logo.name} width="100" height="50" />
        </div>
      ))}
    </div>
  );
};

export default LogoSlider;
