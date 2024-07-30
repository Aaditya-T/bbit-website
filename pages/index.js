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
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


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
    href: "/newsletter",
  },
];

const Home = () => {
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    setIsMob(isMobile);
  }, []);

  return (
    <div style={{ overflow: "hidden" }} className="mb-56">
      {!isMob && (
        <>
          <FlexBanner />
          <main>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute text-[--text-primary] ml-[10vw] z-10"
            >
              <div className="text-left text-[2.4vw] mt-[12vh] mb-[0.8vh] font-OrelegaOne ">
                <div className="text-[2vw]">Welcome to <br/> B & B Institute Of
                Technology
                </div>
              </div>
              <div className="text-[1.4vw] font-bold">
                Unlock your potential with innovative
                <br /> courses and hands-on learning
                <br />
                opportunities.
              </div>
              <div className="mt-[1.5vh] font-normal text-[1vw]">
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
                        <button
                          className="text-white bg-[daisyBush100] w-[12vw] py-[0.8vh] mt-[2.5vh] rounded-full border-[0.3vh] border-[--daisyBush100] text-[1.7vh] cursor-pointer"
                          onClick={() => (window.location.href = item.href)}
                        >
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
        <div style={{ overflow: "hidden" }}>
          {/* hero section */}
          <div className="relative w-full mt-6 p-4">
            <h1 className="text-3xl text-[#27066F] font-OrelegaOne font-light z-10 text-center">
              Welcome to <br /> B & B Institute Of Technology
            </h1>

            <p className="text-lg text-[#27066F] font-OrelegaOne font-light z-10 text-center mt-2">
              Unlock your potential with innovative courses and hands-on
              learning opportunities.
            </p>

            <p className="text-md text-[#27066F] font-light z-10 text-center mt-1">
              Contact us to know more: <br />
              Phone: 02692 - 237240 <br />
              Email: principal@bbit.ac.in
            </p>
          </div>

          {/* swiper */}
          <div className="relative p-1 border-4 border-solid border-[#27066F] rounded-[10px] z-10">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {[1, 2, 3, 4].map((index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`/home/banner-${index}.jpg`}
                    alt="college-images"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="relative flex justify-center items-center w-full -mt-28">
            <svg viewBox="0 0 400 357" xmlns="http://www.w3.org/2000/svg">
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

            <div className="absolute bottom-12 flex flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="z-10 flex flex-row items-center gap-10"
              >
                {topButts.map((item, index) => (
                  index === 2 ? null :
                    <div key={index} className="z-10 flex flex-col items-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-9 h-9"
                      />
                      <button
                        className="text-white bg-inherit w-32 h-10 mt-2 rounded-full border-2 border-[#F3F2FF] text-xs cursor-pointer"
                        onClick={() => (window.location.href = item.href)}
                      >
                        {item.name}
                      </button>
                    </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="relative w-full mt-16 p-2">
            <div className="flex flex-col gap-4 mb-14">
              {/* a latest news card */}
              <Card className="p-4 bg-[#D8D1FF] rounded-2xl shadow-lg mb-5">
                <CardHeader className="pb-4 text-center items-center">
                  <div className="flex items-center text-center space-x-4 text-[#27066F]">
                    <CardTitle className="text-2xl font-bold items-center text-center">
                      Latest News
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <>
                      <div key={index} className="flex items-start space-x-4">
                        <CalendarIcon className="w-8 h-8" />
                        <div>
                          <p className="font-medium text-lg mt-1">
                            25 June 2024
                          </p>
                          <p className="text-lg text-[#27066F]">
                            Create event result declaration
                          </p>
                        </div>
                      </div>
                      <hr className="h-1 bg-[#27066F] rounded-2xl" />
                    </>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-5 mb-20">

              <Card className="p-4 bg-[#D8D1FF] rounded-2xl shadow-lg">
                <CardHeader className="pb-4 text-center items-center">
                  <div className="flex space-x-4 text-[#27066F]">
                    <CardTitle className="text-xl font-bold">
                      Our Vision
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg font-semibold text-[#27066F]">
                    Education plays a vital role in the socio-economic
                    development of the country. Education that is thorough,
                    purposeful and meets the requirements of today's
                    technological industry market. It is our deepest desire to
                    serve the society by molding the technocrats of tomorrow.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 bg-[#D8D1FF] rounded-2xl shadow-lg">
                <CardHeader className="pb-4 text-center items-center">
                  <div className="flex space-x-4 text-[#27066F]">
                    <CardTitle className="text-xl font-bold">
                      Our Mission
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg font-semibold text-[#27066F]">
                    Education plays a vital role in the socio-economic
                    development of the country. Education that is thorough,
                    purposeful and meets the requirements of today's
                    technological industry market. It is our deepest desire to
                    serve the society by molding the technocrats of tomorrow.
                  </p>
                </CardContent>
              </Card>

            </div>

            <div className="flex flex-col gap-4">

              <Card className="p-4 bg-[#D8D1FF] rounded-2xl shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 text-[#27066F]">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/home/chairman.svg" />
                      <AvatarFallback>BP</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl font-bold">
                        Chairman's Message
                      </CardTitle>
                      <CardDescription className="text-md font-medium">
                        Er. BHIKHUBHAI B. PATEL
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg font-semibold text-[#27066F]">
                    Education plays a vital role in the socio-economic
                    development of the country. Education that is thorough,
                    purposeful and meets the requirements of today's
                    technological industry market. It is our deepest desire to
                    serve the society by molding the technocrats of tomorrow.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 bg-[#D8D1FF] rounded-2xl shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 text-[#27066F]">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/home/principal.svg" />
                      <AvatarFallback>KM</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl font-bold">
                        Principal's Message
                      </CardTitle>
                      <CardDescription className="text-md font-medium">
                        Dr. K.M Makwana
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg font-semibold text-[#27066F]">
                    I am proud of being the Principal of such a wonderful
                    institution dedicated to the causes of better India. Through
                    education and their real empowerment, come on let's give our
                    best and make this institution a modern temple of learning
                    through our diligence, devotion and dedication.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
