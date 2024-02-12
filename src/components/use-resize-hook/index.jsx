import React, { useLayoutEffect, useState } from "react";

const WindowResize = () => {
  const maxWidth = window.screen.width;
  const maxHeight = window.screen.height;
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  console.log(windowSize);
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-auto">
      <div className="flex flex-col w-[500px] gap-2 ">
        <div className="w-full bg-green-600 rounded-full border-violet-700 border-4">
          <div
            className="h-50 bg-blue-700 text-white flex justify-center items-center text-lg rounded-full p-1 max-w-[100%]"
            style={{ width: `${(windowSize.width / maxWidth) * 100}%` }}
          >
            Width
          </div>
        </div>
        <div className="w-full bg-green-600 rounded-full border-violet-700 border-4">
          <div
            className="h-50 bg-blue-700 text-white flex justify-center items-center text-lg rounded-full p-1 max-w-[100%]"
            style={{ width: `${(windowSize.height / maxHeight) * 100}%` }}
          >
            Height
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowResize;
