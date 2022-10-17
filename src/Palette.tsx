import { ColorBox } from "./ColorBox";
import "./Palette.css";
import { useState } from "react";
import Navbar from "./Navbar";
import { match } from "assert";

interface PaletteType {
  colors: Array<string>;
}

export const HEX = "hex";
export const RGB = "rgb";
export const RGBA = "rgba";

export default function Palette({ colors }: any) {
  function handleSlide(event: any) {
    console.log(event);
    setLevel(event);
  }
  const [level, setLevel] = useState(500);
  const [colorType, setColorType] = useState(HEX);
  const [prevColorType, setPrevColorType] = useState(HEX);
  const [snackbarShowing, setSnackbarShowing] = useState(false);

  function handleColorTypeChange(event: any, showSnackbar = true) {
    setPrevColorType(colorType);
    setColorType(event.target.value);
    setSnackbarShowing(showSnackbar);
  }

  return (
    <div className="Palette">
      <Navbar
        level={level}
        handleSlide={handleSlide}
        prevColorType={prevColorType}
        colorType={colorType}
        handleColorTypeChange={handleColorTypeChange}
        snackbarShowing={snackbarShowing}
        setSnackbarShowing={setSnackbarShowing}
      />
      {colors.colorsPerLevel[level].map((color: any) => (
        <ColorBox color={color[colorType]} name={color.name} />
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
