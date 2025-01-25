import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/mobile-screen.css";

const MobileScreen = () => {
  useEffect(() => {
    gsap.to(".mobile-screen", {
      rotation: "5deg",
      yoyo: true,
      repeat: -1,
      duration: 0.5,
    });
  }, []);

  return <div className="mobile-screen"></div>;
};

export default MobileScreen;
