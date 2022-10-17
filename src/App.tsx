import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import generatePalette from "./ColorHelpers";
import { Route, Routes } from "react-router";
import Homepage from "./Homepage";

function App() {
  const allPalettes = [
    {
      paletteName: "indian",
      id: "indian",
      emoji: "Canada",
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
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage allPalettes={allPalettes} />} />
        <Route
          path="/palette/:paletteID"
          element={<Palette allPalettes={allPalettes} />}
        />
      </Routes>
    </>
  );
}

export default App;
