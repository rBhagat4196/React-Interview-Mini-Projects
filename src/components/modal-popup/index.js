import React, { useState, useRef } from "react";
import giftBox from "./utils/giftbox.png";
import surpriseBox from "./utils/surprise.png";
import useOutsideClick from "./use-outsideclick-hook";

const Popup = ({ theme }) => {
  const [surprise, setSurprise] = useState(false);
  const [modelOpen, setOpenModel] = useState(false);
  const modalRef = useRef(null);

  const handleSurprise = () => {
    setSurprise(true);
    setTimeout(() => {
      setOpenModel(true);
    }, 1000);
  };

  const handleClaim = () => {
    setSurprise(false);
    setOpenModel(false);
  };


  useOutsideClick(modalRef, handleClaim);

  return (
    <div className="mx-auto w-[500px] ">
      {!surprise && (
        <div onClick={handleSurprise}>
          <img
            alt="gift"
            src={giftBox}
            className="w-80 h-80 mx-auto cursor-pointer"
          />
          <h1 className="absolute mx-[200px] -my-[100px] text-xl cursor-pointer">
            Tap To Open
          </h1>
        </div>
      )}
      {surprise && (
        <img alt="surprise" src={surpriseBox} className="w-80 h-80 mx-auto" />
      )}
      <div>

      {modelOpen && (
         <>
         <div
           className="z-10 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"
         ></div>
         <div
           ref={modalRef} 
           className="z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 flex flex-col gap-2"
           style={{ maxWidth: "80%", width: "auto" }}
         >
           <h2 className="text-2xl font-bold mb-4">Surprise!</h2>
           <p>Here's your surprise...</p>
           <button
             onClick={handleClaim}
             className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
           >
             Claim
           </button>
         </div>
       </>
      )}
      </div>
    </div>
  );
};

export default Popup;
