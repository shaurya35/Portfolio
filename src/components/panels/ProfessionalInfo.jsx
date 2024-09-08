import React from "react";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import FolderIcon from "@/components/ui/FolderIcon";
import MailIcon from "@/components/ui/MailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";

const ProfessionalInfo = () => {
  return (
    <div className="w-[calc(322px-64px)]">
      <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center  text-[14px] cursor-pointer">
        <div className="pl-2 flex justify-center items-center">
          <DownIcon />
        </div>
        <div className="pl-2">professional-info</div>
      </div>
      <div className="h-[110px] flex flex-col justify-evenly items-start ">
        <div className="flex flex-row cursor-pointer hover:text-white-custom">
          <div className="pl-2 flex justify-center items-center">
            <Right />
          </div>
          <div className="pl-2 flex justify-center items-center">
            <FolderIcon />
          </div>
          <div className="pl-2">experience</div>
        </div>
        <div className="flex flex-row cursor-pointer hover:text-white-custom">
          <div className="pl-2 flex justify-center items-center">
            <Right />
          </div>
          <div className="pl-2 flex justify-center items-center">
            <FolderIcon />
          </div>
          <div className="pl-2">hard_skills</div>
        </div>
        <div className="flex flex-row cursor-pointer hover:text-white-custom">
          <div className="pl-2 flex justify-center items-center">
            <Right />
          </div>
          <div className="pl-2 flex justify-center items-center">
            <FolderIcon />
          </div>
          <div className="pl-2">soft_skills</div>
        </div>
      </div>
      <div className="flex flex-row text-white-custom border-y border-white w-full h-[35px] justify-start items-center  text-[14px] cursor-pointer">
        <div className="pl-2 flex justify-center items-center">
          <DownIcon />
        </div>
        <div className="pl-2">contacts</div>
      </div>
      <div className="h-[70px] flex flex-col justify-evenly items-start">
        <div className="flex flex-row cursor-pointer hover:text-white-custom">
        <div className="pl-2 flex justify-center items-center">
            <Right />
          </div>
          <div className="pl-2 flex justify-center items-center">
            <MailIcon />
          </div>
          <div className="pl-2">mail</div>
        </div>
        <div className="flex flex-row cursor-pointer hover:text-white-custom">
        <div className="pl-2 flex justify-center items-center">
            <Right />
          </div>
          <div className="pl-2 flex justify-center items-center">
            <PhoneIcon />
          </div>
          <div className="pl-2">contact</div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
