// import { Navbar } from "../components/navbar";
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
      {/* <Navbar /> */}

      <div className="mt-[14vh]">
        <div className="flex flex-wrap text-center pl-[27vh] gap-[0vh|2vh]">
        {cardsData.map((item, index) => (
          <div className="relative text-[2vh] w-[22vw] h-[28vh] bg-[#FFB224] m-[2vh] rounded-[5vh] pr-[2vw] pt-[2vh] text-[#FFFAEB]" key={index}>
            <span className='mr-[10vw] text-[3vh] inline-block text-left leading-[4vh]' data-name={item.name}>{item.name}</span>
            <img
              className={`absolute w-[6vw] h-[12vh] mt-[2vh] ml-[15vw] bg-img-base dept-${  item.name.toLowerCase()}`}
              src={item.path}
              alt={item.name}
           />  
           <div className='card-item'>
            <button onClick={() => handleNavigation(item.name, 'gia')} className="gia-btn">GIA</button>
            <button onClick={() => handleNavigation(item.name, 'sfi')} className="sfi-btn">SFI</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Cards;