import Footer from "../components/footer";
import { Navbar } from "../components/Navbar";
const hostel = () => {
    return(
      
    <>
    <Navbar/>
    <div className="hostelcontainer p-[5vw] bg-[#f9f9f9]">
        <div className="hostelheader bg-[#ffde88] px-[14vw] py-[2vh] rounded-[0.5vw] absolute z-2 mx-[22vw] text-center mb-[5vh]">
          <h1 className="text-[#461502] text-[2.5vw] font-semibold leading-10 text-center ">GIRL'S HOSTEL</h1>
        </div>
        <div className="hostelimageContainer flex justify-center m-[1vw] mt-[7vw]">
          <div className="hostelimagePlaceholder w-full max-w-3rem h-80 bg-[#ddd] flex justify-center items-center text-[#777] text-xl rounded-3xl font-semibold z-20">IMAGE</div>
        </div>
        <div className="hostelcontent py-[1.04vw] px-[6.6vw] text-[#27066f] text-[2vw] font-semibold leading-7 text-left relative z-2 mb-[10.3vh]">
          <p className="mb-[1.2vh">
            The campus comprises of well-manufactured inn blocks, both for girls and boys. Every inn comprises of different wreckage, managerial office, warden quarter, a separate mess and obliges around 200 students. Notwithstanding very much outfitted rooms, the lodging is finished with facilities like association, exercise center and different comforts for games, amusement and stimulation. It likewise incorporates every minute of every day 24/7 water facilities and RO for drinking water. A close-by shopping complex, comprising of different shops outside, is situated in the region of the lodging pieces and takes into account the day by day needs of the students like basic supplies, stationery, clothing and grooming

          </p>
          <h2 className="mt-[2.25vh] mb-[1.1vh] text[#27066f]">Hostels Amenities:</h2>
          <ol>
            <li>1. The hostel rooms are spacious with natural light and ventilation. Each room has an attached toilet and bathroom</li>
            <li>2. Each student is provided with a study table, chair</li>
            <li>3. Each hostel has 24 hour electricity and water supply, water cooler, common telephone, and common TV room</li>
          </ol>
          <h2>Security:</h2>
          <p>
            The following arrangements have been made to ensure the security of the inmates of the hostels:
          </p>
          <ol>
            <li>1. Security check at the main gate of each Hostel.</li>
            <li>2. Individual security guard at each hostel building.</li>
            <li>3. Lady Warden at girl's hostels.</li>
          </ol>
        </div>
        <div className="hostelheader bg-[#ffde88] px-[14vw] py-[2vh] rounded-[0.5vw] absolute z-2 mx-[22vw] text-center mb-[5vh]">
          <h1 className="text-[#461502] text-[2.5vw] font-semibold leading-10 text-center">BOY'S HOSTEL</h1>
        </div>
        <div className="hostelimageContainer flex justify-center m-[1vw] mt-[12vw] ">
          <div className="hostelimagePlaceholder  w-full max-w-3rem h-80 bg-[#ddd] flex justify-center items-center text-[#777] text-xl rounded-3xl font-semibold z-20">IMAGE</div>
        </div>
        <div className="hostelcontent  py-[1.04vw] px-[6.6vw] text-[#27066f] text-[2vw] font-semibold leading-7 text-left relative z-2 mb-[10.3vh]">
          <p className="mb-[1.25vh]">
            The campus comprises of well-manufactured inn blocks, both for girls and boys. Boy's inn comprises of different wreckage, managerial office, warden quarter, a mess and obliges around 290 students. Notwithstanding very much outfitted rooms, the lodging is finished with facilities like association, different comforts for games. It likewise incorporates every minute of every day 24/7 hot & cold water facilities and drinking water. A close-by shopping complex, comprising of different shops outside, is situated in the region of the lodging pieces and takes into account the day by day needs of the students like basic supplies, stationery, clothing and grooming.
          </p>
          <h2 className="mt-[2.25vh] mb-[1.1vh] text[#27066f]">Hostels Amenities:</h2>
          <ol>
            <li>1. The hostel rooms are spacious with natural light and ventilation.</li>
            <li>2. Each student is provided with a study table, cupboard, and chair.</li>
            <li>3. Hostel has 24 hour electricity and water supply, water cooler and common TV room</li>
          </ol>
          <h2>Security:</h2>
          <p>
            The following arrangements have been made to ensure the security of the inmates of the hostels
          </p>
          <ol>
            <li>1. Security check at the main gate of each Hostel.</li>
            <li>2. Individual security guard at each hostel building.</li>
          </ol>
        </div>
        <div className="ellipse1 w-[5vw] h-[8.89vh] rounded-[520vh] bg-[#e2f3fc] -ml-[0.5vw] mt-[0vw] bottom-[0.6vh] top-[15vh] absolute z-0 "></div>
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
        <div className="ellipse4"></div>
        <div className="ellipse5"></div>
        <div className="ellipse6"></div>
        <div className="ellipse7"></div>
       
      </div>
      <Footer/>
</>
    );
}
export default hostel;