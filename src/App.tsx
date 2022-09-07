import { useCallback, useEffect, useRef, useState } from "react";
import SugarRate from "./components/SugarRate";

// @ts-ignore
function coonvertBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = objectUrl;
  //link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}

function App() {
  const [count, setCount] = useState(0);

  const svgRef = useRef<any>();

  useEffect(() => {
    // @ts-ignore
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    coonvertBlob(blob, `myimage.svg`);
  }, []);

  const downloadSVG = useCallback(() => {
    // @ts-ignore
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    coonvertBlob(blob, `myimage.svg`);
  }, []);

  return (
    <>
      <div ref={svgRef}>
        <SugarRate sugarRate={10} badgeTitle={"TEST"} rank="A" />
      </div>

      <div>
        <button onClick={downloadSVG}>Download</button>
      </div>
    </>
  );
}

export default App;
