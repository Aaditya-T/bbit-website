import { Navbar } from "../components/navbar";
import { useRouter } from 'next/router';

const cardsData = [
  { name: "Civil", path: "/courses/civil.svg" },
  { name: "Computer", path: "/courses/computer.svg" },
  { name: "Electrical", path: "/courses/electrical.svg" },
  { name: "Electronic & Communication", path: "/courses/electronic-com.svg" },
  { name: "Information Technology", path: "/courses/informationtechnology.svg" },
  { name: "Mechanical", path: "/courses/mechanical.svg" },
  { name: "Mechatronics", path: "/courses/mechatronics.svg" },
  { name: "Science & Humanities", path: "/courses/science-humanity.svg" }
];

const Cards = () => {
  const router = useRouter();

  const handleNavigation = (dept, type) => {
    const deptSlug = dept.toLowerCase().replace(/\s+/g, '-');
    const typeSlug = type.toLowerCase();
    router.push(`/${deptSlug}-${typeSlug}`);
  };

  return (
    <div>
      <Navbar />
      <div className="c-circle">
        <div className="c-circle1"></div>
        <div className="c-circle2"></div>
        <div className="c-circle3"></div>
        <div className="c-circle4"></div>
      </div>
      <div className="card">
        {cardsData.map((item, index) => (
          <div className="card-item" key={index}>
            <span data-name={item.name}>{item.name}</span>
            <img
              className={`course-svg ${item.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              src={item.path}
              alt={item.name}
            />  
            <button onClick={() => handleNavigation(item.name, 'gia')} className="gia-btn">GIA</button>
            <button onClick={() => handleNavigation(item.name, 'sfi')} className="sfi-btn">SFI</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;