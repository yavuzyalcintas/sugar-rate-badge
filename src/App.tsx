import { useState } from "react";
import SugarRate from "./components/SugarRate";

function App() {
  const [count, setCount] = useState(0);

  return <SugarRate sugarRate={10} badgeTitle={"TEST"} rank="A" />;
}

export default App;
