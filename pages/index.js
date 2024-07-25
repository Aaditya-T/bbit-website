/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import FlexBanner from "../components/FlexBanner";
import { motion } from "framer-motion";
import { SecondSection } from "@/components/component/second-section";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { isMobile } from "react-device-detect";
import Flex_Mob from "@/components/mob_components/Flex_Mob";
import Footer_Mob from "@/components/mob_components/Footer_Mob";

const topButts = [
  {
    name: "Awards & Achievements",
    icon: "/home/heroSection/btnawards.svg",
    href: "/awards",
  },
  {
    name: "Events Held",
    icon: "/home/heroSection/btnevents.svg",
    href: "/events",
  },
  {
    name: "Newsletter",
    icon: "/home/heroSection/btnnewsletter.svg",
    href: "/newsletter"
  },
];

const Home = () => {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    setIsMob(isMobile);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      {!isMob && (
        <>
          <FlexBanner />
          <main>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute text-[--text-primary] font-OrelegaOne ml-[10vw] z-10"
            >
              <div className="text-left text-[2.4vw] mt-[12vh] mb-[0.8vh]">
                <div className="text-[1.8vw]">Welcome to</div>B & B Institute Of
                Technology
              </div>
              <div className="text-[1.4vw]">
                Unlock your potential with innovative
                <br /> courses and hands-on learning
                <br />
                opportunities.
              </div>
              <div className="mt-[1.5vh] font-extralight text-[1vw]">
                Contact us to know more:
                <br /> Phone: 02692 - 237240 <br />
                Email: principal@bbit.ac.in
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

              <div className="absolute bottom-[10vh] flex flex-row justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="z-10 flex flex-row items-center text-white gap-[14vw]"
                >
                  <div className="relative bottom-0 flex flex-row justify-center items-center gap-[20vw]">
                    {topButts.map((item, index) => (
                      <div
                        key={index}
                        className="z-10 flex flex-col items-center"
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-[10vw] h-[8vh]"
                        />
                        <button className="text-white bg-[daisyBush100] w-[12vw] py-[0.8vh] mt-[2.5vh] rounded-full border-[0.3vh] border-[--daisyBush100] text-[1.7vh] cursor-pointer" onClick={() => window.location.href = item.href}>
                          {item.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              className=""
            >
              <SecondSection />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              className=""
            >
              <div className="relative w-[80vw] h-[90vh] mt-[17vh]">
                <div className="flex flex-col-2 gap-3 ml-[14.5vw] w-[71.2vw]">
                  <Card className="p-[1vw] bg-[#D8D1FF] rounded-2xl shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 text-[#27066F]">
                        <Avatar className="w-[5vw] h-[5vw]">
                          <AvatarImage src="/home/chairman.svg" />
                          <AvatarFallback>BP</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-[1.7vw] font-bold">
                            Chairman{"'"}s Message
                          </CardTitle>
                          <CardDescription className="text-[1.2vw] font-medium">
                            Er. BHIKHUBHAI B. PATEL
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[1vw] font-semibold text-[#27066F]">
                        Education plays a vital role in the socio-economic
                        development of the country. Education that is thorough,
                        purposeful and meets the requirements of today&apos;s
                        technological industry market. It is our deepest desire
                        to serve the society by molding the technocrats of
                        tomorrow.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="p-[1vw] bg-[#D8D1FF] rounded-2xl shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 text-[#27066F]">
                        <Avatar className="w-[5vw] h-[5vw]">
                          <AvatarImage src="/home/principal.svg" />
                          <AvatarFallback>KM</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-[1.7vw] font-bold">
                            Principal{"'"}s Message
                          </CardTitle>
                          <CardDescription className="text-[1.2vw] font-medium">
                            Dr. K.M Makwana
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-[1vw] font-semibold text-[#27066F]">
                        I am proud of being the Principal of such a wonderful
                        institution dedicated to the causes of better India.
                        Through education and their real empowerment, come on
                        let&apos;s give our best and make this institution a
                        modern temple of learning through our diligence,
                        devotion and dedication.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </main>
        </>
      )}

      {isMob && (
        <div className="">
          <Flex_Mob />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[--text-primary] font-OrelegaOne z-10"
          >
            <div className="m-0">
              <img
                className="relative w-[18vw] h-[4vh] mt-[3vh] ml-[6vw]"
                src="/home/bbit.png"
                alt="logo"
              />

              <div className=""></div>
            </div>

            <div className="text-[#27066F] mt-[4.5vh] relative">
              <div className="flex justify-center">
                <p className="text-center text-[3vh] leading-[4vh]">
                  Welcome to <br /> B & B Institute of Technology
                </p>
              </div>
              <div className="flex justify-center mt-[1.2vh]">
                <p className="text-center text-[2vh] w-[80vw] leading-[2.3vh]">
                  Unlock your potential with innovative <br /> courses and
                  hands-on learning <br /> opportunities.
                </p>
              </div>
              <div className="flex justify-center mt-[1.2vh]">
                <p className="text-center text-[1.4vh] leading-[1.5vh]">
                  Contact us to know more:
                  <br /> Phone: 02692 - 237240 <br />
                  Email: principal@bbit.ac.in
                </p>
              </div>
            </div>
          </motion.div>

          <div className=" w-[22vw] mt-[9vh] bottom-0">
            <svg
              width="503"
              height="357"
              viewBox="0 0 503 357"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-128.016 119.509C-142.271 116.166 -159 114.738 -159 114.738V357H204.804H591V0C591 0 580.443 0.22724 543.094 16.6122C505.745 32.9971 281.314 155.797 125.293 182.344C37.1517 197.341 -47.8371 138.311 -128.016 119.509Z"
                fill="url(#paint0_linear_1220_412)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1220_412"
                  x1="216"
                  y1="348.594"
                  x2="216"
                  y2="0.0641802"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F3F2FF" />
                  <stop offset="0.24" stop-color="#AB86F7" />
                  <stop offset="0.44" stop-color="#8146F2" />
                  <stop offset="0.711667" stop-color="#5F13EE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-[10vh] flex flex-row justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="z-10 flex flex-row items-center text-white gap-[14vw]"
            >
              <div className="relative bottom-0 flex flex-row items-center gap-[3.5vw]">
                {topButts.map((item, index) => (
                  <div key={index} className="z-10 flex flex-col items-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-[9vw] h-[8vh]"
                    />
                    <button className="text-white  w-[30vw] h-[3.5vh] py-[0.4vh] mt-[1vh] rounded-full border-[0.3vh] text-[1.2vh]">
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* <Footer_Mob /> */}
        </div>
      )}
    </div>
  );
};

export default Home;
