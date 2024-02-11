import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const CustomTab = () => {
  const [active, setActive] = useState("login");
  const [formData, setFormData] = useState({});

  const handleInputChange = (type, value) => {
    setFormData({
      ...formData,
      [type]: value,
    });
  };
  return (
    <div className="w-[500px] mx-auto bg-gray-700/[0.8] h-[500px] rounded-xl flex flex-col">
      <div className="flex justify-evenly mt-[40px]">
        <button className={`w-[100px] p-2  text-white rounded-lg cursor-pointer border-black border-l-2 ${active === "login" ? "bg-blue-500" : "bg-gray-700"} `} onClick={()=> setActive("login")}>
          SignIn
        </button>
        <button className={`w-[100px] p-2  text-white rounded-lg cursor-pointer border-black border-l-2 ${active === "register" ? "bg-blue-500" : "bg-gray-700"} `} onClick={()=> setActive("register")}>
          Register
        </button>
      </div>

      <div className="mt-[80px]">
        {active === "login" ? (
          <LoginForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        ) : (
          <RegisterForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
      </div>
    </div>
  );
};

export default CustomTab;
