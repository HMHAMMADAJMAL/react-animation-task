import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/music-notes.css";

const MusicNotes = () => {
  useEffect(() => {
    gsap.to(".note", {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      opacity: 1,
      repeat: -1,
      duration: 3,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="notes-container">
      <div className="note">🎵</div>
      <div className="note">🎶</div>
      <div className="note">🎼</div>
    </div>
  );
};

export default MusicNotes;
