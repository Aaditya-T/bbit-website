import { useEffect, useState } from "react";

export default function Awards() {
  const [awardData, setAwardData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./api/dept/AwardData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAwardData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Error: {error}</h1>
      </div>
    );
  }
  if (!awardData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>No Award Data Available</h1>
      </div>
    );
  }
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
              <div><img
                src="/events_images/image1.png"
                className=" w[3.3vw] h-[6.6vw] -mt-[1.5vw] ml-[28.4vw] z-40 absolute"
                alt="badge">
              </img>
              </div>
              <div className=" text-center w-[3.3vw] h-[6.6vh] -top-[0.5vw] left-[30.05vw] text-purple-600 bg-white font-bold rounded-[40vw] z-50 relative ">
                <p className="text-center pt-[0.8vw] text-[1vw]">24/7</p>
              </div>
              <div
                className="text-[1.7vw] text-[#000] w-full font-black text-center py-[10vw] px-[13.58vw] top-[0vw] bg-[#D9D9D9] z-30 absolute rounded-t-[1vw]"
                style={{
                  backgroundImage: `url(https://y4xgzczst4lpi3wu.public.blob.vercel-storage.com${awardData[i]?.image})`,
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center', 
                  backgroundRepeat: 'no-repeat' ,
                }}
              ></div>

              <div className="mt-[43vh] ml-[1vw] font-semibold tracking-widest">{awardData[i]?.title}</div>
              <div className="ml-[1vw] font-semibold">{awardData[i]?.desc}</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}