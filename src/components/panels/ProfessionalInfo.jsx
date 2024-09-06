import React from "react";
import DownIcon from "@/components/ui/DownIcon";
import FolderIcon from "@/components/ui/FolderIcon";

const ProfessionalInfo = () => {
  return (
    <div className="w-[calc(322px-64px)] text-[14px]">
      <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center">
        <div className="pl-2 flex justify-center items-center">
          <DownIcon />
        </div>
        <div className="pl-2">professional-info</div>
      </div>
      <div className="h-[100px] flex flex-col justify-evenly items-start ">
        <div className="flex flex-row">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2 flex justify-center items-center">
            <FolderIcon />
          </div>
          <div className="pl-2">experience</div>
        </div>
        <div className="flex flex-row">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2 flex justify-center items-center">
            <FolderIcon />
          </div>
          <div className="pl-2">hard-skills</div>
        </div>
        <div className="flex flex-row">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2 flex justify-center items-center">
            <FolderIcon />
          </div>
          <div className="pl-2">soft-skills</div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
