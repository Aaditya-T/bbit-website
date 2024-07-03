const departmentData = [
  {
    name: "Computer",
    vision: `To be a leading center of excellence in computer engineering education, 
      research, and innovation, producing world-class professionals who drive 
      technological advancements and contribute to the global knowledge economy`,
    mission: `Mission: To provide high-quality education in computer engineering that 
      equips students with strong theoretical foundations and practical skills.
  
      To foster a culture of innovation, critical thinking, and problem-solving 
      through cutting-edge research and collaborative projects.
  
      To engage with industry partners and the community to address real-world 
      challenges and contribute to sustainable development.
  
      To nurture ethical and socially responsible professionals committed to 
      lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculty: "XYZ",
    designation: "abc",
    qualification: "MCA",
    experience: "5 years",
    image: "https://example.com/computer.jpg"
  }
];

const Department = () => {
  return (
    <div>
      {departmentData.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.vision}</p>
          <p>{item.mission}</p>
          <p>{item.faculty}</p>
          <p>{item.designation}</p>
          <p>{item.qualification}</p>
          <p>{item.experience}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Department;