import React, { useState } from "react";
import "./ImageSlider.css"; // Import du CSS
import accueilImage from "../videos/accueil.png"; // Import de l'image

const animations = ["zoom-in", "zoom-out", "fade-in", "fade-out", "rotate", "flip", "shake", "blur", "slide-left", "slide-right"];

const ImageSlider = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  const nextAnimation = () => {
    setAnimationIndex((prev) => (prev + 1) % animations.length);
  };

  const prevAnimation = () => {
    setAnimationIndex((prev) => (prev - 1 + animations.length) % animations.length);
  };

  return (
    <div className="image-slider">
      <div className={`image-container ${animations[animationIndex]}`}>
        <img src={accueilImage} alt="Accueil" /> {/* Utilisation de l'image */}
      </div>
      <button className="arrow left" onClick={prevAnimation}>⬅️</button>
      <button className="arrow right" onClick={nextAnimation}>➡️</button>
    </div>
  );
};

export default ImageSlider;
