import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import generatePalette from "./ColorHelpers";

function App() {
  const colorPalette = {
    paletteName: "midnight",
    id: "midnight",
    emoji: "thing",
    colors: [
      {
        id: "blue",
        name: "blue",
        hex: "#0000FF",
      },
      {
        id: "red",
        name: "red",
        hex: "#FF0000",
      },
      {
        id: "green",
        name: "green",
        hex: "#008000",
      },
      {
        id: "green",
        name: "green",
        hex: "#008000",
      },
      {
        id: "green",
        name: "green",
        hex: "#008000",
      },
      {
        id: "green",
        name: "green",
        hex: "#008000",
      },
      {
        id: "green",
        name: "green",
        hex: "#008000",
      },
      {
        id: "green",
        name: "green",
        hex: "#008000",
      },
    ],
  };

  console.log(generatePalette(colorPalette));
  return <Palette colors={generatePalette(colorPalette)} />;
}

export default App;
