
import { IoMdMail } from "react-icons/io";
import { SiHuggingface } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="mailto:mr.hassanibbal@gmail.com" target="_blank" rel="noopener noreferrer">
        <span className="w-10 h-10 text-xl bg-bodyColor border border-zinc-700 
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center 
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300">
          <IoMdMail />
        </span>
      </a>

      <a href="https://www.linkedin.com/in/hassan-iqbal-31b469328/" target="_blank" rel="noopener noreferrer">
        <span className="w-10 h-10 text-xl bg-bodyColor border border-zinc-700 
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center 
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>

      <a href="https://github.com/Hassands-ai" target="_blank" rel="noopener noreferrer">
        <span className="w-10 h-10 text-xl bg-bodyColor border border-zinc-700 
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center 
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300">
          <SiHuggingface />
        </span>
      </a>

      <a href="https://www.kaggle.com/hassan190" target="_blank" rel="noopener noreferrer">
        <span className="w-10 h-10 bg-bodyColor border border-zinc-700 
        hover:border-textGreen rounded-full inline-flex items-center 
        justify-center hover:-translate-y-2 transition-all duration-300">
          <Image 
            src="/assets/images/kaggle.png" 
            alt="Kaggle" 
            width={24} 
            height={24} 
          />
        </span>
      </a>
    </div>
  );
};

export default Footer;
