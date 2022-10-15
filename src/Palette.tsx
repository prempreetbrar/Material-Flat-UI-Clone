import { ColorBox } from "./ColorBox";
import "./Palette.css";
import { useState } from "react";
import Navbar from "./Navbar";

interface PaletteType {
  colors: Array<string>;
}

export default function Palette({ colors }: any) {
  function handleSlide(event: any) {
    console.log(event);
    setLevel(event);
  }
  const [level, setLevel] = useState(500);
  return (
    <div className="Palette">
      <Navbar level={level} handleSlide={handleSlide} />
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
