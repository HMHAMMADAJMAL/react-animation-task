import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/MusicNotes.css"

const MusicNotes = () => {
  useEffect(() => {
    gsap.to(".note", {
      y: "random(-50, 50)", // Moves the notes up and down randomly
      x: "random(-50, 50)", // Moves the notes left and right randomly
      opacity: 1,           // Ensure visibility of the notes
      duration: 3,          // Duration of each animation cycle
      repeat: -1,           // Infinite looping of the animation
      stagger: 0.5,         // Delays the start of each note's animation
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
