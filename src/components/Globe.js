import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Globe = () => {
  const globeRef = useRef();

  useEffect(() => {
    gsap.to(globeRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return <div ref={globeRef} className="globe">🌍</div>;
};

export default Globe;
