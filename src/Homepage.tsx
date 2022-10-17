import { Link } from "react-router-dom";

export default function Homepage({ allPalettes }: any) {
  console.log(allPalettes);
  return (
    <>
      {allPalettes.map((paletteObject: any) => (
        <Link to={`/palette/${paletteObject.id}`}>
          {paletteObject.paletteName}
        </Link>
      ))}
    </>
  );
}
