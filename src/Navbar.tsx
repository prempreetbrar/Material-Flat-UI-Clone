import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { useEffect, useState } from "react";
import {
  MenuItem,
  Select,
  Snackbar,
  IconButton,
  Button,
  FormControl,
  Tooltip,
} from "@mui/material";
import { HEX, RGB, RGBA } from "./Palette";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import { styled } from "@mui/system";
import Handle from "rc-slider/lib/Handles/Handle";
import { Link } from "react-router-dom";

export default function Navbar({
  level,
  colorType,
  handleColorTypeChange,
  prevColorType,
  handleSlide,
  snackbarShowing,
  setSnackbarShowing,
}: any) {
  function handleSnackbarClose(
    event: React.SyntheticEvent | Event,
    reason?: string
  ) {
    if (reason === "clickaway") {
      return;
    }
    console.log("HELLO");

    setSnackbarShowing(false);
  }

  function handleUndo(event: React.SyntheticEvent | Event, reason?: string) {
    handleColorTypeChange(event, false);
  }

  const snackbarClose = (
    <>
      <Button
        value={prevColorType}
        color="secondary"
        size="small"
        onClick={handleUndo}
      >
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">Material-Flat-UI-Colors-Clone</Link>
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
      <Select
        variant="standard"
        className="dropdown"
        value={colorType}
        onChange={handleColorTypeChange}
      >
        <MenuItem value={HEX}>HEX - #FFFFFFF</MenuItem>
        <MenuItem value={RGB}>RGB - rgb(255, 255, 255)</MenuItem>
        <MenuItem value={RGBA}>RGBA - rgba(255, 255, 255, 1)</MenuItem>
      </Select>
      <Snackbar
        open={snackbarShowing}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={
          <span id="snackbar-message">{`Format changed to ${colorType.toUpperCase()}`}</span>
        }
        ContentProps={{ "aria-describedby": "snackbar-message" }}
        action={snackbarClose}
      />
    </header>
  );
}
