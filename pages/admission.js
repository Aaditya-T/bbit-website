import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function Admission({ dept }) {   
    const [gia , setGia] = useState([]);
    const [sfi , setSfi] = useState([]);

  useEffect(() => {
    if (!dept) return;
    const giadata = dept.filter(item => item.type === 'GIA');
    setGia(giadata);
    const sfidata = dept.filter(item => item.type === 'SFI');
    setSfi(sfidata);
  }, [dept , gia , sfi]);


  return (
    <div className="mt-[10vh]">
      <div className="flex flex-col items-center justify-center mb-[20vh]">
        <div className="bg-[#FFDE88] px-[7vw] rounded-full">
          <h1 className="text-[8vw] lg:text-[5vh] font-light text-[#27066F] font-OrelegaOne">
            Admission Process
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-[5vh] bg-gradient-to-b from-[#BCACFF] to-[#F3F2FF] w-[80vw] h-[50vh] rounded-[5vh] p-[5vw]">
          <ol className="space-y-4 list-disc list-inside text-[#27066F] text-[1.8vh] lg:text-[2.5vh] font-light font-OrelegaOne">
            <li>
              We follow guideline given by state government for admission in
              Under Graduate courses.
            </li>
            <li>
              As per state rules from total 75% seats are filled by Admission
              committee for professional Diploma Courses- ACPDC (www.acpdc.in)
              and on remaining 25% seats. the 10% seats are filled under
              Management quota and 15% seats are filled under NRI/NRI sponsored
              quota.
            </li>
            <li>
              We follow ACPDC guideline for giving admission under management
              quota and NRI/NRI sponsored quota.
            </li>
          </ol>
        </div>
        <div className="bg-[#FFDE88] px-[2vw] py-[1.2vh] rounded-full lg:mt-[10vh] mt-[8vh]">
          <h1 className="text-[4.5vw] lg:text-[4vh] font-light text-[#27066F] font-OrelegaOne">
            Aicte Approved Intake For {new Date().getFullYear()} -{" "}
            {new Date().getFullYear() + 1}
          </h1>
        </div>
        {/* table */}
        <div className="w-[90vw] p-[5vw] mt-[5vh]">
          <table className="w-full bg-[#EAE6FF]">
            <tbody>
              <tr className="text-[#27066F] text-[1.8vh] lg:text-[2.5vh] font-OrelegaOne">
                <td className="border-[0.2vw] border-[#27066F]">Sr. No.</td>
                <td className="border-[0.2vw] border-[#27066F]">
                  Grant-In-Aid Courses
                </td>
                <td className="border-[0.2vw] border-[#27066F]">
                  Annual Intake
                </td>
              </tr>
              {gia.map((item , index) => (
                <tr key = {item.id} className="text-[#27066F] text-[1.8vh] lg:text-[2.5vh] font-light font-OrelegaOne">
                <td className="border-[0.2vw] border-[#27066F]">{index+1}</td>
                <td className="border-[0.2vw] border-[#27066F]">
                  {item.name}
                </td>
                <td className="border-[0.2vw] border-[#27066F]">
                  {item.seats}
                </td>
              </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full bg-[#EAE6FF] mt-[5vh]">
            <tbody>
              <tr className="text-[#27066F] text-[1.8vh] lg:text-[2.5vh] font-OrelegaOne">
                <td className="border-[0.2vw] border-[#27066F]">Sr. No.</td>
                <td className="border-[0.2vw] border-[#27066F]">
                  Grant-In-Aid Courses
                </td>
                <td className="border-[0.2vw] border-[#27066F]">
                  Annual Intake
                </td>
              </tr>
              {sfi.map((item , index) => (
                <tr key = {item.id}className="text-[#27066F] text-[1.8vh] lg:text-[2.5vh] font-light font-OrelegaOne">
                <td className="border-[0.2vw] border-[#27066F]">{index+1}</td>
                <td className="border-[0.2vw] border-[#27066F]">
                  {item.name}
                </td>
                <td className="border-[0.2vw] border-[#27066F]">
                  {item.seats}
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
