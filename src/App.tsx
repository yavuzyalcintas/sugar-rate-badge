import { useCallback, useEffect, useRef } from "react";
import SugarRate from "./components/SugarRate";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();

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
        <SugarRate
          sugarRate={+(searchParams.get("sugarRate") || 0)}
          badgeTitle={searchParams.get("badgeTitle") || ""}
          rank={searchParams.get("rank") || ""}
        />
      </div>

      <div>
        <button onClick={downloadSVG}>Download</button>
      </div>
    </>
  );
}

export default App;
