const events = () => {
  return (
      <>
      <div className="bg-[#F3F2FF]">
          <div className="bg-[#F3F2FF] relative mx-[3vw] min-h-screen">
              {/* Header */}
              <div className="text-center pb-[30vh] pt-[2vw] bg-gradient-to-b from-[#F3F2FF] via-[#FAD9929A] to-[#FFC84A] z-10 absolute w-full">
                  <h1 className="text-[3vw] font-bold text-[#54031F] font-[OrelegaOne]">EVENTS</h1>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-3 gap-8 z-20 relative top-[10vw] p-[2vw]">
                  {/* Event Card */}
                  <div className="relative z-20 border-[1vw] border-[#F3F2FF] rounded-[1vw] overflow-hidden border-b-0">
                      <img src="/events_images/event_img.jpg" alt="Event Image" className="w-full" />
                      <div className="absolute top-[13vw] bg-[#450FA9] text-[#FFDE88] text-center w-[4.9vw] z-50 overflow-visible font-[OrelegaOne] font-normal">
                          <p className="pt-[0.4vw] pb-[1vw] text-[2vw] font-[OrelegaOne]">24</p>
                          <p className="text-[1.2vw] uppercase font-[OrelegaOne]">July</p>
                          <p className="text-[1.2vw] pb-[1.3vw] font-[OrelegaOne]">2024</p>
                      </div>
                      <div className="pt-[4vw] p-[0.4vw] font-medium">
                          <p className="text-[#54031F]">The BBIT Institute recently held a hackathon, bringing together tech enthusiasts to develop innovative solutions to real-world problems.</p>
                      </div>
                  </div>

                  {/* Repeat the above block for each event card */}
                  <div className="relative z-20 border-[1vw] border-[#F3F2FF] rounded-[1vw] overflow-hidden">
                      <img src="/events_images/event_img.jpg" alt="Event Image" className="w-full" />
                      <div className="absolute top-[13vw] -left-0 bg-[#450FA9] text-[#FFDE88] text-center w-16 z-50 overflow-visible font-[OrelegaOne]">
                          <p className="pt-[0.4vw] pb-[1vw] text-[2vw] font-[OrelegaOne]">24</p>
                          <p className="text-[1.2vw] uppercase font-[OrelegaOne]">July</p>
                          <p className="text-[1.2vw] pb-[1.3vw] font-[OrelegaOne]">2024</p>
                      </div>
                      <div className="pt-[4vw] p-[0.4vw] font-medium">
                          <p className="text-[#54031F]">The BBIT Institute recently held a hackathon, bringing together tech enthusiasts to develop innovative solutions to real-world problems.</p>
                      </div>
                  </div>

                  <div className="relative z-20 border-[1vw] border-[#F3F2FF] rounded-[1vw] overflow-hidden border-b-0">
                      <img src="/events_images/event_img.jpg" alt="Event Image" className="w-full" />
                      <div className="absolute top-[13vw] -left-0 bg-[#450FA9] text-[#FFDE88] text-center w-16 z-50 overflow-visible font-[OrelegaOne]">
                          <p className="pt-[0.4vw] pb-[1vw] text-[2vw] font-[OrelegaOne]">24</p>
                          <p className="text-[1.2vw] uppercase font-[OrelegaOne]">July</p>
                          <p className="text-[1.2vw] pb-[1.3vw] font-[OrelegaOne]">2024</p>
                      </div>
                      <div className="pt-[4vw] p-[0.4vw] font-medium">
                          <p className="text-[#54031F]">The BBIT Institute recently held a hackathon, bringing together tech enthusiasts to develop innovative solutions to real-world problems.</p>
                      </div>
                  </div>

                  <div className="relative z-20 border-[1vw] border-[#F3F2FF] rounded-[1vw] overflow-hidden border-t-0">
                      <img src="/events_images/event_img.jpg" alt="Event Image" className="w-full" />
                      <div className="absolute top-[13vw] -left-0 bg-[#450FA9] text-[#FFDE88] text-center w-16 z-50 overflow-visible font-[OrelegaOne]">
                          <p className="pt-[0.4vw] pb-[1vw] text-[2vw] font-[OrelegaOne]">24</p>
                          <p className="text-[1.2vw] uppercase font-[OrelegaOne]">July</p>
                          <p className="text-[1.2vw] pb-[1.3vw] font-[OrelegaOne]">2024</p>
                      </div>
                      <div className="pt-[4vw] p-[0.4vw] font-medium">
                          <p className="text-[#54031F]">The BBIT Institute recently held a hackathon, bringing together tech enthusiasts to develop innovative solutions to real-world problems.</p>
                      </div>
                  </div>

                  <div className="relative z-20 border-[1vw] border-[#F3F2FF] rounded-[1vw] overflow-hidden border-t-0">
                      <img src="/events_images/event_img.jpg" alt="Event Image" className="w-full" />
                      <div className="absolute top-[13vw] -left-0 bg-[#450FA9] text-[#FFDE88] text-center w-16 z-50 overflow-visible font-[OrelegaOne]">
                          <p className="pt-[0.4vw] pb-[1vw] text-[2vw] font-[OrelegaOne]">24</p>
                          <p className="text-[1.2vw] uppercase font-[OrelegaOne]">July</p>
                          <p className="text-[1.2vw] pb-[1.3vw] font-[OrelegaOne]">2024</p>
                      </div>
                      <div className="pt-[4vw] p-[0.4vw] font-medium">
                          <p className="text-[#54031F]">The BBIT Institute recently held a hackathon, bringing together tech enthusiasts to develop innovative solutions to real-world problems.</p>
                      </div>
                  </div>

                  <div className="relative z-20 border-[1vw] border-[#F3F2FF] rounded-[1vw] overflow-hidden border-t-0">
                      <img src="/events_images/event_img.jpg" alt="Event Image" className="w-full" />
                      <div className="absolute top-[13vw] -left-0 bg-[#450FA9] text-[#FFDE88] text-center w-16 z-50 overflow-visible font-[OrelegaOne]">
                          <p className="pt-[0.4vw] pb-[1vw] text-[2vw] font-[OrelegaOne]">24</p>
                          <p className="text-[1.2vw] uppercase font-[OrelegaOne]">July</p>
                          <p className="text-[1.2vw] pb-[1.3vw] font-[OrelegaOne]">2024</p>
                      </div>
                      <div className="pt-[4vw] p-[0.4vw] font-medium">
                          <p className="text-[#54031F]">The BBIT Institute recently held a hackathon, bringing together tech enthusiasts to develop innovative solutions to real-world problems.</p>
                      </div>
                  </div>
              </div>

              {/* Pagination */} 
              <div className="inline-flex mt-52 mb-10 ml-[29.5vw]">
                  <button className=" m-[0.5vw]  py-[0.5vw] px-[1.6vw] bg-white border rounded-[0.7vw] hover:bg-purple-100 border-[#27066F] text-[2vw] pb-[0.8vw] font-semibold text-[#27066F]">&lt;</button>
                  <button className=" text-[#27066F] m-[0.5vw] py-[0.5vw] px-[1vw] bg-white border rounded-[0.7vw] hover:bg-purple-100 border-[#27066F] text-[1.3vw]">2024</button>
                  <button className=" text-[#27066F] m-[0.5vw] py-[0.5vw] px-[1vw] bg-white border rounded-[0.7vw] hover:bg-purple-100 border-[#27066F] text-[1.3vw]">2023</button>
                  <button className=" text-[#27066F] m-[0.5vw] py-[0.5vw] px-[2vw] bg-white border rounded-[0.7vw] hover:bg-purple-100 border-[#27066F] text-[1.3vw]">...</button>
                  <button className=" text-[#27066F] m-[0.5vw] py-[0.5vw] px-[1vw] bg-white border rounded-[0.7vw] hover:bg-purple-100 border-[#27066F] text-[1.3vw]">2013</button>
                  <button className=" text-[#27066F] m-[0.5vw] py-[0.5vw] px-[1.6vw] bg-white border rounded-[0.7vw] hover:bg-purple-100 border-[#27066F] text-[2vw] pb-[0.8vw]">&gt;</button>
              </div>
          </div>
          <div className=" w-[8vw] h-[16vh] rounded-[20vh] bg-[#EAE6FF] -ml-[1.5vw] mt-[0vw] bottom-[0.6vh] top-[35vh] absolute z-0 "></div>
          <div className=" w-[20vw] h-[40vh] rounded-[20vh] bg-[#EAE6FF] ml-[3vw] mt-[0vw] bottom-[0.6vh] top-[87vh] absolute z-0"></div>
          <div className="w-[10vw] h-[20vh] rounded-[20vh] bg-[#EAE6FF] ml-[88.6vw] mt-[0vw] bottom-[0.6vh] top-[12vh] absolute z-0"></div>
          <div className="w-[20vw] h-[40vh] rounded-[25vh] bg-[#EAE6FF] ml-[70vw] mt-[0vw] bottom-[0.6vh] top-[75vh] absolute z-0"></div>

        </div>
      </>
  )
}

export default events;
