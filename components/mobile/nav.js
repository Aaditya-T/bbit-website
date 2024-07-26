import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

const NavMobile = () => {
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
    <nav className="flex items-center justify-between w-full h-10 fixed top-0 z-50 bg-[#F3F2FF]">
        <div className="flex items-center gap-2 p-2 mt-1">
            <Link href="/">
              <img src="/home/bbit.png" alt="logo" className="h-6 w-13"/>
            </Link>
        </div>

        {/* hamburger menu on right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center mr-3"
        >
            <div className="flex flex-col items-center">
                <div className="w-6 h-1 bg-[#27066F] rounded-full mb-1"></div>
                <div className="w-6 h-1 bg-[#27066F] rounded-full mb-1"></div>
                <div className="w-6 h-1 bg-[#27066F] rounded-full"></div>
            </div>
        </motion.div>
    </nav>
  );
};

export default NavMobile;
