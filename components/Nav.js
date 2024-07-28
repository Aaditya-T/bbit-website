import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const cmnClass =
  "text-[#27066F] hover:text-gray-700 transition-all duration-300 text-[3vh] font-medium";

const menuList = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Admissions",
    link: "admission",
  },
  {
    name: "Department",
    link: "courses"
  },
  {
    name: "Placements",
    link: "#",
  },
  {
    name: "Downloads",
    link: "#",
  },
];

const Nav = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    const path = window.location.pathname;
    const page = path.split("/")[1];
    if (page === "") {
      setCurrentPage("Home");
    } else {
      setCurrentPage(page);
    }
  }, []);

  return (
    <nav className="flex items-center justify-between w-full h-[8vh] fixed top-0 z-10 bg-[#F3F2FF]">
      <div className="gap-[2vh] p-[2vh] mt-[1vh]">
          <Link href="/">
            <img src="/home/bbit.png" alt="logo" className="h-[6vh] w-[13vh]"/>
          </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex items-center gap-[3vh] mr-[6vh]"
      >
        {menuList.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.link}
              className={
                cmnClass +
                (currentPage === item.name
                  ? " text-[#27066F] font-bold"
                  : " font-normal")
              }
            >
              {item.name}
            </Link>
          );
        })}
      </motion.div>
    </nav>
  );
};

export default Nav;
