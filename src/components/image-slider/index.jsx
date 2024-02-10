/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { images } from "./data";

const Slider = () => {
  
  const [index, setIndex] = useState(0);

  const handleChange = (by) => {
    let len = images.length;
    const newIndex = (index + by + len) % len;
    setIndex(newIndex);
    // console.log(newIndex);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleChange(1);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  const handleClick = (e)=>{
    const newIndex = images.findIndex( image => image === e.target.src);
    setIndex(newIndex)
  }
  return <>
    <div className="mx-auto flex gap-2 h-[400px]">
      <div className="my-auto">
        <FaAngleLeft
          className="h-[40px] w-[40px] hover:cursor-pointer"
          onClick={() => handleChange(-1)}
        />
      </div>
      <div className="flex-grow">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="img"
            className={`rounded-xl h-[400px] w-[400px] object-cover ${
              index === idx ? "flex" : "hidden"
            }`}
          />
        ))}
      </div>
      <div className="my-auto">
        <FaAngleRight
          className="h-[40px] w-[40px]  hover:cursor-pointer"
          onClick={() => handleChange(1)}
        />
      </div>
    </div>
    <div className="mx-auto flex items-center gap-2 item">
      {
        images.map((img,idx)=>(
  
          <img
            key={idx} onClick={handleClick}
            src={img}
            alt={img}
            className={`h-[40px] w-[40px] object-cover rounded-md ${idx === index ? "border-2 border-blue-400 h-[60px] w-[60px]" : "opacity-70"}`}
            />
    
        ))
      }
    </div>
  </>;
};

export default Slider;
