import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar({ level, handleSlide }: any) {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">Material-Flat-UI-Colors-Clone</a>
      </div>
      <span>Level: {level}</span>
      <div className="slider">
        <Slider
          defaultValue={level}
          min={0}
          max={1000}
          step={100}
          onAfterChange={handleSlide}
        />
      </div>
    </header>
  );
}
