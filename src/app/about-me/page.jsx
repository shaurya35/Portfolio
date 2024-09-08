"use client";
import React, { useState } from "react";
import TerminalIcon from "../../components/ui/TerminalIcon";
import SquareUserIcon from "../../components/ui/SquareUserIcon";
import JoystickIcon from "../../components/ui/JoystickIcon";
import ProfessionalInfo from "@/components/panels/ProfessionalInfo";

const Page = () => {
  const [activePanel, setActivePanel] = useState("experience"); 

  return (
    <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex ">
      <div className="border-r border-white w-[1300px] flex flex-row h-full">
        <div className="w-[64px] border-r border-white flex flex-col justify-start items-center">
          <div
            className={`mt-6 cursor-pointer ${
              activePanel === "experience"
                ? "text-white-custom"
                : "hover:text-white-custom"
            }`}
            onClick={() => setActivePanel("experience")}
          >
            <TerminalIcon />
          </div>
          <div
            className={`mt-6 cursor-pointer ${
              activePanel === "bio"
                ? "text-white-custom"
                : "hover:text-white-custom"
            }`}
            onClick={() => setActivePanel("bio")}
          >
            <SquareUserIcon />
          </div>
          <div
            className={`mt-6 cursor-pointer ${
              activePanel === "sports"
                ? "text-white-custom"
                : "hover:text-white-custom"
            }`}
            onClick={() => setActivePanel("sports")}
          >
            <JoystickIcon />
          </div>
        </div>

        <div className="h-full">
          {activePanel === "experience" && (
            <ProfessionalInfo
              category="professional-info"
              h1="experience"
              h2="hard_skills"
              h3="soft_skills"
            />
          )}
          {activePanel === "bio" && (
            <ProfessionalInfo
              category="personal-info"
              h1="bio"
              h2="interests"
              h3="qualifications"
            />
          )}
          {activePanel === "sports" && (
            <ProfessionalInfo
              category="hobbies-info"
              h1="sports"
              h2="favourite_games"
              h3="favourite_movies"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
