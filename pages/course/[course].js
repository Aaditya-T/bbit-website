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

  useEffect(() => {
    console.log(departmentData);
  }, [departmentData]);

  return (
    <>
      <div className="flex md:ml-[10vw]">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="mx-auto md:mt-[12vh] mt-[25vh] md:w-[70vw] w-[80vw] h-full md:pl-[2vw]">
          <Element name="about" className="flex flex-col items-">
            <div className="ml-[1vw]">
              <h2
                id="vision"
                className="text-[3vh] mb-[1vw] text-[#27066F] font-bold"
              >
                Vision:
              </h2>

              <p className="md:w-[65vw] text-[2vh] text-[#27066F] font-normal">
                {departmentData?.vision}
              </p>

              <h2
                id="mission"
                className="text-[3vh] text-[#27066F] font-bold mt-[6vh]"
              >
                Mission
              </h2>
              <div className="lg:w-[65vw] text-[2vh] whitespace-pre-line mt-[2vh] text-[#27066F] font-normal">
                {departmentData?.mission ? (
                  <ol>
                    {departmentData.mission.map((points, index) => (
                      <li key={index}>{points}</li>
                    ))}
                  </ol>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Element>

          <Element
            name="faculty members"
            className="flex flex-col items-center"
          >
            <div className="py-2 md:py-0 md:px-0 md:w-[12vw] md:h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[5vh] mx-auto relative flex justify-center w-fit px-5">
              <h2
                id="faculty members"
                className="lg:mt-[0.7vh] md:mt-[0.7vh] text-[2vh] text-[#27066F] font-bold flex justify-center"
              >
                Faculty Members
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 mt-[4vh] md:max-w-[80vw] md:ml-4">
              {departmentData?.faculty.map((faculty) => (
                <div
                  key={faculty.id}
                  className="text-[#27066F] border-[0.11vw] w-[35vw] md:w-[15vw] border-solid border-[#27066F] rounded-[2vw] md:rounded-[1vw] bg-[#c5b5e853] pb-[2vh]"
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
                      <hr className="w-full border-[0.1vh] border-[#27066F] mt-2 mb-2"></hr>
                      <p className="mt-[1vh] md:text-[1.8vh] text-sm">
                        {faculty.designation}
                      </p>
                      <h2 className="mt-[1vh] md:text-[1.8vh] text-sm">
                        Qualification: {faculty.qualification}
                      </h2>
                      <h2 className="mt-[1vh] md:text-[1.8vh] text-sm">
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
              <h2 className="text-[2vh] text-[#27066F] font-bold md:py-2">
                Laboratory
              </h2>
            </div>
            {departmentData?.lab.map((lab, index) => (
              <Element key={index} name={`lab-${index + 1}`}>
                <div className="flex flex-col md:flex-row mt-[5vh] relative md:ml-4">
                  <img
                    src={`https://cvpjo1eotxjwvkts.public.blob.vercel-storage.com${lab.image}`}
                    alt={lab.title}
                    className="lg:w-[26vw] md:w-[26vw] md:h-[35vh] lg:h-[35vh] rounded-[3vh] object-cover"
                  />
                  <div className="ml-[1.5vw] p-2">
                    <h2 className="text-[2.2vh] flex text-[#27066F] font-bold">
                      {lab.title}
                    </h2>
                    <p className="text-[2vh] mt-[1vh] text-[#27066F] font-normal">
                      {lab.desc}
                    </p>
                  </div>
                </div>
              </Element>
            ))}
          </Element>

          <Element name="timetable">
            <div className="py-2 lg:py-0 md:py-0 lg:px-0 md:px-0 lg:w-[12vw] md:w-[12vw] md:h-[5vh] lg:h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[5vh] mx-auto relative flex justify-center w-fit px-5">
              <h2 className="text-[2vh] text-[#27066F] font-bold  md:py-2">
                Time table
              </h2>
            </div>

            <div className="mt-[8vh] relative">
              <div className="bg-[#D8D1FF] mx-auto border-[0.2vh] border-[#27066F] overflow-hidden mb-[0vh] md:ml-4">
                <table className="table-fixed w-full border-collapse">
                  <thead>
                    <tr>
                      {[
                        "Year 1",
                        "Year 2",
                        "Year 3",
                      ].map((sem) => (
                        <th
                          key={sem}
                          onClick={() => setSelectedSemester(sem)}
                          className={`cursor-pointer text-[#27066F] text-center py-[2vh] px-[1vw] font-semibold text-[2vh] border-t-[0.1vh] border-b-[0.2vh] border-[#27066F] ${
                            selectedSemester === sem ? "bg-[#B3A1FF]" : ""
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
              <h2 className="text-[2vh] text-[#27066F] font-bold md:py-2">
                Syllabus
              </h2>
            </div>
            <div className="p-5 md:p-0 md:h-[10vh] bg-[#D8D1FF] border-[0.2vh] border-[#27066F] rounded-[2vh] mx-auto mt-[6vh] flex justify-center items-center md:ml-4">
              <p className="text-[#27066F] font-semibold text-sm md:text-[2.5vh]">
                Access the most recent syllabus by visiting the Official GTU
                Website. <br />
                <a
                  href="https://syllabus.gtu.ac.in/Syllabus.aspx?tp=DI"
                  target="_blank"
                  className="font-semibold md:text-[2.3vh] text-[#000000] flex justify-center"
                >
                  https://syllabus.gtu.ac.in/Syllabus.aspx?tp=DI
                </a>
              </p>
            </div>
          </Element>

          <Element name="activities">
            <div className="py-2 lg:py-0 md:py-0 lg:px-0 md:px-0 md:w-[12vw] md:h-[5vh] lg:h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[5vh] mx-auto relative flex justify-center w-fit px-5">
              <h2 className="text-[2vh] text-[#27066F] font-bold md:py-2">
                Activities
              </h2>
            </div>
            {departmentData?.dept_activities.map((activity, index) => (
              <div
                key={index}
                className="mt-[6vh] mx-auto relative mb-[34vh] space-y-5"
              >
                <div className="md:h-[30vh] bg-[#D8D1FF] border-[0.2vh] border-[#27066F] rounded-[2vh] mx-auto">
                  <img
                    src={activity.image}
                    className="w-1/2 h-[20vh] lg:w-[17vw] md:w-[17vw] lg:h-[29.7vh] md:h-[29.7vh] rounded-tl-[2vh] rounded-bl-[2vh]"
                    alt="image"
                  ></img>
                </div>
                {activity.title}
              </div>
            ))}
          </Element>
        </div>
      </div>
    </>
  );
};

export default DepartmentPage;
