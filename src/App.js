import { useState } from "react";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ToggleTheme from "./components/change-theme";
import Slider from "./components/image-slider";
import LoadData from "./components/load-more";
import QrCodeGenerator from "./components/qr-code";
import RandomColor from "./components/radom-color";
import Rating from "./components/star-rating/Rating";
import TreeView from "./components/tree-view";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  return (
    <div
      className={`flex w-full min-w-[600px] flex-col gap-4 ${theme === "dark" ? "bg-black" : ""}`}
    >
      <ScrollIndicator/>
      <Accordian />
      <RandomColor />
      <Rating stars={10} />
      <Slider />
      <LoadData />
      <TreeView />
      <QrCodeGenerator theme={theme}/>
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <div className="mt-[10px]"></div>
    </div>
  );
}

export default App;
