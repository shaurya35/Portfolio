"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [activeButton, setActiveButton] = useState("_home");
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
          onClick={() => handleButtonClick("/", "_home")}
        >
          <button className={`w-full h-full hover:text-white`}>
            shaurya-jha
          </button>
        </div>

        {/* Home Button */}
        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400">
          <button
            className={`w-full h-full px-6 hover:text-white ${
              activeButton === "_home"
                ? "border-b-2 border-yellow-exclusive text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/", "_home")}
          >
            _home
          </button>
        </div>

        {/* About Me Button */}
        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400">
          <button
            className={`w-full h-full px-6 hover:text-white ${
              activeButton === "about-me"
                ? "border-b-2 border-yellow-exclusive text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/about-me", "about-me")}
          >
            _about-me
          </button>
        </div>

        {/* Projects Button */}
        <div className="hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400">
          <button
            className={`w-full h-full px-6 hover:text-white ${
              activeButton === "projects"
                ? "border-b-2 border-yellow-exclusive text-white-custom"
                : ""
            }`}
            onClick={() => handleButtonClick("/projects", "projects")}
          >
            _projects
          </button>
        </div>
      </div>

      {/* Contact Me Button */}
      <div className="hidden lg:flex lg:border-white lg:border-l h-full items-center cursor-pointer hover:bg-black-400">
        <button
          className={`w-full h-full px-6 hover:text-white ${
            activeButton === "contact-me"
              ? "border-b-2 border-yellow-exclusive text-white-custom"
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