import React from "react";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import FolderIcon from "@/components/ui/FolderIcon";
import MailIcon from "@/components/ui/MailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import Tab from "@/components/Tabs/Tab";
import MainDashboard from "@/components/dashboards/MainDashboard";

const ProfessionalInfo = ({ category, h1, h2, h3 }) => {

  return (
    <main className="flex flex-row h-full">
      <aside className="w-[259px] border-r border-white h-full">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">{category}</div>
        </div>
        <div className="h-[110px] flex flex-col justify-evenly items-start ">
          <div className="flex flex-row cursor-pointer hover:text-white-custom">
            <div className="pl-2 flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h1}</div>
          </div>
          <div className="flex flex-row cursor-pointer hover:text-white-custom">
            <div className="pl-2 flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h2}</div>
          </div>
          <div className="flex flex-row cursor-pointer hover:text-white-custom">
            <div className="pl-2 flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h3}</div>
          </div>
        </div>
        <div className="flex flex-row text-white-custom border-y border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">Contacts</div>
        </div>
        <div className="h-[70px] flex flex-col justify-evenly items-start border-b border-white">
          <div className="flex flex-row cursor-pointer hover:text-white-custom">
            <div className="pl-2 flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <MailIcon />
            </div>
            <div className="pl-2">Mail</div>
          </div>
          <div className="flex flex-row cursor-pointer hover:text-white-custom">
            <div className="pl-2 flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <PhoneIcon />
            </div>
            <div className="pl-2">Contact</div>
          </div>
        </div>
      </aside>
      <div>
        <div>
          <Tab text="Experience" />
        </div>
        <div>
          <MainDashboard
            number={9}
            h1="// Octanet Services Pvt. Ltd."
            l1="- Developed and maintained web applications"
            l2="- Collaborated with cross-functional teams"
            l3="- Implemented responsive UI components"
            l4="- Managed project timelines"
          />
          <MainDashboard
            number={9}
            h1="react"
            l1="-nextjs"
            l2="- "
            l3="- "
            l4="- "
          />
          <MainDashboard
            number={9}
            h1="english speaking"
            l1="leadership"
            l2="- "
            l3="- "
            l4="- "
          />
        </div>
      </div>
    </main>
  );
};

export default ProfessionalInfo;
