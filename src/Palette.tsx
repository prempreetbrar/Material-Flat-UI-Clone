import { ColorBox } from "./ColorBox";
import "./Palette.css";

interface PaletteType {
  colors: Array<string>;
}

export default function Palette({ colors }: PaletteType) {
  return (
    <div className="Palette">
      {colors.map((color) => (
        <ColorBox color={color} name={color} />
      ))}
      <div className="Palette-colors">{/**/}</div>
    </div>
  );
}
