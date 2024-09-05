"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleHelloClick = () => {
    router.push("/");
  };

  const handleAboutMeClick = () => {
    router.push("/about-me");
  };

  const handleProjectsClick = () => {
    router.push("/projects");
  };

  const handleContactMeClick = () => {
    router.push("/contact-me");
  };

  return (
    <header className="h-[64px] lg:h-[50px] border-white border-b font-fira-code text-[19px] lg:text-[16px] text-gray-custom flex justify-between">
      <div className="flex items-center h-full">
        <div
          className="pr-48 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer"
          onClick={handleHomeClick}
        >
          <button>shaurya-jha</button>
        </div>
        <div
          className="hidden lg:flex pl-6 pr-6 lg:border-white lg:border-r h-full items-center cursor-pointer"
          onClick={handleHelloClick}
        >
          <button>_hello</button>
        </div>
        <div
          className="hidden lg:flex pl-6 pr-6 lg:border-white lg:border-r h-full items-center cursor-pointer"
          onClick={handleAboutMeClick}
        >
          <button>_about-me</button>
        </div>
        <div
          className="hidden lg:flex pl-6 pr-6 lg:border-white lg:border-r h-full items-center cursor-pointer"
          onClick={handleProjectsClick}
        >
          <button>_projects</button>
        </div>
      </div>
      <div
        className="hidden lg:flex pl-6 pr-6 lg:border-white lg:border-l h-full items-center cursor-pointer"
        onClick={handleContactMeClick}
      >
        <button>_contact-me</button>
      </div>
    </header>
  );
};

export default Header;
