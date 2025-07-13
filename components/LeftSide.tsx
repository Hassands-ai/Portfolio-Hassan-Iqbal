import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6"; // ✅ Twitter (X)
import React from "react";

const LeftSide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/hassan-iqbal-31b469328/" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center 
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/Hassands-ai" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center 
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>

        {/* Twitter (X)
        <a href="https://x.com/Nimr1233946" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center 
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaXTwitter />
          </span>
        </a> */}

        {/* Instagram */}
        <a href="https://www.instagram.com/hassaniqbal190?igsh=MXh5b3AydTh0end6aw==" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center 
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>

      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
