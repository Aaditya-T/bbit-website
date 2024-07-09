import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const cmnClass =
  "text-[#27066F] hover:text-gray-700 font-medium transition-all duration-300 text-2xl";

const menuList = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Admissions",
    link: "#",
  },
  {
    name: "Placements",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Contact",
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
    <nav className="flex items-center justify-between w-full h-16 fixed top-0 z-50 bg-[#F3F2FF]">
      <div className="flex items-center gap-2 p-4 mt-1">
          <Link href="/">
            <Image src="/home/bbit.png" alt="logo" width={100} height={50} />
          </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex items-center gap-7 mr-7"
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
