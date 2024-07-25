export default function Awards() {
    return (
      <div className="flex mt-[10vh] mb-[20vh]">
        {/* Sidebar */}
        <div className="w-[16vw] p-[1vw] fixed z-40">
          <div className="mb-[1vw] p-[0.5vw] bg-[#FFC84A] text-center rounded-[0.8vw] cursor-pointer text-[#27066F] font-[Outfit] font-bold text-[1.4vw]">2024-2023</div>
          <div className="mb-[1vw] p-[0.5vw] bg-[#FFC84A] text-center rounded-[0.8vw] cursor-pointer text-[#27066F] font-[Outfit] font-bold text-[1.4vw]">2023-2022</div>
        </div>
  
        {/* Main content */}
        <div className="flex-1 p-[2.5vw] pl-[17vw]">
          <div className="grid grid-cols-2 gap-y-12 font-[Outfit] ">
            {Array(5).fill().map((_, i) => (
              <div key={i} className="relative w-[32vw] h-[32vw] border-2 bg-purple-100 rounded-[1vw] z-30 border-[#27066F] mx-[2vw]">
                <div><img src="/events_images/image1.png" className=" w[3.3vw] h-[6.6vw] -mt-[1.5vw] ml-[28.4vw] z-40 absolute" alt="badge"></img></div>
                <div className=" text-center w-[3.3vw] h-[6.6vh] -top-[0.5vw] left-[30.05vw] text-purple-600 bg-white font-bold rounded-[40vw] z-50 relative ">
                  <p className="text-center pt-[0.8vw] text-[1vw]">24.7</p>
                </div>
                <div className=" text-[1.7vw] text-[#000] font-black text-center py-[10vw] px-[13.58vw] top-[0vw] bg-[#D9D9D9] z-30 absolute rounded-t-[1vw]">Image</div>
                <div className="mt-[43vh] ml-[1vw] font-semibold tracking-widest">TITLE</div>
                <div className="ml-[1vw] font-semibold">description</div>
              </div>
            ))}
         
          </div>
        </div>
      </div>
    );
  }