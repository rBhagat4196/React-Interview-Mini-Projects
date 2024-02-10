import React, { useState } from "react";

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateColor = (type) => {
    if (type === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
      }
      setColor(hexColor);
    } else if (type === "rgb") {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r},${g},${b})`);
    }
    else{

    }
    setType(type);
    console.log(color);
  };

  return (
    <div
      className=" w-[500px] h-[400px] mx-auto mb-[10px]"
      style={{
        background: color,
      }}
    >
      <div className="flex justify-around mt-[50px]">
        <button
          onClick={() => generateColor("hex")}
          className="bg-black/[.7] rounded-md text-white p-2"
        >
          HEX Color
        </button>
        <button
          onClick={() => generateColor("rgb")}
          className="bg-black/[0.7] rounded-md text-white p-2"
        >
          RGB Color
        </button>
        <button
          onClick={() => generateColor(type)}
          className="bg-black/[0.7] rounded-md text-white p-2"
        >
          Random
        </button>
      </div>
      <div className="bg-black/[0.7] rounded-md text-white p-2 flex justify-around w-[200px] mx-auto mt-[100px]">
        <h3>{type === "hex"? "HEX" : "RGB"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
