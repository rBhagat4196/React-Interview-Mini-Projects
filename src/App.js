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
import { IoOpen } from "react-icons/io5";

import { questions } from "./utils/questions";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';

  const bottomRef = useRef(null);

  const AccordianRef = useRef(null);
  const ColorGeneratorRef = useRef(null);
  const RatingSystemRef = useRef(null);
  const ImageCarouselRef = useRef(null);
  const DataFetchingRef = useRef(null);
  const NestedTreeViewRef = useRef(null);
  const QRGeneratorRef = useRef(null);
  const ThemeToggleRef = useRef(null);
  const CustomTabsRef = useRef(null);
  const PopupRef = useRef(null);
  const GitHubRef = useRef(null);
  const AutocompleteRef = useRef(null);
  const TicTacToeRef = useRef(null);
  const WindowResizeRef = useRef(null);

  const Refs = {
    "AccordianRef": AccordianRef,
    "ColorGeneratorRef": ColorGeneratorRef,
    "RatingSystemRef": RatingSystemRef,
    "ImageCarouselRef": ImageCarouselRef,
    "DataFetchingRef": DataFetchingRef,
    "NestedTreeViewRef": NestedTreeViewRef,
    "QRGeneratorRef": QRGeneratorRef,
    "ThemeToggleRef": ThemeToggleRef,
    "CustomTabsRef": CustomTabsRef,
    "PopupRef": PopupRef,
    "GitHubRef": GitHubRef,
    "AutocompleteRef": AutocompleteRef,
    "TicTacToeRef": TicTacToeRef,
    "WindowResizeRef": WindowResizeRef
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToComponent = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`flex w-full min-w-[600px] flex-col gap-4 ${theme === "dark" ? "bg-black" : ""}`}>
      <h1
        className={`text-3xl font-bold p-4 text-center cursor-pointer ${theme === "dark" ? "text-white" : ""}`}
        onClick={() => handleScrollToComponent(bottomRef)}
      >
        React Interview Problems
      </h1>
      <div className="question-list max-w-md mx-auto mt-8">
        <h2 className={`text-3xl font-semibold mb-4 ${textColor}`}>List of Questions:</h2>
        <ul className="divide-y divide-gray-200 flex flex-col gap-2">
          {questions.map((question, index) => (
            <li key={index} className={`py-4 text-white flex gap-8 bg-[#528CA2] p-3 rounded-3xl`}>
              <span className="flex items-center justify-center">({index+1})</span>
              <p className="text-justify">{question.question}</p>
              <IoOpen className="w-8 h-8 shrink-0 mt-6 cursor-pointer" onClick={() => handleScrollToComponent(Refs[question.title])} />
            </li>
          ))}
        </ul>
      </div>

      <ScrollIndicator />
      <div ref={AccordianRef}><Accordian /></div>
      <div ref={ColorGeneratorRef}><RandomColor /></div>
      <div ref={RatingSystemRef}><Rating stars={10} /></div>
      <div ref={ImageCarouselRef} className="mx-auto"><Slider /></div>
      <div ref={DataFetchingRef}><LoadData theme={theme} /></div>
      <div ref={NestedTreeViewRef}><TreeView /></div>
      <div ref={QRGeneratorRef}><QrCodeGenerator theme={theme} /></div>
      <div ref={ThemeToggleRef}><ToggleTheme theme={theme} setTheme={setTheme} /></div>
      <div ref={CustomTabsRef}><CustomTab /></div>
      <div ref={PopupRef}><Popup theme={theme} /></div>
      <div ref={GitHubRef}><GitHubProfileFinder /></div>
      <div ref={AutocompleteRef}><AutoComplete /></div>
      <div ref={TicTacToeRef}><TicTacToe theme={theme} /></div>
      <div ref={WindowResizeRef} className="mx-auto"><WindowResize /></div>
      <div className="mx-auto">
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-blue-600 focus:outline-none" onClick={handleScrollToTop}>
          Scroll to Top
        </button>
      </div>
      <div ref={bottomRef} className="h-[50px]"></div>
    </div>
  );
}

export default App;
