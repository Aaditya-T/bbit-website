import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
    <div className="p-[8vw] mx-auto mb-[10vh]">
      <div className="flex flex-wrap text-center pl-[2vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-[3vw]"
        >
          {deptsData !== null &&
            Object.keys(deptsData).map((key, index) => {
              const item = deptsData[key];
              const path = item[0].path;
              const name = item[0].name;
              const buttons = item.map((dept, index) => {
                return (
                  <button
                    className="w-[4vw] h-[4vh] bg-transparent rounded-[1vh] text-white font-bold border-2 hover:bg-white hover:text-black"
                    key={index}
                    onClick={() => router.push(`/course/${dept.slug}`)}
                  >
                    {dept.type}
                  </button>
                );
              });
              return (
                <div className="relative text-[2vh] w-[22vw] h-[28vh] bg-[#FFB224] rounded-[4vh] text-[#FFFAEB] text-start" key={index}>
                  <span className='mr-[10vw] ml-[1vw] mt-[5vh] text-[3vh] inline-block font-bold' data-name={name}>{name}</span>
                  <img
                    src={path}
                    alt={name}
                    className="absolute w-[6vw] h-[12vh] mt-[2vh] ml-[15vw] bg-img-base"
                  />
                  <div className="absolute bottom-[3vh] left-[1vw] flex flex-row justify-start gap-[1vw]">
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
                <div className="w-[22vw] h-[28vh] bg-[#FFB224] rounded-[4vh] text-[#FFFAEB] text-start" key={index}>
                  <div class="p-20 max-w-sm w-full mx-auto">
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
