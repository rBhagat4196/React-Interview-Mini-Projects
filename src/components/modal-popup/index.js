import React, { useState } from "react";
import giftBox from "./utils/giftbox.png";
import surpriseBox from "./utils/surprise.png";
const Popup = ({theme}) => {
  const [surprise, setSurprise] = useState(false);
  const [modelOpen, setOpenModel] = useState(false);
  const handleSurprise = () => {
    setSurprise(true);
    setTimeout(() => {
      setOpenModel(true);
    }, 1000);
  };

  const handleClaim = ()=>{
    setSurprise(false)
    setOpenModel(false)
  }
  return (
    <div className="mx-auto w-[500px] ">
      {!surprise && (
        <img
          alt="gift"
          src={giftBox}
          onClick={handleSurprise}
          className="w-80 h-80 mx-auto"
        />
      )}
      {surprise && (
        <img alt="surprise" src={surpriseBox} className="w-80 h-80 mx-auto" />
      )}
      {modelOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50  backdrop-blur-md">
          <div className={`${theme==="dark"?"bg-gray-700 text-white":"bg-white"} rounded-lg p-8 flex flex-col gap-2`}>
            <h2 className="text-2xl font-bold mb-4">Surprise!</h2>
            <p>Here's your surprise...</p>
            <button
              onClick={handleClaim}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none "
            >
              Claim
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
