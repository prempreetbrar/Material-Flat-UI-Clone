import chroma from "chroma-js";
const LEVELS = [-1, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

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

export default function generatePalette(basePalette: {
  paletteName: string;
  id: string;
  emoji: any;
  colors: Array<colorObject>;
}) {
  const newPalette: paletteRange = {
    paletteName: basePalette.paletteName,
    id: basePalette.id,
    emoji: basePalette.emoji,
    colorsPerLevel: {} as paletteRange["colorsPerLevel"],
  };

  for (const level of LEVELS) {
    newPalette.colorsPerLevel[level] = [];
  }

  for (const colorObject of basePalette.colors) {
    const scale = generateAllLevelsForColor(colorObject.hex, 12);
    scale.forEach((color, i) =>
      newPalette.colorsPerLevel[LEVELS[i]].push({
        id: colorObject.name.toLowerCase().replace(/ /g, "-"),
        name: `${colorObject.name} ${LEVELS[i]}`,
        hex: color,
        rgb: chroma(color).css(),
        rgba: chroma(color).css().replace("rgb", "rgba").replace(")", ",1)"),
      })
    );
  }

  return newPalette;
}

function getScaleForColor(hexColor: string) {
  const endColor = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, endColor];
}

function generateAllLevelsForColor(hexColor: string, numberOfColors: number) {
  return chroma
    .scale(getScaleForColor(hexColor))
    .mode("lab")
    .colors(numberOfColors)
    .reverse();
}
