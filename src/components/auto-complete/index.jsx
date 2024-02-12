/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { names } from "./data";
import useOutsideClick from "../modal-popup/use-outsideclick-hook";
const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [show,setShow] = useState(false)
//   const [names, setNames] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const suggestionRef = useRef(null)

//   useEffect(() => {
//     const fetchNames = async () => {
//       try {
//         const response = await axios.get("https://dummyjson.com/users");
//         setNames(response.data.users.map(user => user.firstName));
//       } catch (error) {
//         console.error("Error fetching names:", error);
//       }
//     };

//     fetchNames();
//   }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue.length)
    setQuery(inputValue);
    const filteredSuggestions = names.filter((name) =>
    name.toLowerCase().startsWith(inputValue.toLowerCase())
    ).slice(0,10);
    setSuggestions(filteredSuggestions);

    if(inputValue.length === 0){
        setSuggestions([])
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  useOutsideClick(suggestionRef,()=>setShow(false))
  return (
    <div className="w-[500px] mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Auto Complete Search..."
          onClick={()=>setShow(true)}
        onFocus={()=>setShow(true)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        { show && suggestions.length > 0 && (
          <ul className="absolute z-20 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg" ref = {suggestionRef}>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
