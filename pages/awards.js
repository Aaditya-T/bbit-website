import { useEffect, useState } from "react";

export default function Awards() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [years, setYears] = useState([]);
  const [awardData, setAwardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noAwards, setNoAwards] = useState(false);

  useEffect(() => {
    const startYear = 2019;
    const yearsArray = [];
    for (let i = startYear; i <= currentYear; i++) {
      yearsArray.push(i);
    }
    setYears(yearsArray);
  }, [currentYear]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("./api/dept/AwardData");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setAwardData(data);
      setFilteredData(data); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    filterDataByYear(year);
  };

  const filterDataByYear = (year) => {
    const filtered = awardData.filter((award) => {
      const awardYear = new Date(award.date).getFullYear();
      return awardYear === parseInt(year);
    });
    setFilteredData(filtered);
    setNoAwards(filtered.length === 0);
  };

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
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-[23vh] mr-[80vw] absolute">
        <h1 className="text-[2.6vh] font-bold mb-[2vh]">Select a Year</h1>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="border-[0.3vh] p-[2vh] rounded-[1.5vh] mb-[2vh] text-[2vh]"
          >
            {years.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="flex-2 p-[2.5vh] pl-[10vw] mb-[25vh]">
        {noAwards ? (
          <div className="mb-[30vh] mt-[32vh] flex flex-col items-center justify-center text-[3vh] font-bold text-red-700">
            <h1>No Award Data Available</h1>
          </div>
        ) : (
          <div>
            <h1 className="flex -mb-[2vh] mt-[10vh] justify-center text-[3.5vh] font-bold">
              Awards for {selectedYear}
            </h1>

            <div className="grid grid-cols-3 gap-y-[1vh] font-[Outfit]">
              {filteredData.map((award, i) => (
                <div
                  key={i}
                  className="mt-[10vh] relative w-[23vw] h-[48vh] border-[0.3vh] bg-purple-100 rounded-[1vw] z-30 border-[#27066F] mx-[2vw]"
                >
                    <img
                      src="/events_images/awards-batch.svg"
                      className="w-[5vw] h-[10vh] -mt-[4vh] ml-[20vw] z-40 absolute"
                      alt="badge"
                    />
                  <div className="text-center w-[2.4vw] h-[5.2vh] -top-[2.5vh] left-[21.3vw] text-purple-600 bg-white font-bold rounded-[40vw] z-50 relative">
                    <p className="text-center pt-[1.3vh] text-[1.7vh]">24/7</p>
                  </div>
                  <div
                    className="text-[1.7vw] text-[#000] w-full h-[34vh] font-black text-center py-[10vh] top-[0vw] bg-[#D9D9D9] z-30 absolute rounded-t-[1vw]"
                    style={{
                      backgroundImage: `url(https://y4xgzczst4lpi3wu.public.blob.vercel-storage.com${award?.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="mt-[30vh] ml-[1vw] font-bold text-[2.3vh]">{award?.title}</div>
                  <div className="ml-[1vw] font-normal text-[1.8vh]">{award?.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
