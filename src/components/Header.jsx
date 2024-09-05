"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [activeButton, setActiveButton] = useState(""); 
  const router = useRouter();

  const handleButtonClick = (path, buttonName) => {
    setActiveButton(buttonName); 
    router.push(path); 
  };

  return (
    <header className="h-[64px] lg:h-[50px] border-white border-b font-fira-code text-[19px] lg:text-[16px] text-gray-custom flex justify-between">
      <div className="flex items-center h-full">

        <div
          className="pr-48 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:bg-black-400"
          onClick={() => handleButtonClick("/", "home")}
        >
          <button className={`w-full h-full`}>shaurya-jha</button>
        </div>

        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400">
          <button
            className={`w-full h-full px-6 ${
              activeButton === "hello"
                ? "border-b-2 border-yellow-exclusive text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("/", "hello")}
          >
            _hello
          </button>
        </div>

        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400">
          <button
            className={`w-full h-full px-6 ${
              activeButton === "about-me"
                ? "border-b-2 border-yellow-exclusive text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("/about-me", "about-me")}
          >
            _about-me
          </button>
        </div>

        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400">
          <button
            className={`w-full h-full px-6 ${
              activeButton === "projects"
                ? "border-b-2 border-yellow-exclusive text-white"
                : ""
            }`}
            onClick={() => handleButtonClick("/projects", "projects")}
          >
            _projects
          </button>
        </div>
      </div>

      <div className="hidden lg:flex lg:border-white lg:border-l h-full items-center cursor-pointer hover:bg-black-400">
        <button
          className={`w-full h-full px-6 ${
            activeButton === "contact-me"
              ? "border-b-2 border-yellow-exclusive text-white"
              : ""
          }`}
          onClick={() => handleButtonClick("/contact-me", "contact-me")}
        >
          _contact-me
        </button>
      </div>
    </header>
  );
};

export default Header;
