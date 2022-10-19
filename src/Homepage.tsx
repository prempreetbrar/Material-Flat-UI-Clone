import { Box } from "@mui/material";
import { palette } from "@mui/system";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default function Homepage({ allPalettes }: any) {
  const styles = {
    page: {
      backgroundColor: "blue",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      color: "white",
    },
    palettesContainer: {
      /*width: "50%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "row",
      flexWrap: "wrap",*/
      width: "50%",
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%",
    },
  };
  return (
    <Box sx={styles.page}>
      <Box sx={styles.title}>
        <h1>React Colors</h1>
      </Box>
      <Box sx={styles.palettesContainer}>
        {allPalettes.map((paletteObject: any) => (
          <>
            <MiniPalette paletteObject={paletteObject} />
          </>
        ))}
      </Box>
    </Box>
  );
}
