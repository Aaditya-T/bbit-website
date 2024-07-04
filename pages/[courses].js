import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { departments } from '../data/deptdata';

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

  return (
    <div>
      <h1>Department: {departmentData.name}</h1>
      <img src={departmentData.image} alt={departmentData.name} />
      <h2>Vision</h2>
      <p>{departmentData.vision}</p>
      <h2>Mission</h2>
      <p>{departmentData.mission}</p>
      <h2>Faculty</h2>
      <p>{departmentData.faculty}</p>
      <h2>Designation</h2>
      <p>{departmentData.designation}</p>
      <h2>Qualification</h2>
      <p>{departmentData.qualification}</p>
      <h2>Experience</h2>
      <p>{departmentData.experience}</p>
    </div>
  );
};

export default DepartmentPage;