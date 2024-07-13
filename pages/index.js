/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FlexBanner from "../components/FlexBanner";
import { motion } from "framer-motion";
import { SecondSection } from "@/components/component/second-section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import CountUp from "react-countup";

const stairCase = (
  <div className="w-[52vw] h-[65vh]">
    <svg viewBox="0 0 1277 1743" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M379.453 0.371094L20.1876 128.018L360.241 266.911L717.584 135.89L379.453 0.371094Z"
        fill="#0C8ABD"
      />
      <path
        d="M360.241 312.459V266.911L717.585 135.89V181.438L360.241 312.459Z"
        fill="#BEE8F9"
      />
      <path
        d="M423 384.435V338.887L780.344 207.867V253.415L423 384.435Z"
        fill="#BEE8F9"
      />
      <path
        d="M485.759 455.288V409.74L843.103 278.719V324.267L485.759 455.288Z"
        fill="#BEE8F9"
      />
      <path
        d="M548.519 526.14V480.592L905.862 349.572V395.119L548.519 526.14Z"
        fill="#BEE8F9"
      />
      <path
        d="M423 338.888L360.241 312.458L717.585 181.438L780.344 207.867L423 338.888Z"
        fill="#0C8ABD"
      />
      <path
        d="M485.759 410.302L423 383.873L780.344 252.853L843.103 279.282L485.759 410.302Z"
        fill="#0C8ABD"
      />
      <path
        d="M548.519 481.154L485.759 454.725L843.103 323.705L905.862 350.134L548.519 481.154Z"
        fill="#0C8ABD"
      />
      <path
        d="M357.039 787.619L0.335205 905.706L369.847 1070.47L727.19 939.445L357.039 787.619Z"
        fill="#0C8ABD"
      />
      <path
        d="M369.847 1116.01V1070.47L727.191 939.445V984.993L369.847 1116.01Z"
        fill="#BEE8F9"
      />
      <path
        d="M432.606 1187.99V1142.44L789.95 1011.42V1056.97L432.606 1187.99Z"
        fill="#BEE8F9"
      />
      <path
        d="M495.365 1258.84V1213.29L852.709 1082.27V1127.82L495.365 1258.84Z"
        fill="#BEE8F9"
      />
      <path
        d="M558.125 1329.69V1284.15L915.469 1153.13V1198.67L558.125 1329.69Z"
        fill="#BEE8F9"
      />
      <path
        d="M432.606 1142.44L369.847 1116.01L727.191 984.993L789.95 1011.42L432.606 1142.44Z"
        fill="#0C8ABD"
      />
      <path
        d="M495.365 1213.86L432.606 1187.43L789.95 1056.41L852.709 1082.84L495.365 1213.86Z"
        fill="#0C8ABD"
      />
      <path
        d="M558.125 1284.71L495.365 1258.28L852.709 1127.26L915.468 1153.69L558.125 1284.71Z"
        fill="#0C8ABD"
      />
      <path
        d="M905.862 395.12L548.519 526.14L919.311 677.966L1271.53 545.259L905.862 395.12Z"
        fill="#DD6702"
      />
      <path
        d="M548.519 573.937V526.14L919.311 677.966V726.326L548.519 573.937Z"
        fill="#FFDE88"
      />
      <path
        d="M484.479 645.914V598.117L855.271 749.943V798.303L484.479 645.914Z"
        fill="#FFDE88"
      />
      <path
        d="M420.438 716.766V668.969L791.231 820.796V869.155L420.438 716.766Z"
        fill="#FFDE88"
      />
      <path
        d="M356.398 787.619V739.822L727.19 891.648V940.008L356.398 787.619Z"
        fill="#FFDE88"
      />
      <path
        d="M484.479 598.117L548.519 573.937L919.311 726.326L855.271 749.943L484.479 598.117Z"
        fill="#DD6702"
      />
      <path
        d="M420.438 669.532L484.479 645.352L855.271 797.74L791.231 821.358L420.438 669.532Z"
        fill="#DD6702"
      />
      <path
        d="M356.398 740.384L420.438 716.204L791.231 868.593L727.19 892.21L356.398 740.384Z"
        fill="#DD6702"
      />
      <path
        d="M915.469 1198.67L558.125 1329.13L928.277 1480.96L1276.65 1337L915.469 1198.67Z"
        fill="#DD6702"
      />
      <path
        d="M557.484 1376.93L558.125 1329.13L928.276 1480.96V1529.32L557.484 1376.93Z"
        fill="#FFDE88"
      />
      <path
        d="M493.444 1448.91V1401.11L864.236 1552.94V1601.3L493.444 1448.91Z"
        fill="#FFDE88"
      />
      <path
        d="M429.404 1519.76V1471.96L800.196 1623.79V1672.15L429.404 1519.76Z"
        fill="#FFDE88"
      />
      <path
        d="M365.364 1590.61V1542.81L736.156 1694.64V1743L365.364 1590.61Z"
        fill="#FFDE88"
      />
      <path
        d="M493.444 1401.11L557.484 1376.93L928.276 1529.32L864.236 1552.94L493.444 1401.11Z"
        fill="#DD6702"
      />
      <path
        d="M429.404 1472.52L493.444 1448.34L864.236 1600.73L800.196 1624.35L429.404 1472.52Z"
        fill="#DD6702"
      />
      <path
        d="M365.364 1543.38L429.404 1519.2L800.196 1671.59L736.156 1695.2L365.364 1543.38Z"
        fill="#DD6702"
      />
    </svg>
  </div>
);

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

          <div className="absolute bottom-[10vh] flex flex-row justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="z-10 flex flex-row items-center text-white gap-[14vw]"
            >
              <div className="flex flex-col items-center">
                <CountUp
                  end={85}
                  duration={5}
                  className="text-[4vw] font-bold"
                />
                <p className="text-center text-[2vw] mt-2">
                  Certified Teachers
                </p>
              </div>
              <div className="flex flex-col items-center">
                <CountUp
                  end={3000}
                  duration={5}
                  className="text-[4vw] font-bold"
                />
                <p className="text-center text-[2vw] mt-2">Students</p>
              </div>
              <div className="flex flex-col items-center">
                <CountUp
                  end={7}
                  duration={5}
                  className="text-[4vw] font-bold"
                />
                <p className="text-center text-[2vw] mt-2">Courses</p>
              </div>
              <div className="flex flex-col items-center">
                <CountUp
                  end={24}
                  duration={5}
                  className="text-[4vw] font-bold"
                />
                <p className="text-center text-[2vw] mt-2">Awards Won</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-[10vh]"
        >
          <SecondSection />
        </motion.div>

        <div className="relative m-[10vh_auto_70vh] w-[52vw] text-white font-OrelegaOne">
          <div className="absolute top-0 left-0 w-[1vh] h-auto">
            {stairCase}
          </div>
          <div className="relative z-[10vh] mt-[20vh]">
            <img
              className="absolute w-[45vw] h-[120vh] ml-[4vw]"
              src="/home/staircase/sideStuff.png"
              alt="ellipse"
            />

            <div className="flex items-center m-[2vh] relative ml-[8vw]">
              <img
                className="w-[4vw] h-[8vh] -mt-[7vh] transition transform duration-300 ease-in-out hover:scale-110 "
                src="/home/staircase/pin.png"
                alt="ellipse"
              />
              <p className="mt-[7vh] text-[4vh]">Courses</p>
            </div>

            <div className="flex items-center mt-[21vh] ml-[34vw]">
              <p className="mt-[7vh] text-[4vh]">Hostels</p>
              <img
                className="w-[4vw] h-[8vh] -mt-[7vh] transition transform duration-300 ease-in-out hover:scale-110"
                src="/home/staircase/pin.png"
                alt="ellipse"
              />
            </div>

            <div className="flex items-center mt-[21vh] ml-[8vw]">
              <img
                className="w-[4vw] h-[8vh] -mt-[10vh] transition transform duration-300 ease-in-out hover:scale-110"
                src="/home/staircase/pin.png"
                alt="ellipse"
              />
              <p className="mt-[5vh] text-[4vh]">Events</p>
            </div>

            <div className="flex align-top mt-[28vh] ml-[27vw]">
              <p className="-mt-[2vh] text-[4vh] ml-[4vw] text-center">
                Awards & <br />
                Achievements
              </p>
              <img
                className="w-[4vw] h-[8vh] -mt-[6vh] transition transform duration-300 ease-in-out hover:scale-110"
                src="/home/staircase/pin.png"
                alt="ellipse"
              />
            </div>
          </div>
        </div>

        <div className="relative w-[80vw] h-[200vh]">
          <div className="relative top-0 left-0 w-full h-full">
            <img
              src="/home/visionMission/image.png"
              alt="visionMission"
              className="w-[40vw] absolute top-0 left-0"
            />

            <div className="-top-[10vh] left-[10vw] h-full flex flex-col justify-center items-center relative">
              <Card className="p-[5vh] bg-[#D8D1FF] rounded-[2vh] shadow-lg w-[65vw] text-[#27066F]">
                <CardHeader className="pb-[3vh]">
                  <div className="flex items-center space-x-[2vh] mx-auto">
                    <div>
                      <CardTitle className="text-[4.5vh] font-bold">
                        Vision
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-[2vh]">
                  <p className="text-[2.5vh] font-semibold">
                    At BBIT our vision is to create a nurturing and innovative
                    environment where every student can thrive academically,
                    socially, and personally. We aspire to be a leading
                    institution recognized for excellence in education,
                    fostering a culture of inclusivity, critical thinking, and
                    lifelong learning. Through cutting-edge research, community
                    engagement, and a commitment to sustainability, we aim to
                    empower our students to become compassionate leaders and
                    impactful global citizens.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-[5vh] bg-[#D8D1FF] rounded-[2vh] shadow-lg w-[65vw] mt-[38vh] text-[#27066F]">
                <CardHeader className="pb-[3vh]">
                  <div className="flex items-center space-x-[2vh] mx-auto">
                    <div>
                      <CardTitle className="text-[4.5vh] font-bold">
                        Mission
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-[2vh]">
                  <ul className="list-disc list-inside">
                    <li className="text-[2.5vh] font-semibold">
                      Prepare the student with strong fundamental concepts,
                      analytical abilities & Problem solving skills.
                    </li>
                    <br/>
                    <li className="text-[2.5vh] font-semibold">
                      Offer ambiance & Support to cultivate creativity &
                      Innovation.
                    </li>
                    <br/>
                    <li className="text-[2.5vh] font-semibold">
                      Disseminate quality training to enhance skills &
                      Entrepreneurship for professional development.
                    </li>
                    <br/>

                    <li className="text-[2.5vh] font-semibold">
                      Establish opportunities for the students and teachers for
                      lifelong learning to meet the ever changing global
                      technological standards.
                    </li>
                    <br/>
                    <li className="text-[2.5vh] font-semibold">
                      Foster students to seek excellence in technical education.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
