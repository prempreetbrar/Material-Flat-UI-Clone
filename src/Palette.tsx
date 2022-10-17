import { ColorBox } from "./ColorBox";
import "./Palette.css";
import { useState } from "react";
import Navbar from "./Navbar";
import { match } from "assert";
import { useParams } from "react-router-dom";
import generatePalette from "./ColorHelpers";

interface PaletteType {
  colors: Array<string>;
}

export const HEX = "hex";
export const RGB = "rgb";
export const RGBA = "rgba";

export default function Palette({ allPalettes }: any) {
  function handleSlide(event: any) {
    console.log(event);
    setLevel(event);
  }
  const { paletteID } = useParams();
  const colors = generatePalette(
    allPalettes.find(
      (paletteObject: { id: string | undefined }) =>
        paletteObject.id == paletteID
    )
  );
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
      <div className="colors-container">
        {colors.colorsPerLevel[level].map((color: any) => (
          <ColorBox key={color.id} color={color[colorType]} name={color.name} />
        ))}
      </div>
      <footer className="Palette-footer">
        {colors.paletteName}
        <span className="emoji">{colors.emoji}</span>
      </footer>
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
