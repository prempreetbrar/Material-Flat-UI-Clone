import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function MiniPalette({ paletteObject }: any) {
  const styles = {
    container: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      borderRadius: "5px",
      padding: "0.5rem",
      overflow: "hidden",
      "&:hover": {
        cursor: "pointer",
      },
      border: "1px solid black",
    },

    title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "black",
      paddingTop: "0.5rem",
      fontSize: "1rem",
    },
  };

  return (
    <>
      <Box sx={styles.container}>
        <Box
          display="flex"
          height="150px"
          width="100%"
          sx={{ backgroundColor: "#dae1e4" }}
          flexWrap="wrap"
          alignItems="flex-start"
          alignContent="flex-start"
          borderRadius="5px"
          overflow="hidden"
        >
          {paletteObject.colors.map((color: any) => (
            <Box
              key={color.id}
              height="25%"
              width="20%"
              sx={{ background: color.hex }}
            ></Box>
          ))}
        </Box>
        <Box sx={styles.title}>
          <h5>
            {paletteObject.paletteName} <span>{paletteObject.emoji}</span>
          </h5>
        </Box>
        <Link to={`/palette/${paletteObject.id}`}>
          {paletteObject.paletteName}
        </Link>
      </Box>
    </>
  );
}
