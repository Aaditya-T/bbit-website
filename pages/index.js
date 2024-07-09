/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FlexBanner from "../components/FlexBanner";
import { motion } from "framer-motion";
import { SecondSection } from "@/components/component/second-section";

const topButts = [
  {
    name: "Activities",
    icon: "/home/activity.svg",
  },
  {
    name: "Virtual Tour",
    icon: "/home/vtour.svg",
  },
  {
    name: "Alumni",
    icon: "/home/alumni.svg",
  },
];

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <FlexBanner />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute text-[--text-primary] font-OrelegaOne ml-[10vw] z-10"
        >
          <div className="text-left text-[3vw] font-bold mt-[20vh] mb-[1vh]">
            Welcome to B & B <br /> Institute Of Technology
          </div>
          <div className="text-[1.5vw]">
            Unlock your potential with innovative
            <br /> courses and hands-on learning
            <br />
            opportunities.
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center min-h-screen w-screen">
          <svg
            viewBox="0 0 2158 770"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-screen"
          >
            <path
              d="M89.1505 263.12C48.1347 255.76 0 252.615 0 252.615V786H1046.79H2158V0C2158 0 2127.62 0.500308 2020.16 36.5747C1912.69 72.6491 1266.93 343.016 818.006 401.463C564.394 434.483 319.853 304.517 89.1505 263.12Z"
              fill="url(#paint0_linear_86_118)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_86_118"
                x1="1079"
                y1="767.492"
                x2="1079"
                y2="0.141304"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3F2FF" />
                <stop offset="0.15" stop-color="#AB86F7" />
                <stop offset="0.24" stop-color="#8146F2" />
                <stop offset="0.75" stop-color="#5F13EE" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute bottom-[10vh] flex flex-row justify-center items-center gap-[20vw] text-[1vw]">
            {topButts.map((item, index) => (
              // <div key={index} className="z-10 flex flex-col items-center">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="z-10 flex flex-col items-center"
              >
                <img src={item.icon} alt={item.name} className="w-[5vw]" />
                <button className="text-white bg-[daisyBush100] px-[3vw] py-[1vh] mt-[2vh] rounded-full border-[0.1vw] border-[--daisyBush100]">
                  {item.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0}}
          className="mt-[10vh]"
        >
         <SecondSection />
        </motion.div>
      </main>
    </div>
  );
};

export default Home;