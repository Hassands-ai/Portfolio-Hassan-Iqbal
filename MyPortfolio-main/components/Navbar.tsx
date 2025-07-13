import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
 

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">

        
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Image
              className="w-[90px] mt-[4px]"
              src="/assets/images/logo.png"
              alt="logo"
              width={90}
              height={90}
            />
          </motion.div>
        </Link>



        {/* Desktop Menu */}
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            {[
              { name: "Home", href: "#home", id: "" },
              { name: "About", href: "#about", id: "01" },
              { name: "Skills", href: "#skills", id: "02" },
              { name: "Project", href: "#project", id: "03" },
              { name: "Contact", href: "#contact", id: "04" },
            ].map((item, index) => (
              <Link
                key={index}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                href={item.href}
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: index * 0.1 }}
                >
                  {item.id && <span className="text-textGreen">{item.id}. </span>}
                  {item.name}
                </motion.li>
              </Link>
            ))}
          </ul>

          <a href="/assets/ZainAli-Resumee.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Hamburger for mobile */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />

              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  {[
                    { name: "Home", href: "#home", id: "" },
                    { name: "About", href: "#about", id: "01" },
                    { name: "Skills", href: "#skills", id: "02" },
                    { name: "Project", href: "#project", id: "03" },
                    { name: "Contact", href: "#contact", id: "04" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                      href={item.href}
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 * index }}
                      >
                        {item.id && <span className="text-textGreen">{item.id}. </span>}
                        {item.name}
                      </motion.li>
                    </Link>
                  ))}
                </ul>

                <a href="/assets/ZainAli-Resumee.pdf" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>

                {/* Social Icons */}
                <div className="flex gap-4">
                  {[
                    {
                      icon: <TbBrandGithub />,
                      href: "https://github.com/Hassands-ai",
                      delay: 0.8,
                    },
                    {
                      icon: <IoMdMail />,
                      href: "mailto:mrhassaniqbal67@gmail.com",
                      delay: 0.85,
                    },
                    {
                      icon: <SlSocialLinkedin />,
                      href: "https://www.linkedin.com/in/hassan-iqbal-31b469328/",
                      delay: 0.9,
                    },
                    {
                      icon: <FaXTwitter />,
                      href: "https://x.com/Nimr1233946",
                      delay: 0.95,
                    },
                    {
                      icon: <SlSocialInstagram />,
                      href: "https://www.instagram.com/hassaniqbal190?igsh=MXh5b3AydTh0end6aw==",
                      delay: 1,
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: item.delay }}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="w-10 h-10 text-xl bg-bodyColor border border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        {item.icon}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                href="mailto:mrhassaniqbal67@gmail.com"
              >
                <p>Hassan Iqbal</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;