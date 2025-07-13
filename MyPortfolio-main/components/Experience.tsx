
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import KingsCode from "./works/Amazon";
import LincolnCorner from "./works/lincoln";
import UMT from "./works/comsats";
import UniversityEducation from "./works/UniversityEducation";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("7KingsCode");

  const tabs = [
    { id: "7KingsCode", label: "Data Science Enthusiast", component: <KingsCode /> },
    { id: "LincolnCorner", label: "Lincoln Corner", component: <LincolnCorner /> },
    { id: "UMT", label: "MS Data Science", component: <UMT /> },
    { id: "UniversityEdu", label: "BS Mathematics - University of Education", component: <UniversityEducation /> },
  ];

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience & Education" titleNo="03" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-48 flex flex-col">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="w-full">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </section>
  );
};

export default Experience;
