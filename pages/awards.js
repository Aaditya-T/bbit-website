import Link from "next/link";
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
      filterDataByYear(selectedYear);
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
      <div className="py-2 lg:py-1 md:py-1 lg:px-4 md:px-4 bg-[#D8D1FF] rounded-[1.5vh] mt-[15vh] mx-auto relative flex justify-center w-fit px-5">
        <h2
          id="laboratory"
          className="text-3xl text-[#27066F] font-bold"
        >
          Awards for {selectedYear}
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center mt-5">
        <h1 className="text-[2.6vh] font-bold mr-5">Select a Year:</h1>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="border-[0.3vh] p-[1vh] rounded-[1.5vh] text-[2vh] mt-1"
          >
            {years.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="flex-2 lg:p-[2.5vh] md:p-[2.5vh] mb-[25vh]">
        {noAwards ? (
          <div className="mb-[30vh] mt-[5vh] text-center flex flex-col items-center justify-center text-[3vh] font-bold text-[--text-primary]">
            <h1>No Awards during {currentYear} :/</h1>
            <span className="text-base">Please select another year</span>
            <span className="text-base mt-5">Or you can help us get more awards for the future years by taking admission! 
              <br />
              <Link href="/admission" className="text-[#27066F] font-bold underline">Click here to know more</Link>
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-y-[1vh]">
            {filteredData.map((award, i) => (
              <div
                key={i}
                className="mt-[10vh] relative lg:w-[23vw] md:w-[23vw] lg:h-[48vh] md:h-[48vh] border-[0.3vh] bg-purple-100 rounded-[1vw] border-[#27066F] mx-[2vw]"
              >
                <img
                  src="/events_images/awards-batch.svg"
                  className="lg:flex md:flex hidden w-[5vw] h-[10vh] -mt-[4vh] ml-[20vw] z-10 absolute"
                  alt="badge"
                />
                <div className="text-center lg:block md:block hidden  w-[2.4vw] md:h-[5.2vh] lg:-top-[2.5vh] md:-top-[2.5vh] lg:left-[21.3vw] md:left-[21.3vw] text-purple-600 bg-white font-bold rounded-[40vw] z-10 relative">
                  <p className="text-center pt-[1.3vh] text-[1.7vh]">24/7</p>
                </div>
                <div
                  className="text-[1.7vw] text-[#000] w-full h-[34vh] font-black text-center py-[10vh] top-[0vw] bg-[#D9D9D9] absolute rounded-t-[1vw]"
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
        )}
      </div>
    </div>
  );
}
