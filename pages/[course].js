import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { departments } from '../data/departments';
import { Navbar } from "../components/navbar";
import Sidebar from '../components/sidebar';
import { Element } from 'react-scroll';

const DepartmentPage = () => {
  const router = useRouter();
  const { course } = router.query;

  const [departmentData, setDepartmentData] = useState(null);

  useEffect(() => {
    if (course) {
      const data = departments.find((d) => {
        const fullName = `${d.name}${d.type? `-${d.type}` : ""}`;
        return fullName.toLowerCase().replace(/\s+/g, '-') === course.toLowerCase();
      });
      setDepartmentData(data);
    }
  }, [course]);

  if (!course || !departmentData) {
    return <div>Loading...</div>;
  }

  const departmentClass = departmentData.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');

  return (
    <div>
      <Navbar />

      <Sidebar departmentData={departmentData} />
      {/* <div className={`deptDataRec ${departmentClass}`}></div> */}
      <div className={`deptDataMain ${departmentClass}`}>
        <Element name="about">
          {/* <h1 id="about" className={`deptDataHeader ${departmentClass}`}>
            {departmentData.type ? departmentData.name : departmentData.name.replace(/-gia|-sfi$/, '')}
          </h1> */}
        </Element>
        <Element name="vision">
          <h2 id="vision" className={`deptDataVision ${departmentClass}`}>Vision</h2>
          <p className={`deptDataVPara ${departmentClass}`}>{departmentData.vision}</p>
          <h2 id="mission" className={`deptDataMission ${departmentClass}`}>Mission</h2>
          <p className={`deptDataMPara ${departmentClass}`}>{departmentData.mission}</p>
        </Element>
        <Element name="faculty">
          <h2 id="faculty" className={`deptDataFacultyH ${departmentClass}`}>Faculties</h2>
          <div className="faculty-container">
            {departmentData.faculties.map((faculty, index) => (
              <div key={faculty.id} className={`faculty ${departmentClass} faculty-${index + 1}`}>
                <p className={`facultyName facultyName-${index + 1}`}>{faculty.name}</p>
                <p className={`facultyDesignation facultyDesignation-${index + 1}`}>{faculty.designation}</p>
                <h2 className={`facultyQualification facultyQualification-${index + 1}`}>Qualification: {faculty.qualification}</h2>
                <h2 className={`facultyExperience facultyExperience-${index + 1}`}>Experience: {faculty.experience}</h2>
                <img src={faculty.image} alt={faculty.name} />
              </div>
            ))}
          </div>
        </Element>
        <div className="lab-container">
          {departmentData.lab.map((lab, index) => (
            <Element key={index} name={`lab-${index + 1}`}>
              <div className={`lab ${departmentClass}`}>
                <img src={lab.img} alt={lab.title} className={`labImg labImg-${index + 1}`} />
                <h2 id={`lab-${index + 1}`} className={`labTitle labTitle-${index + 1}`}>{lab.title}</h2>
                <p className={`labDetail labDetail-${index + 1}`}>{lab.detail}</p>
              </div>
            </Element>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
