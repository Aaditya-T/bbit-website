import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { departments } from "../data/departments";
// import { Navbar } from "../components/navbar";
import Sidebar from "../components/sidebar";
import { Element } from "react-scroll";

const DepartmentPage = () => {
  const router = useRouter();
  const { course } = router.query;

  const [departmentData, setDepartmentData] = useState(null);

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

  const departmentClass = departmentData.name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "and");

  return (
    <>
      {/* <Navbar /> */}
      <div className="container ml-[16vw]">
      <div className="-ml-[220px]">
        <Sidebar />
      </div>
      
        <Element name="vision">
          <h2
            id="vision"
            className="ml-[5vw] text-[3vh] mb-[1vw] text-[#54031f] font-bold -mt-[8vh]">
            Vision
          </h2>

          <p className="w-[60vw] text-[2vh] ml-[5vw] text-[#54031f] font-normal">
            {departmentData.vision}
          </p>
        </Element>
        <Element name="mission">
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
          <h2 id="faculty" className="ml-[5vw] mt-[5vh] text-[3vh] text-[#54031f] font-bold">Faculties</h2>
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
                  <p className="text-[1.6vh] text-center">{faculty.designation}</p>
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

        <Element name="labs">
          {departmentData.lab.map((lab, index) => (
            <Element key={index} name={`lab-${index + 1}`}>
              <div className="flex items-center ml-[6.4vw] mt-[10vh] p-[1vh]">
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
    </>
  );
};

export default DepartmentPage;