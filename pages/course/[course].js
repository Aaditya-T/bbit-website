/* eslint-disable @next/next/no-img-element */
"use client";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";

const DepartmentPage = ({ dept }) => {
  const router = useRouter();
  const { course } = router.query;

  const [departmentData, setDepartmentData] = useState();
  const [selectedSemester, setSelectedSemester] = useState("Sem 1");

  useEffect(() => {
    if (!course) return;
    if (!dept) return;
    const data = dept.find((dept) => dept.slug === course);
    setDepartmentData(data);
  }, [course, dept]);

  return (
    <>
      <div className="flex md:ml-[15vw] lg:ml-[15vw]">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="mx-auto lg:mt-[22vh] md:mt-[22vh] mt-[25vh] lg:w-[90vw] md:w-[90vw] w-[80vw] h-full">
          <Element name="about" className="flex flex-col items-center">
            <div className="ml-[1vw]">
              <h2
                id="vision"
                className="text-[3vh] mb-[1vw] text-[#27066F] font-bold -mt-[7vh]"
              >
                Vision:
              </h2>

              <p className="lg:w-[49vw] md:w-[49vw] text-[2vh] text-[#27066F] font-normal">
                {departmentData?.vision}
              </p>

              <h2
                id="mission"
                className="text-[3vh] text-[#27066F] font-bold mt-[6vh]"
              >
                Mission
              </h2>
              <p className="lg:w-[49vw] md:w-[49vw] text-[2vh] whitespace-pre-line mt-[2vh] text-[#27066F] font-normal">
                {departmentData?.mission}
              </p>
            </div>
          </Element>

          <Element name="faculty members">
            <div className="z-10 py-2 lg:py-0 md:py-0 lg:px-0 md:px-0 lg:w-[12vw] md:w-[12vw] md:h-[5vh] lg:h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[5vh] mx-auto relative flex justify-center w-fit px-5">
              <h2
                id="faculty members"
                className="lg:mt-[0.7vh] md:mt-[0.7vh] text-[2vh] text-[#27066F] font-bold flex justify-center"
              >
                Faculty Members
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 mt-[4vh] mx-auto relative justify-center">
              {departmentData?.faculty.map((faculty) => (
                <div
                  key={faculty.id}
                  className="text-[#27066F] border-[0.1vw] w-[35vw] md:w-[15vw] lg:w-[15vw] border-solid border-[#54031f] rounded-[2vw] lg:rounded-[1vw] md:rounded-[1vw] bg-[#c5b5e853]"
                >
                  <div className="w-full h-1/2 lg:h-auto md:h-auto">
                    <img
                      src={`https://cvpjo1eotxjwvkts.public.blob.vercel-storage.com${faculty.image}`}
                      alt={faculty.full_name}
                      className="w-full h-full lg:h-[27vh] md:h-[27vh] md:w-[18vw] lg:w-[18vw] object-cover rounded-t-[2vw] lg:rounded-t-[2vh] md:rounded-t-[2vh] relative"
                    />
                  </div>
                  <div className="flex justify-center items-center lg:h-[13vh]">
                    <div className="text-center">
                      <p className="lg:text-[1.9vh] md:text-[1.9vh] text-base font-bold">
                        {faculty.full_name}
                      </p>
                      <hr className="w-full border-[0.1vh] border-[#54031f] mt-2 mb-2"></hr>
                      <p className="lg:text-[1.8vh] md:text-[1.8vh] text-sm">{faculty.designation}</p>
                      <h2 className="lg:text-[1.8vh] md:text-[1.8vh] text-sm">
                        Qualification: {faculty.qualification}
                      </h2>
                      <h2 className="lg:text-[1.8vh] md:text-[1.8vh] text-sm">
                        Experience:{" "}
                        {new Date().getFullYear() - faculty.yoe + " years"}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Element>

          <Element name="laboratory">
            <div className="py-2 lg:py-0 md:py-0 lg:px-0 md:px-0 lg:w-[12vw] md:w-[12vw] md:h-[5vh] lg:h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[5vh] mx-auto relative flex justify-center w-fit px-5">
              <h2
                className="text-[2vh] text-[#27066F] font-bold"
              >
                Laboratory
              </h2>
            </div>
            {departmentData?.lab.map((lab, index) => (
              <Element key={index} name={`lab-${index + 1}`}>
                <div className="flex flex-col lg:flex-row md:flex-row lg:items-center md:items-center lg:justify-center md:justify-center mt-[5vh] relative">
                  <img
                    src={`https://cvpjo1eotxjwvkts.public.blob.vercel-storage.com${lab.image}`}
                    alt={lab.title}
                    className="lg:w-[26vw] md:w-[26vw] md:h-[35vh] lg:h-[35vh] rounded-[3vh] object-cover ml-[2vw]"
                  />
                  <div className="ml-[1.5vw] p-2">
                    <h2 className="text-[2.2vh] flex lg:justify-center md:justify-center text-[#27066F] font-bold">
                      {lab.title}
                    </h2>
                    <p className="text-[2vh] lg:w-[22vw] md:w-[22vw] mt-[1vh] text-[#27066F] font-normal">
                      {lab.desc}
                    </p>
                  </div>
                </div>
              </Element>
            ))}
          </Element>

          <Element name="timetable">
            <div className="py-2 lg:py-0 md:py-0 lg:px-0 md:px-0 lg:w-[12vw] md:w-[12vw] md:h-[5vh] lg:h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[5vh] mx-auto relative flex justify-center w-fit px-5">
              <h2
                className="text-[2vh] text-[#27066F] font-bold"
              >
                Time table
              </h2>
            </div>

            <div className="mt-[8vh] relative">
              <div className="lg:w-[46vw] md:w-[46vw] lg:h-[50vh] md:h-[50vh] bg-[#D8D1FF] mx-auto border-[0.2vh] border-[#27066F] overflow-hidden mb-[0vh]">
                <table className="table-fixed w-full border-collapse">
                  <thead>
                    <tr>
                      {[
                        "Sem 1",
                        "Sem 2",
                        "Sem 3",
                        "Sem 4",
                        "Sem 5",
                        "Sem 6",
                      ].map((sem) => (
                        <th
                          key={sem}
                          onClick={() => setSelectedSemester(sem)}
                          className={`cursor-pointer text-[#54031F] text-center py-[2vh] px-[1vw] font-semibold text-[2vh] border-t-[0.1vh] border-b-[0.2vh] border-[#27066F] ${selectedSemester === sem ? "bg-[#B3A1FF]" : ""
                            }`}
                        >
                          {sem}
                        </th>
                      ))}
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </Element>

          <Element name="syllabus">
            <div className="py-2 lg:py-0 md:py-0 lg:px-0 md:px-0 lg:w-[12vw] md:w-[12vw] md:h-[5vh] lg:h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[5vh] mx-auto relative flex justify-center w-fit px-5">
              <h2
                className="text-[2vh] text-[#27066F] font-bold"
              >
                Syllabus
              </h2>
            </div>
            <div className="p-5 lg:p-0 md:p-0 lg:w-[46vw] md:w-[46vw] lg:h-[18vh] md:h-[18vh] bg-[#D8D1FF] border-[0.2vh] border-[#27066F] rounded-[2vh] mx-auto mt-[6vh] flex justify-center items-center">
              <p className="text-[#27066F] font-semibold text-sm lg:text-[2.5vh] md:text-[2.5vh]">
                Access the most recent syllabus by visiting the Official GTU
                Website. <br />
                <a
                  href="https://syllabus.gtu.ac.in/Syllabus.aspx?tp=DI"
                  target="_blank"
                  className="font-semibold lg:text-[2.3vh] md:text-[2.3vh] text-[#000000] flex justify-center"
                >
                  https://syllabus.gtu.ac.in/Syllabus.aspx?tp=DI
                </a>
              </p>
            </div>
          </Element>

          <Element name="activities">
            <div className="py-2 lg:py-0 md:py-0 lg:px-0 md:px-0 lg:w-[12vw] md:w-[12vw] md:h-[5vh] lg:h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[5vh] mx-auto relative flex justify-center w-fit px-5">
              <h2
                className="text-[2vh] text-[#27066F] font-bold"
              >
                Activities
              </h2>
            </div>
            <div className="mt-[6vh] mx-auto relative mb-[34vh]  space-y-5">
              <div className="lg:w-[46vw] md:w-[46vw] lg:h-[30vh] md:h-[30vh] bg-[#D8D1FF] border-[0.2vh] border-[#27066F] rounded-[2vh] mx-auto">
                <img
                  src="/home/banner-1.jpg"
                  className="w-1/2 h-[20vh] lg:w-[17vw] md:w-[17vw] lg:h-[29.7vh] md:h-[29.7vh] rounded-tl-[2vh] rounded-bl-[2vh]"
                ></img>
              </div>

              <div className="lg:w-[46vw] md:w-[46vw] lg:h-[30vh] md:h-[30vh] bg-[#D8D1FF] border-[0.2vh] border-[#27066F] rounded-[2vh] mx-auto">
                <img
                  src="/home/banner-1.jpg"
                  className="w-1/2 h-[20vh] lg:w-[17vw] md:w-[17vw] lg:h-[29.7vh] md:h-[29.7vh] rounded-tl-[2vh] rounded-bl-[2vh]"
                ></img>
              </div>
            </div>
          </Element>
        </div>
      </div>
    </>
  );
};

export default DepartmentPage;
