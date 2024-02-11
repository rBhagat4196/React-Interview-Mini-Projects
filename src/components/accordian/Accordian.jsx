import React, { useState } from "react";
import { reactQuestions } from "./data";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordian = () => {
  // single select
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple,setMultiple] = useState([]);

  const handleSingleSelect = (id) => {
    if (id === selected) {
      setSelected(null);
    } else setSelected(id);
  };

  const handleMultipleSelect = (id) => {
    const cpy = [...multiple];
    const index = cpy.findIndex(idx => idx===id);
     console.log(index)
     if(index === -1){
      setMultiple([...multiple , id])
     }
     else{
      cpy.splice(index,1);
      setMultiple(cpy)
     }
    //  else{
    //   setMultiple(prev => prev.splice(index,1))
    //  }
  };

  const changeSelect = ()=>{
    setEnableMultiSelect(prev => !prev);
    setMultiple([]);
    setSelected(null)
  }

  return (
    <>
      <div className="flex justify-center mt-[10px]">
        <button
          className="w-[180px] text-white bg-blue-400 p-2 mb-[10px] rounded-md"
          onClick={changeSelect}
        >
          {enableMultiSelect ? "Disable" : "Enable"} MultiSelect
        </button>
      </div>
      <div className="flex flex-col mx-auto w-[500px]">
        {reactQuestions &&
          reactQuestions.map((question) => (
            <div
              className="flex flex-col items-center justify-center mb-[10px] px-[10px] py-[20px] bg-[#907618] rounded-lg"
              key={question.id}
            >
              <div
                onClick={enableMultiSelect ? ()=> handleMultipleSelect(question.id) : ()=> handleSingleSelect(question.id)}
                className="flex w-full text-white justify-between items-center cursor-pointer"
              >
                <h3>{question.question}</h3>
                <span>{selected === question.id || multiple?.includes(question.id) ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
              </div>
              {enableMultiSelect ? (

                <div className="h-auto text-white text-justify text-wrap">
                {multiple.includes(question.id) && question.answer}
              </div>
              ) : (  
              <div className="h-auto text-white text-justify text-wrap">
                {selected === question.id && question.answer}
              </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Accordian;
