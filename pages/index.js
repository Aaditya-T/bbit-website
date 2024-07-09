/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FlexBanner from "../components/FlexBanner";
import { motion } from "framer-motion";

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
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-row w-[80vw] mx-auto mt-[10vh] gap-[2vw] h-[80vh]">
          <div className="w-[45vw] bg-[#d8d1ff] rounded-xl flex flex-col h-[65vh]">
            <h1 className="text-[2vw] font-bold text-[--text-primary] text-center mt-[2vh]">LATEST NEWS</h1>
            <div className="flex flex-col items-center">
              {
                Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="flex flex-col mt-[4vh] w-full">
                      <div className="flex flex-row ml-[4vw]">
                        <img
                          src="/home/calendar.svg"
                          alt="calendar"
                          className="mr-[1vw]"
                        />
                        <h3 className="font-bold text-[#27066F] text-2xl">01 July 2024</h3>
                      </div>
                      <p className="text-start ml-[6.5vw] mt-6 text-[#27066F] font-bold text-lg">Creato event result declaration</p>
                      <hr className="w-[25vw] h-[3px] mx-auto mt-[2vh] bg-[#27066F]" />
                    </div>
                  ))
              }
            </div>

            <button className="bg-white text-[#27066F] font-bold text-[1vw] w-[6vw] mt-[3vh] py-[0.75vh] rounded-[0.5vw] border-[0.1vw] border-[#27066F] ml-[2.3vw] ">
              View More
            </button>
          </div>

          <div className="flex flex-col w-[45vw] gap-[20vh]">
            <div className="w-[35vw] bg-[#d8d1ff] rounded-xl ml-[10vw] p-[0.7vw] h-[22vh]">
              <img src="/home/chairman.svg" alt="Chairman" className="-mt-[10vh] ml-[22vw]" />

              <h4 className="font-bold text-[#27066F] text-[0.75vw] -mt-[5vh]">Er. BHIKUBHAI B. PATEL</h4>
              <h1 className="text-[1vw] font-bold text-[--text-primary] text-start mt-[2.5vh] mb-1">
                CHAIRMAN's MESSAGE</h1>
              <p className="text-[0.8vw] text-[#27066F] text-start font-bold">
                Education plays a vital role in the socio-economic development of
                the country; Education that is thorough, purposeful and meets the
                requirements of today’s technological industry market. It is our
                deepest desire to serve the society by molding the technocrats of
                tomorrow.{" "}
              </p>
            </div>

            <div className="w-[35vw] bg-[#d8d1ff] rounded-xl ml-[10vw] p-[0.7vw] h-[22vh]">
              <img
                src="/home/principal.svg"
                alt="Principal"
                className="-mt-[10vh] ml-[22vw]"
              />
              <h4 className="font-bold text-[#27066F] text-[0.75vw] -mt-[5vh]">
                Dr. K.M MAKWANA</h4>
              <h1 className="text-[1vw] font-bold text-[--text-primary] text-start mt-[2.5vh] mb-1">
                PRINCIPAL's MESSAGE</h1>
              <p className="text-[0.8vw] text-[#27066F] text-start font-bold">
                Education plays a vital role in the socio-economic development of
                the country; Education that is thorough, purposeful and meets the
                requirements of today’s technological industry market. It is our
                deepest desire to serve the society by molding the technocrats of
                tomorrow.{" "}
              </p>

            </div>
          </div>

        </motion.div>
      </main>
    </div>
  );
}; 

export default Home;
