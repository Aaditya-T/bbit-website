import { useState, useEffect } from "react";

const Events = () => {
    const [eventData, setEventData] = useState(null);
    const [error, setError] = useState(false);
    const [currentYear, setCurrentYear] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state
    const eventsPerPage = 30;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading
            try {
                const response = await fetch('./api/dept/EventData');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEventData(data);
                // Set the initial year to the first available year
                if (data.length > 0) {
                    const years = Array.from(new Set(data.map(event => event.year))).sort();
                    setCurrentYear(years[0]);
                }
            } catch (error) {
                setError(true);
                console.error("Fetch error:", error);
            } finally {
                setLoading(false); // Stop loading
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

    const renderYearButtons = () => {
        const years = Array.from(new Set(eventData.map(event => event.year))).sort();
        return years.map(year => (
            <button
                key={year}
                onClick={() => handleYearClick(year)}
                className={`border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center ${currentYear === year ? 'bg-[#27066F] text-white' : ''}`}
            >
                {year}
            </button>
        ));
    };

    return (
        <div className="mt-[10vh] mb-[20vh]">
            <div className="px-[5vw] bg-gradient-to-t from-[#FFC84A] to-[#F3F2FF] h-[40vh]">
                <h1 className="text-[4vw] font-light text-center font-OrelegaOne text-[--text-primary]">Events</h1>
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
                    <div className="grid grid-cols-3 gap-[5vw] mb-[10vh] -mt-[15vh] px-[5vw]">
                        {displayedEvents.length > 0 ? (
                            displayedEvents.map((event, i) => (
                                <div className="w-full h-[50vh] bg-[#F3F2FF] rounded-[2vh] border-[1vw] border-[#F3F2FF]" key={i}>
                                    <div 
                                        className="h-[30vh] rounded-t-[0.2vh] bg-cover bg-center"
                                        style={{ backgroundImage: `url(https://y4xgzczst4lpi3wu.public.blob.vercel-storage.com${event.image_path})` }}
                                    />
                                    <div className="px-[2vh] py-[2vh]">
                                        <p className="text-[1vw] font-light text-center text-[--text-primary]">{event.desc}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-3 text-center text-[1vw] font-light text-[--text-primary]">No events for this year...</p>
                        )}
                    </div>

                    {/* pagination */}
                    <div className="flex justify-center gap-[2vh] mb-[30vh]">
                        <button
                            onClick={handlePrevClick}
                            className="border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center"
                            disabled={!eventData || !currentYear || currentYear === Math.min(...Array.from(new Set(eventData.map(event => event.year)))).toString()}
                        >
                            <svg width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" /></svg>
                        </button>

                        {renderYearButtons()}

                        <button
                            onClick={handleNextClick}
                            className="border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center"
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
