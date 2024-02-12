import { useRef, useState } from "react";
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
import WindowResize from "./components/use-resize-hook";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const bottomRef = useRef(null);
  const handleScrollToTop = ()=>{
    window.scrollTo({
      top : 0,
      left : 0,
      behavior : "smooth"
    })
  }
  const handleScrollToBottom =()=>{
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div
      className={`flex w-full min-w-[600px] flex-col gap-4 ${
        theme === "dark" ? "bg-black" : ""
      }`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-white" : ""
        } p-4 text-center text-3xl font-mono cursor-pointer `}
        onClick={handleScrollToBottom}
      >
        React Interview Problems
      </h1>
      <ScrollIndicator />
      <Accordian />
      <RandomColor />
      <Rating stars={10} />
      <Slider />
      <LoadData theme={theme} />
      <TreeView />
      <QrCodeGenerator theme={theme} />
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <CustomTab />
      <Popup theme={theme} />
      <GitHubProfileFinder />
      <AutoComplete />
      <TicTacToe theme={theme} />
      <WindowResize />
      <div className="mx-auto">
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-blue-600 focus:outline-none" onClick={handleScrollToTop}>
          Scorll to Top
        </button>
      </div>
      <div ref={bottomRef} className="h-[50px]"></div>
    </div>
  );
}

export default App;
