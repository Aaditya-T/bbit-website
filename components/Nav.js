import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const cmnClass =
  "flex items-center gap-1 hover:text-gray-700 font-medium transition-all duration-300 md:text-xl lg:text-2xl";

const menuList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#",
    isDropDown: true,
  },
  {
    name: "Admission",
    link: "/admission",
  },
  {
    name: "Departments",
    link: "/courses",
  },
  {
    name: "Placements",
    link: "/placement",
  },
  {
    name: "Downloads",
    link: "/downloads",
  }
];
const subMenu1 = [
  {
    name: "About BBIT",
    link: "/about",
  },
  {
    name: "Principal’s CV",
    link: "/principal",
  },
  {
    name: "Organization Chart",
    link: "/organization",
  },
  {
    name: "Institute Committees",
    link: "/committees",
  },
  {
    name: "Center of Excellence - Siemens",
    link: "/siemens",
  },
  {
    name: "Center of Excellence - Welding",
    link: "/welding",
  },
  {
    name: "Campus Drive",
    link: "/drive",
  },
  {
    name: "CDTP",
    link: "/cdtp",
  },
  {
    name: "AICTE",
    link: "/aicte",
  },
];

const submenu2 = [
  {
    name: "MOU",
    link: "/mou",
  },
  {
    name: "Mandatory Disclosure",
    link: "/disclosure",
  },
  {
    name: "Tender Notice",
    link: "/tender",
  },
  {
    name: "TEQIP",
    link: "/teqip",
  },
  {
    name: "Right to Info. Act",
    link: "/right",
  },
  {
    name: "Faculty & Staff list",
    link: "/faculty",
  },
  {
    name: "Recruitment Rules For Faculty",
    link: "/recruitment",
  },
];


const Nav = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const variant = {
    open: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold" onClick={() => window.location.replace("/")}>
          <img
            src="/home/bbit.png"
            alt="logo"
            className="object-cover px-5 py-2"
          />
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex items-center gap-1"
      >
        {menuList.map((item) => {
          return (
            <a href={item.link} className={cmnClass} key={item.name}>
              <motion.div
                className="relative flex px-7 font-OrelegaOne text-[--text-primary] hover:bg-[#EAE6FF] hover:rounded-t-xl"
                onMouseEnter={item?.isDropDown ? toggleSubMenu : undefined}
                onMouseLeave={item?.isDropDown ? toggleSubMenu : undefined}
              >
                {item.name}
                {item?.isDropDown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 text-[#27066F]" 
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
                <AnimatePresence>
                  {isSubMenuOpen && item?.isDropDown && (
                    <motion.div
                      initial="closed"
                      animate={isSubMenuOpen ? "open" : "closed"}
                      variants={variant}
                      className="absolute top-7 bg-[#EAE6FF] rounded-xl border w-fit flex flex-row px-3 py-2 z-10 -left-36"
                    >
                      {/* two boxes with different options */}
                      <div className="flex flex-col gap-2 mr-5 bg-[#D8D1FF] pl-6 pr-24 rounded-xl">
                        <span className="text-[#27066F] font-OrelegaOne text-[--text-primary] text-2xl text-nowrap">
                          The Institute
                        </span>
                        <div className="flex flex-col gap-5 text-base">
                          {subMenu1.map((item) => (
                            <a href={item.link} key={item.name} className="font-sans font-semibold text-nowrap">
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 bg-[#D8D1FF] pl-6 pr-24 rounded-xl">
                        <span className="text-[#27066F] font-OrelegaOne text-[--text-primary] text-2xl text-nowrap">
                          Legal Forms
                        </span>
                        <div className="flex flex-col gap-5 text-base">
                          {submenu2.map((item) => (
                            <a href={item.link} key={item.name} className="font-sans font-semibold text-nowrap">
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </a>
          );
        })}
      </motion.div>

    </nav>
  );
};

export default Nav;
