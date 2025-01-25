import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/unlocking-value.css";

const UnlockingValueText = () => {
  useEffect(() => {
    gsap.to(".text-slider", {
      x: "-100%",
      repeat: -1,
      duration: 10,
      ease: "linear",
    });
  }, []);

  return (
    <div className="slider-container">
      <div className="text-slider">UNLOCKING VALUE UNLOCKING VALUE</div>
    </div>
  );
};

export default UnlockingValueText;
