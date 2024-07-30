import { useState, useEffect } from "react";

const Events = () => {
    const [eventData, setEventData] = useState(null);
    const [error, setError] = useState(false);
    const [currentYear, setCurrentYear] = useState(null);
    const [loading, setLoading] = useState(true);
    const eventsPerPage = 30;

    const renderYearButtons = () => {
        const years = Array.from(new Set(eventData.map(event => event.year))).sort();
        const firstYear = years[0];
        const lastYear = years[years.length - 1];
    
        const handleYearClick = (year) => {
            setCurrentYear(year);
        };
    
        return years.map((year, index) => {
            if (
                year === firstYear ||
                year === lastYear ||
                year === currentYear ||
                year === currentYear - 1 ||
                year === currentYear + 1
            ) {
                return (
                    <button
                        key={year}
                        onClick={() => handleYearClick(year)}
                        className={`border-[0.2vh] border-[#27066F] px-[1.5vh] py-[1vh] rounded-[1vh] w-[6vh] h-[6vh] flex justify-center items-center ${currentYear === year ? 'bg-[#27066F] text-white' : ''}`}
                    >
                        {year}
                    </button>
                );
            } else if (
                (index === 1 && currentYear > firstYear + 1) ||
                (index === years.length - 2 && currentYear < lastYear - 1)
            ) {
                return (
                    <span key={year} className="w-[2vw] h-[6vh] flex justify-center items-center">
                        ...
                    </span>
                );
            } else {
                return null;
            }
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('./api/dept/EventData');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEventData(data);
                if (data.length > 0) {
                    const years = Array.from(new Set(data.map(event => event.year))).sort();
                    setCurrentYear(years[0]);
                }
            } catch (error) {
                setError(true);
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleYearClick = (year) => {
        setCurrentYear(year);
    };

    const handlePrevClick = () => {
        const years = Array.from(new Set(eventData.map(event => event.year))).sort();
        const currentIndex = years.indexOf(currentYear);
        if (currentIndex > 0) {
            setCurrentYear(years[currentIndex - 1]);
        }
    };

    const handleNextClick = () => {
        const years = Array.from(new Set(eventData.map(event => event.year))).sort();
        const currentIndex = years.indexOf(currentYear);
        if (currentIndex < years.length - 1) {
            setCurrentYear(years[currentIndex + 1]);
        }
    };

    const groupedEvents = eventData ? eventData.filter(event => event.year === currentYear) : [];
    const displayedEvents = groupedEvents.slice(0, eventsPerPage);

    return (
        <div className="mt-[9.5vh] mb-[20vh] ">
            <div className="px-[5vw] h-[20vh]">
                <h1 className="text-[2.5vw] font-light text-center font-OrelegaOne text-[--text-primary]">Events</h1>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <p className="text-[1vw] font-light text-[--text-primary]">Loading events...</p>
                </div>
            ) : error ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <p className="text-[1vw] font-light text-red-600">Error loading events. Please try again later.</p>
                </div>
            ) : (
                <>
                    {/* big cards with desc */}
                    <div className="bg-gradient-to-t from-[#FFC84A] to-[#F3F2FF] h-[24vh] -mt-[15vh]"></div>
                    <div className="grid grid-cols-3 gap-[5vw] mb-[10vh] -mt-[11vh] px-[5vw]">
                        {displayedEvents.length > 0 ? (
                            displayedEvents.map((event, i) => (
                                <div className="w-full bg-[#F3F2FF] rounded-[5vh]" key={i}>
                                    <div 
                                        className="h-[32vh] bg-cover bg-center mt-[3vh] rounded-t-[5vh]"
                                        style={{ backgroundImage: `url(https://y4xgzczst4lpi3wu.public.blob.vercel-storage.com${event.image_path})` }}
                                    />
                                    <div className="px-[2vh] py-[2vh]">
                                        <p className="text-[1vw] font-normal text-center text-[--text-primary]">{event.desc}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-3 text-center text-[1vw] font-light text-[--text-primary]">No events for this year...</p>
                        )}
                    </div>

                    {/* pagination */}
                    <div className="flex justify-center gap-[1.7vh] mb-[34vh] mt-[14vh] text-[2vh]">
                        <button
                            onClick={handlePrevClick}
                            className="border-[0.2vh] border-[#27066F] px-[1vw] py-[1vh] rounded-[1vh] w-[3vw] h-[6vh] flex justify-center items-center"
                            disabled={!eventData || !currentYear || currentYear === Math.min(...Array.from(new Set(eventData.map(event => event.year)))).toString()}
                        >
                            <svg width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" /></svg>
                        </button>

                        {renderYearButtons()}

                        <button
                            onClick={handleNextClick}
                            className="border-[0.2vh] border-[#27066F] px-[1vw] py-[1vh] rounded-[1vh] w-[3vw] h-[6vh] flex justify-center items-center"
                            disabled={!eventData || !currentYear || currentYear === Math.max(...Array.from(new Set(eventData.map(event => event.year)))).toString()}
                        >
                            <svg width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768l50.432-56.768L659.2 512 197.632 960 147.2 903.232 528.704 512z" fill="#000000" /></svg>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Events;
