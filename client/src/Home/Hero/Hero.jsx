import React from "react";
import "./Hero.css";

import BG from "../../Assets/Hero/Hero-BG.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <video className="hero-video" playsInline autoPlay loop muted>
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div> {/* Ensure this is present */}
      <div className="hero-content">
        <h1 className="hero-title">
        Creation Is An Addicition
        </h1>
        <p className="tagline"></p>
      </div>
    </div>
  );
};

export default HeroSection;