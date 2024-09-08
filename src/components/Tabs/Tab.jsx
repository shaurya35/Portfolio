import React from "react";

const ExperienceDashboard = ({text}) => {
  return (
    <main className="w-[900px] border-r border-white h-full">
      <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center  text-[13px] cursor-pointer">
        <div className="pl-2">{text}hi there</div>
      </div>
    </main>
  );
};

export default ExperienceDashboard;
