import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export function ColorBox(props: any) {
  const [isCopied, setIsCopied] = useState(false);
  function handleCopy(event: any) {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }
  console.log(props.color);

  return (
    <CopyToClipboard text={props.color} onCopy={handleCopy}>
      <div style={{ background: props.color }} className="ColorBox">
        <div
          style={{ background: props.color }}
          className={`copy-overlay ${isCopied && "show"}`}
        />
        <div className={`copy-msg ${isCopied && "show"}`}>
          <h1>copied!</h1>
          <p>{props.color}</p>
        </div>
        <button className="copy-button">Copy</button>
        <span className="name">{props.name}</span>
        <span className="see-more">MORE</span>
      </div>
    </CopyToClipboard>
  );
}
