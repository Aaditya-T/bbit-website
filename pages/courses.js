import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const Cards = ({ dept }) => {
  const router = useRouter();

  const [deptsData, setDeptsData] = useState(null);

  useEffect(() => {
    if (!dept) return;
    //sort out data with same name, as we have two types of each department - sfi and gia, though some are just one type, so we need something like this:
    // deptName: [{sfi}, {gia}], deptName: [{sfi}]...
    const data = dept.reduce((acc, curr) => {
      const name = curr.name;
      if (acc[name]) {
        acc[name].push(curr);
      } else {
        acc[name] = [curr];
      }
      return acc;
    }, {});
    setDeptsData(data);
  }, [dept]);

  return (
    <div className="p-[1vw] mx-auto mb-[20vh] lg:mb-[30vh] mt-[7vh]">
      <div className="flex flex-wrap text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap gap-3 lg:gap-[1.5vw] ml-[15vw]"
        >
          {deptsData !== null &&
            Object.keys(deptsData).map((key, index) => {
              const item = deptsData[key];
              const path = item[0].path;
              const name = item[0].name;
              const buttons = item.map((dept, index) => {
                return (
                  <button
                    className="w-[13vw] h-[4vh] md:w-[5vw] lg:w-[4vw] lg:h-[4vh] bg-transparent rounded-[1vh] text-white font-bold border-2 hover:bg-white hover:text-black"
                    key={index}
                    onClick={() => router.push(`/course/${dept.slug}`)}
                    
                  >
                    {dept.type}
                  </button>
                );
              }); 
              
              return (
                <div className="relative text-[2vh] w-[40vw] h-[25vh] lg:w-[22vw] lg:h-[28vh] bg-[#FFB224] rounded-[4vh] text-[#FFFAEB] text-start" key={index}>
                  <span className='mr-[10vw] ml-[1vw] mt-[8vh] md:mt-10 lg:mt-10 text-[5vw] md:text-[3vh] lg:text-[3vh] inline-block font-bold' data-name={name}>{name}</span>
                  <img
                    src={path}
                    alt={name}
                    className="absolute w-10 h-10 ml-12 top-5 lg:w-[6vw] lg:h-[12vh] lg:mt-[5vh] lg:ml-[15vw] bg-img-base"
                  />
                  <div className="absolute bottom-[3vh] left-[5vw] lg:left-[1vw] flex flex-row justify-center gap-[1vw]">
                    {buttons}
                  </div>
                </div>
              );
            })
          }

          {/* if null, show shadow loading cards */}
          {deptsData === null &&
            Array.from({ length: 6 }).map((_, index) => {
              return (
                <div className="w-[40vw] lg:w-[22vw] md:w-[22vw] h-[25vh] bg-[#FFB224] rounded-[4vh] text-[#FFFAEB] text-start" key={index}>
                  <div class="lg:p-20 md:p-20 p-10 max-w-sm w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-[#94671a] rounded"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-[#94671a] rounded col-span-2"></div>
                            <div class="h-2 bg-[#94671a] rounded col-span-1"></div>
                          </div>
                          <div class="h-2 bg-[#94671a] rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;
