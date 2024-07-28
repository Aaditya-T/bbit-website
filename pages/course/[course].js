"use client";
import Sidebar from "@/components/sidebar";
import { data } from "autoprefixer";
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
      <div className="flex">
        <div className="ml-[2.5vw] w-[2vw] flex-none -mt-[19vh]">
          <Sidebar />
        </div>
        <div className="mx-auto mt-[22vh] w-[50vw]">
          <Element name="about" className="flex flex-col items-center">
            <div className="ml-[1.4vw]">
              <h2
                id="vision"
                className="text-[3vh] mb-[1vw] text-[#27066F] font-bold -mt-[7vh]"
              >
                Vision
              </h2>

              <p className="w-[49vw] text-[2vh] text-[#27066F] font-normal">
                {departmentData?.vision}
              </p>

              <h2
                id="mission"
                className="text-[3vh] text-[#27066F] font-bold mt-[6vh]"
              >
                Mission
              </h2>
              <p className="w-[49vw] text-[2vh] whitespace-pre-line mt-[2vh] text-[#27066F] font-normal">
                {departmentData?.mission}
              </p>
            </div>
          </Element>

          <Element name="faculty members">
            <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[7vh] mx-auto relative flex justify-center">
              <h2
                id="faculty members"
                className="mt-[0.7vh] text-[2vh] text-[#27066F] font-bold flex justify-center"
              >
                Faculty Members
              </h2>
            </div>

            <div className="flex flex-wrap gap-[3vh] mt-[4vh] mx-auto relative justify-center">
              {departmentData?.faculty.map((faculty) => (
                <div
                  key={faculty.id}
                  className="text-[#27066F] border-[0.1vw] w-[15vw] border-solid border-[#54031f] rounded-[1vw] bg-[#c5b5e853]"
                >
                  <div className="w-full">
                    <img
                      src={`https://y4xgzczst4lpi3wu.public.blob.vercel-storage.com${faculty.image}`}
                      alt={faculty.full_name}
                      className="h-[27vh] w-[18vw] object-cover rounded-t-[2vh] relative"
                    />
                  </div>
                  <div className="flex justify-center items-center h-[13vh]">
                    <div className=" text-center">
                      <p className="text-[1.9vh] font-bold">
                        {faculty.full_name}
                      </p>
                      <p className="text-[1.8vh]">{faculty.designation}</p>
                      <h2 className="text-[1.8vh]">
                        Qualification: {faculty.qualification}
                      </h2>
                      <h2 className="text-[1.8vh]">
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
            <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mt-[10vh] relative mx-auto flex justify-center items-center">
              <h2
                id="laboratory"
                className="text-[2vh] text-[#27066F] font-bold"
              >
                Laboratory
              </h2>
            </div>
            {departmentData?.lab.map((lab, index) => (
              <Element key={index} name={`lab-${index + 1}`}>
                <div className="flex items-center mt-[5vh] p-[1vh] relative justify-center">
                  <img
                    src={`https://y4xgzczst4lpi3wu.public.blob.vercel-storage.com${lab.image}`}
                    alt={lab.title}
                    className="w-[26vw] h-[35vh] rounded-[3vh] object-cover -ml-[2vw] "
                  />
                  <div className="ml-[1.5vw]">
                    <h2 className="text-[2.2vh] flex justify-center text-[#27066F] font-bold">
                      {lab.title}
                    </h2>
                    <p className="text-[2vh] w-[18vw] mt-[1vh] text-[#27066F] font-normal">
                      {lab.desc}
                    </p>
                  </div>
                </div>
              </Element>
            ))}
          </Element>

          <Element name="timetable">
            <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mx-auto mt-[10vh]  flex justify-center items-center">
              <h2
                id="timetable"
                className="text-[2vh] text-[#27066F] font-bold absolute"
              >
                Time Table
              </h2>
            </div>

            <div className="mt-[8vh] relative">
              <div className="w-[46vw] h-[50vh] bg-[#D8D1FF] mx-auto border-[0.2vh] border-[#27066F] overflow-hidden mb-[30vh]">
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
                          className={`cursor-pointer text-[#54031F] text-center py-[2vh] px-[1vw] font-semibold text-[2vh] border-t-[0.1vh] border-b-[0.2vh] border-[#27066F] ${
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
            <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] relative rounded-[1.5vh] mx-auto -mt-[19vh]  flex justify-center items-center">
              <h2
                id="syllabus"
                className="text-[2vh] text-[#27066F] font-bold "
              >
                Syllabus
              </h2>
            </div>
            <div className="w-[46vw] h-[18vh] bg-[#D8D1FF] border-[0.2vh] border-[#27066F] rounded-[2vh] mx-auto mt-[6vh] flex justify-center items-center">
              <p className="text-[#27066F] font-semibold text-[2.5vh]">
                Access the most recent syllabus by visiting the Official GTU
                Website. <br />
                <a
                  href="https://syllabus.gtu.ac.in/Syllabus.aspx?tp=DI"
                  target="_blank"
                  className="font-semibold text-[2.3vh] text-[#000000] flex justify-center"
                >
                  https://syllabus.gtu.ac.in/Syllabus.aspx?tp=DI
                </a>
              </p>
            </div>
          </Element>

          <Element name="department-activities">
            <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] mx-auto mt-[10vh] relative flex justify-center items-center">
              <h2
                id="department-activities"
                className="text-[2vh] text-[#27066F] font-bold "
              >
                Department Activities
              </h2>
            </div>
            <div className="mt-[6vh] mx-auto relative mb-[34vh]">
              <div className="w-[46vw] h-[30vh] bg-[#D8D1FF] border-[0.2vh] border-[#27066F] rounded-[2vh] mx-auto">
                <img
                  src="/home/banner-1.jpg"
                  className="w-[17vw] h-[29.7vh] rounded-tl-[2vh] rounded-bl-[2vh]"
                ></img>
              </div>

              <div className="w-[46vw] h-[30vh] bg-[#D8D1FF] border-[0.2vh] border-[#27066F] rounded-[2vh] mt-[4vh] mx-auto">
                <img
                  src="/home/banner-1.jpg"
                  className="w-[17vw] h-[29.7vh] rounded-tl-[2vh] rounded-bl-[2vh]"
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
