import { motion } from "framer-motion"

export default function Admission() {

    return (
        <div className="bg-[#F3F2FF] mt-20">

            <div className="relative">
                <div className="w-[8vw] h-[16vh] rounded-[20vh] bg-[#EAE6FF] ml-[3vw] mt-[0vw] bottom-[0.6vh] top-[35vh] absolute "></div>
                <div className="w-[20vw] h-[40vh] rounded-[20vh] bg-[#EAE6FF] ml-[4vw] mt-[0vw] bottom-[0.6vh] top-[60vh] absolute "></div>
                <div className="w-[20vw] h-[40vh] rounded-[20vh] bg-[#EAE6FF] ml-[73vw] mt-[0vw] bottom-[0.6vh] top-[55vh] absolute"></div>
                <div className="w-[15vw] h-[30vh] rounded-[20vh] bg-[#EAE6FF] ml-[78.5vw] mt-[0vw] bottom-[0.6vh] top-[3vh] absolute"></div>
                <div className="w-[17vw] h-[34vh] rounded-[20vh] bg-[#EAE6FF] -ml-[9vw] mt-[0vw] bottom-[0.6vh] top-[167vh] absolute mr-[2vh]"></div>
                <div className="w-[15vw] h-[30vh] rounded-[20vh] bg-[#EAE6FF] ml-[60vw] mt-[0vw] bottom-[0.6vh] top-[172vh] absolute"></div>
                <div className="w-[30vw] h-[60vh] rounded-[35vh] bg-[#EAE6FF] ml-[63vw] mt-[0vw] bottom-[0.6vh] top-[170vh] absolute"></div>
            </div>

            <div className="p-[1.5vw] relative mb-[20vh]">
                <motion.div className="mb-[4vw] bg-[#FFDE88] mx-[33vw] rounded-[1.7vw] ml-[35vw] " initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-center text-[1.8vw] font-light py-[1.3vw] text-[#27066F] font-OrelegaOne ">ADMISSION PROCESS</h1>
                </motion.div>
                <motion.div className="ml-[8vw] bg-gradient-to-b from-[#BCACFF] to-[#F3F2FF] p-[1vw] rounded-[1vw]  w-[80vw] h-[40vh] text-[#27066F] mb-[4vw] " initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >
                    <ul className="list-disc list-inside font-semibold text-left pl-[2vw]">
                        <li className="text-[1.25vw]">We follow guideline given by state government for admission in Under Graduate courses.</li>
                        <li className="text-[1.25vw]">As per state rules from total 75% seats are filled by Admission committee for professional Diploma Courses - ACPDC (www.acpdc.co.in) and remaining 25% seats, the 10% seats are filled under Management quota and 15% seats are filled under NRI/NRII sponsored quota.</li>
                        <li className="text-[1.25vw]">We follow ACPDC guidelines for giving admission under management quota and NRI/NRII sponsored quota.</li>
                    </ul>
                </motion.div>
                <motion.div className="mb-4 bg-[#FFDE88] mx-[30vw] font-semibold rounded-[1.5vw]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-center text-[1.2vw] font-light text-[#27066F] font-OrelegaOne py-[0.8vw] px-[0.8vw] mb-[4vw]">AICTE APPROVED INTAKE FOR {new Date().getFullYear()}-{new Date().getFullYear() + 1}</h1>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} whileInView={{ y: 0, opacity: 1 }}>
                    <table className="ml-[15vw] text-left border-collapse mb-8 text-[#27066F] w-[65vw] h-[65vh] ">
                        <thead>
                            <tr>
                                <th className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF] text-[1vw]">Sr.No.</th>
                                <th className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF] text-[1vw]">CoursGRANT-IN-AID(GIA) COURSES OFFERED</th>
                                <th className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF] text-[1vw]">Annual Intake</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">1</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Civil Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">60</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">2</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Computer Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">60</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">3</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Electrical Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">60</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">4</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Electronics & Communication Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">60</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">5</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Mechanical Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">120</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 font-bold bg-[#EAE6FF] text-center" colSpan="2">TOTAL</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 font-bold bg-[#EAE6FF]">360</td>
                            </tr>
                        </tfoot>
                    </table>
                </motion.div>

                <div>
                    <table className="ml-[15vw] text-left border-collapse w-[65vw] h-[65vh]">
                        <thead>
                            <tr>
                                <th className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF] text-[1vw]">Sr.No.</th>
                                <th className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF] text-[1vw]">SELF FINANCED(SF) COURSES OFFERED</th>
                                <th className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF] text-[1vw]">Annual Intake</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">1</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Civil Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">60</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">2</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Computer Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">120</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">3</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Electrical Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">60</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">4</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Electronics & Communication Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">60</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">5</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Information Technology</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">60</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">6</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Mechanical Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">120</td>
                            </tr>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">7</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">Diploma in Mechatronics Engineering</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 bg-[#EAE6FF]">30</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="border-[0.15vw] border-[#27066F] p-2 font-bold bg-[#EAE6FF] text-center" colSpan="2">TOTAL</td>
                                <td className="border-[0.15vw] border-[#27066F] p-2 font-bold bg-[#EAE6FF]">420</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}