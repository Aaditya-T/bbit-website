import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { departments } from '../data/departments';
import { Navbar} from '../components/Navbar';


const DepartmentPage = () => {
  const router = useRouter();
  const { course } = router.query;

  const [departmentData, setDepartmentData] = useState(null);

  useEffect(() => {
    if (course) {
      const data = departments.find((d) => d.name.toLowerCase().replace(/\s+/g, '-') === course.toLowerCase());
      setDepartmentData(data);
    }
  }, [course]);


  if (!course || !departmentData) {
    return <div>Loading...</div>;
  }

  const departmentClass = departmentData.name.toLowerCase();

  return (
    <div>
      <Navbar />
      <div className='deptDataRec'></div>
      <div className={`deptDataMain ${departmentClass}`}>
        <h1 className={`deptDataHeader ${departmentClass}`}>{departmentData.name}</h1>
        <h2 className={`deptDataVision ${departmentClass}`}>Vision</h2>
        <p className={`deptDataVPara ${departmentClass}`}>{departmentData.vision}</p>
      <h2 className={`deptDataMission ${departmentClass}`}>Mission</h2>
      <p className={`deptDataMPara ${departmentClass}`}>{departmentData.mission}</p>
      
      <h2 className={`deptDataFacultyH ${departmentClass}`}>Faculties</h2>

      <div className='faculty1'>
      <p className='facultyp1'>{departmentData.faculty}</p>
      <p className={`facultyp2 ${departmentClass}`}>{departmentData.designation}</p>
      <h2 className='facultyh1'>Qualification: {departmentData.qualification}</h2>
      <h2 className='facultyh2'>Experience: {departmentData.experience}</h2>
      <img src={departmentData.image} alt={departmentData.name} />
      </div>
    </div>
    </div>
  );
};

export default DepartmentPage;
