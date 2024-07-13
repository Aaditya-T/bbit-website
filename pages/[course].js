import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { departments } from "../data/departments";
// import { Navbar } from "../components/navbar";
// import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { Element } from "react-scroll";

const DepartmentPage = () => {
  const router = useRouter();
  const { course } = router.query;
  const [departmentData, setDepartmentData] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState("Sem 1");

  useEffect(() => {
    if (course) {
      const data = departments.find((d) => {
        const fullName = `${d.name}${d.type ? `-${d.type}` : ""}`;
        return (
          fullName.toLowerCase().replace(/\s+/g, "-") === course.toLowerCase()
        );
      });
      setDepartmentData(data);
    }
  }, [course]);

  if (!course || !departmentData) {
    return <div>Loading...</div>;
  }

  const renderTableContent = () => {
    const semesterData = departmentData.sem.find(
      (sem) => sem[selectedSemester.toLowerCase().replace(" ", "")]
    );
    return semesterData[selectedSemester.toLowerCase().replace(" ", "")].map(
      (course, index) => (
        <tr key={index}>
          <td className="border px-[1vw] py-[1vh] text-center text-[2.1vh]">
            {course.subcode}
          </td>
          <td className="border px-[1vw] py-[1vh] text-center text-[2.1vh]">
            {course.sub}
          </td>
          <td className="border px-[1vw] py-[1vh] text-center text-[2.1vh]">
            {course.external}
          </td>
          <td className="border px-[1vw] py-[1vh] text-center text-[2.1vh]">
            {course.mid}
          </td>
          <td className="border px-[1vw] py-[1vh] text-center text-[2.1vh]">
            {course.internal}
          </td>
          <td className="border px-[1vw] py-[1vh] text-center text-[2.1vh]">
            {course.practical}
          </td>
          <td className="border px-[1vw] py-[1vh] text-center text-[2.1vh]">
            {course.total}
          </td>
        </tr>
      )
    );
  };
  return (
    <>
      {/* <Footer /> */}

     
        <div className="left-[1vw] -mt-[31vh] absolute text-[2.1vh]">
          <Sidebar />
        </div>
        <div className="container ml-[16vw] mt-[22vh] relative">
        <Element name="about">
          <h2
            id="vision"
            className="ml-[5vw] text-[3vh] mb-[1vw] text-[#54031f] font-bold -mt-[8vh]"
          >
            Vision
          </h2>

          <p className="w-[60vw] text-[2vh] ml-[5vw] text-[#54031f] font-normal">
            {departmentData.vision}
          </p>

          <h2
            id="mission"
            className="ml-[5vw] text-[3vh] text-[#54031f] font-bold mt-[3vh]"
          >
            Mission
          </h2>
          <p className="w-[60vw] text-[2vh] ml-[5vw] whitespace-pre-line mt-[2vh] text-[#54031f] font-normal">
            {departmentData.mission}
          </p>
        </Element>
        <Element name="faculty">
          <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] ml-[20vw] mt-[10vh]">
            <h2
              id="faculty"
              className="ml-[2vw] mt-[0.7vh] text-[2vh] text-[#27066F] font-bold absolute w-full"
            >
              Faculty Members
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-[10vh] w-[40vw]">
            {departmentData.faculties.map((faculty) => (
              <div
                key={faculty.id}
                className="mt-[2vh] text-[#54031f] font-medium sm:w-auto border-[0.1vw] border-solid border-[#54031f] rounded-[1vw] p-[0.5vh]"
              >
                <div className="w-full">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="h-[22vh] w-[22vw] object-cover rounded-t-[2vh]"
                  />
                </div>
                <div className="p-[0vh]">
                  <p className="text-[1.6vh] text-center">{faculty.name}</p>
                  <p className="text-[1.6vh] text-center">
                    {faculty.designation}
                  </p>
                  <h2 className="text-[1.6vh] text-center">
                    Qualification: {faculty.qualification}
                  </h2>
                  <h2 className="text-[1.6vh] text-center">
                    Experience: {faculty.experience}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </Element>

        <Element name="syllabus">
          <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] ml-[20vw] mt-[10vh]">
            <h2
              id="syllabus"
              className="ml-[4vw] mt-[0.7vh] text-[2vh] text-[#27066F] font-bold absolute"
            >
              Syllabus
            </h2>
          </div>

          <div className="mt-[8vh]">
            <div className="w-[46vw] h-[50vh] bg-[#D8D1FF] ml-[10vh] border border-[#27066F] overflow-hidden">
              <table className="table-fixed w-full border-collapse">
                <thead>
                  <tr>
                    {["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"].map(
                      (sem) => (
                        <th
                          key={sem}
                          onClick={() => setSelectedSemester(sem)}
                          className={`cursor-pointer text-[#54031F] text-center py-[2vh] px-[1vw] font-semibold text-[2vh] border-t border-b border-[#27066F] ${
                            selectedSemester === sem ? "bg-[#B3A1FF]" : ""
                          }`}
                        >
                          {sem}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
              </table>
              <tr>
                <td className="border w-[18vw] px-[1vw] py-[1vh] font-bold text-[2vh] text-center">
                  Subject Code
                </td>
                <td className="border w-[18vw] px-[1vw] py-[1vh] font-bold text-[2vh] text-center">
                  Subject Name
                </td>
                <td className="border w-[7vw] px-[1vw]  py-[1vh] font-bold text-[2vh] text-center ">
                  External
                </td>
                <td className="border w-[7vw] px-[1vw]  py-[1vh] font-bold text-[2vh] text-center ">
                  Mid
                </td>
                <td className="border w-[7vw] px-[1vw]  py-[1vh] font-bold text-[2vh] text-center ">
                  Internal
                </td>
                <td className="border w-[7vw] px-[1vw]  py-[1vh] font-bold text-[2vh] text-center ">
                  Practical
                </td>
                <td className="border w-[7vw] px-[1vw]  py-[1vh] font-bold text-[2vh] text-center ">
                  Total
                </td>
              </tr>
              {renderTableContent()}
            </div>
          </div>
        </Element>

        <Element name="laboratory">
          <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] ml-[20vw] mt-[10vh]">
            <h2
              id="laboratory"
              className="ml-[3.5vw] mt-[0.7vh] text-[2vh] text-[#27066F] font-bold absolute"
            >
              Laboratory
            </h2>
          </div>
          {departmentData.lab.map((lab, index) => (
            <Element key={index} name={`lab-${index + 1}`}>
              <div className="flex items-center ml-[6.4vw] mt-[5vh] p-[1vh]">
                <img
                  src={lab.img}
                  alt={lab.title}
                  className="w-[23vw] h-[35vh] rounded-[3vh] object-cover -ml-[2vw] "
                />
                <div className="ml-4">
                  <h2 className="text-[2.2vh] text-center text-[#54031f] font-bold">
                    {lab.title}
                  </h2>
                  <p className="text-[2vh] w-[22vw] mt-[1vh] text-[#54031f] font-normal">
                    {lab.detail}
                  </p>
                </div>
              </div>
            </Element>
          ))}
        </Element>
      </div>

      <Element name="placement">
        <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] ml-[36vw] mt-[10vh]">
          <h2
            id="placment"
            className="ml-[3.5vw] mt-[0.7vh] text-[2vh] text-[#27066F] font-bold absolute"
          >
            Placement
          </h2>
        </div>
        <div className="w-[46vw] ml-[21vw] mt-[5vh] bg-[#D8D1FF] mb-[10vh]">
          <table>
            <thead>
              <tr>
                <th className="text-[#54031F] w-[1vw] text-center py-[2vh] px-[1vw]  font-semibold text-[2vh] border border-solid border-[#27066F]">
                  SR.NO
                </th>
                <th className="text-[#54031F] w-[56vw] text-center py-[2vh] px-[1vw] font-semibold text-[2vh] border border-solid border-[#27066F]">
                  Company Name
                </th>
                <th className="text-[#54031F] w-[22vw] text-center py-[2vh] px-[1vw] font-semibold text-[2vh] border border-solid border-[#27066F]">
                  Package (L/A)
                </th>
              </tr>
            </thead>
            <tbody>
              {departmentData.placement.map((placement, index) => (
                <tr key={index}>
                  <td className="text-[#54031f] py-[2vh] px-[2vw] text-center border border-solid border-[#27066F] text-[2.5vh]">
                    {placement.sr}
                  </td>
                  <td className="text-[#54031f] py-[2vh] px-[2vw]  text-center border border-solid border-[#27066F] text-[2.5vh]">
                    {placement.company}
                  </td>
                  <td className="text-[#54031f] py-[2vh] px-[2vw]  text-center border border-solid border-[#27066F] text-[2.5vh]">
                    {placement.package}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Element>

      <Element name="department-activities">
        <div className="w-[12vw] h-[5vh] bg-[#D8D1FF] rounded-[1.5vh] ml-[36vw] mt-[10vh]">
          <h2
            id="department-activities"
            className="ml-[1vw] mt-[0.7vh] text-[2vh] text-[#27066F] font-bold absolute"
          >
            Department Activities
          </h2>
        </div>
        <div className="mt-[8vh]">
          <div className="w-[46vw] h-[30vh] bg-[#D8D1FF] ml-[43vh] border border-[#27066F] rounded-[2vh]">
            <img
              src="/home/banner-1.jpg"
              className="w-[17vw] h-[29.7vh] rounded-tl-[2vh] rounded-bl-[2vh]"
            ></img>
          </div>

          <div className="w-[46vw] h-[30vh] bg-[#D8D1FF] ml-[43vh] border border-[#27066F] rounded-[2vh] mt-[4vh]">
            <img
              src="/home/banner-1.jpg"
              className="w-[17vw] h-[29.7vh] rounded-tl-[2vh] rounded-bl-[2vh]"
            ></img>
          </div>
        </div>
      </Element>
    </>
  );
};

export default DepartmentPage;
