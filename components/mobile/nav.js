import { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { MenuToggle } from "./MenuToggle";


const menuList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Admissions",
    link: "/admission",
  },
  {
    name: "Department",
    link: "/courses"
  },
  {
    name: "Placements",
    link: "/placement",
  },
  {
    name: "Downloads",
    link: "#",
  },
];

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const NavMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      //scroll to top
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`flex items-center justify-between w-full h-12 fixed top-0 z-[99999] ${isOpen ? "bg-[#d8d1ff]" : "bg-[#F3F2FF]"}`}>
        <div className="flex items-center gap-2 p-2 mt-1">
          <Link href="/">
            {!isOpen && <img src="/home/bbit.png" alt="logo" className="h-6 w-13" />}
          </Link>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom="1000"
          ref={containerRef}
          className="flex items-center mr-3 relative"
        >
          <motion.div className="background absolute top-0 left-0 w-full h-full bg-[#]" variants={sidebar} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </nav>

      {isOpen && (
        <motion.ul
          className="absolute top-0 left-0 bottom-0 w-[100vw] bg-[#d8d1ff] text-[#27066F] font-OrelegaOne z-[9999] text-2xl"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {menuList.map((item, index) => (
            <motion.li key={index} className="cursor-pointer mt-10 ml-4" whileHover={{ scale: 1.1 }}>
              <Link href={item.link} onClick={() => toggleOpen()}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default NavMobile;
