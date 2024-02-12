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
import CustomTab from "./components/custom-tab";
import Popup from "./components/modal-popup";
import GitHubProfileFinder from "./components/github-profile-finder";
import AutoComplete from "./components/auto-complete";
import TicTacToe from "./components/tic-tac-toe";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  return (
    <div
      className={`flex w-full min-w-[600px] flex-col gap-4 ${theme === "dark" ? "bg-black" : ""}`}
    >
      <h1 className={`${theme==="dark" ? "text-white":""} p-4 text-center text-3xl font-mono `}>React Interview Problems</h1>
      <ScrollIndicator/>
      <Accordian />
      <RandomColor />
      <Rating stars={10} />
      <Slider />
      <LoadData theme = {theme}/>
      <TreeView />
      <QrCodeGenerator theme={theme}/>
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <CustomTab/>
      <Popup theme={theme}/>
      <GitHubProfileFinder/>
      <AutoComplete/>
      <TicTacToe theme={theme}/>

      <div className="h-[500px]"></div>
    </div>
  );
}

export default App;
