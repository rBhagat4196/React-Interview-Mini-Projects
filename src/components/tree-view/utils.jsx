import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export const View = ({ data }) => {
  return (
    <div className="w-[350px] bg-blue-400 h-[500px] overflow-y-auto p-1 text-white scrollbar-width-none">
      {data.map((child, index) => (
        <Node key={index} data={child} />
      ))}
    </div>
  );
};

export const Node = ({ data }) => {
  const { name, children } = data;
  const [display, setDisplay] = useState({});

  const handleToggle = (currentLabel) => {
    setDisplay({
      ...display,
      [currentLabel]: !display[currentLabel]
    })
  }

  return (
    <div className="mt-[10px]"
      style={{
        marginLeft: "20px",
      }}
    >
      <div className="flex gap-4">
        <div className="text-xl font-mono">{name}</div>
        {children && <span onClick={() => handleToggle(name)}
          className="my-auto text-blue-800 text-xl cursor-pointer"
        >{display[name] ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>}
      </div>
      {children && display[name] &&
        children.map((child, index) => <Node key={index} data={child} />)}
    </div>
  );
};
