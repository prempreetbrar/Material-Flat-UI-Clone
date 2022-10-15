import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";

function App() {
  const colors = [
    "blue",
    "red",
    "green",
    "magenta",
    "brown",
    "black",
    "pink",
    "yellow",
  ];
  return <Palette colors={colors} />;
}

export default App;
