import React from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import MailIcon from "@/components/ui/MailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import Right from "@/components/ui/Right";

const page = () => {
  return (
    <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex ">
      <div className="border-r border-white w-[391px]">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">contacts</div>
        </div>
        <div className="flex flex-col px-[25px] py-[10px] h-[100px] justify-evenly items-start border-b border-white">
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom `}
          >
            <div className=" flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <MailIcon />
            </div>
            <div className="pl-2">Mail</div>
          </div>
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom `}
          >
            <div className=" flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <PhoneIcon />
            </div>
            <div className="pl-2">Contact</div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-4">page.tsx</div>
          <div className="pl-4 pr-2 border-r border-white h-full flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
        <div className="pl-48 pt-20 ">
          <div className="pb-5">
            <div className="pb-2">_name:</div>
            <div>
              <input
                className="bg-black-600 border rounded-md border-gray-custom3 w-80 h-9 px-2 focus:outline-none focus:border-gray-custom focus:ring-2 focus:ring-gray-custom focus:ring-opacity-50"
                type="text"
              />
            </div>
          </div>
          <div className="pb-5">
            <div className="pb-2">_email:</div>
            <div>
              <input
                className="bg-black-600 border rounded-md border-gray-custom3 w-80 h-9 px-2 focus:outline-none focus:border-gray-custom focus:ring-2 focus:ring-gray-custom focus:ring-opacity-50"
                type="text"
              />
            </div>
          </div>
          <div className="pb-5">
            <div className="pb-2">_message:</div>
            <div>
              <textarea
                className="input-field bg-black-600 border rounded-md border-gray-custom3 w-80 h-64 px-2 pt-1 resize-none focus:outline-none focus:border-gray-custom focus:ring-2 focus:ring-gray-custom focus:ring-opacity-50"
                type="text"
              />
            </div>
          </div>
          <button className="bg-white-custom2 text-white-custom text-[14px] p-2 rounded-lg">
            submit-message
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
