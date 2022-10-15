import { ColorBox } from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

interface PaletteType {
  colors: Array<string>;
}

export default function Palette({ colors }: any) {
  const [level, setLevel] = useState(500);
  function handleSlide(event: any) {
    setLevel(event);
  }

  return (
    <div className="Palette">
      <Slider
        range
        value={level}
        min={100}
        max={1000}
        step={100}
        onAfterChange={handleSlide}
      />
      {colors.colorsPerLevel[level].map((color: any) => (
        <ColorBox color={color.hex} name={color.name} />
      ))}
      <div className="Palette-colors">{/**/}</div>
    </div>
  );
}

interface colorObject {
  id: string;
  name: string;
  hex: string;
}

interface detailedColorObject extends colorObject {
  rgb: string;
  rgba: string;
}

interface paletteRange {
  paletteName: string;
  id: string;
  emoji: any;
  colorsPerLevel: { [key: number]: Array<detailedColorObject> };
}
