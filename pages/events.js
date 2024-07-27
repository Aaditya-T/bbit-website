import { useState, useEffect } from "react";

const Events = () => {
    const [eventData, setEventData] = useState(null);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 1; // Number of events per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./api/dept/EventData');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEventData(data);
            } catch (error) {
                setError(true);
                console.error("Fetch error:", error);
            }
        };
        fetchData();
    }, []);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (eventData && currentPage < Math.ceil(eventData.length / eventsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = (currentPage - 1) * eventsPerPage;
    const displayedEvents = eventData ? eventData.slice(startIndex, startIndex + eventsPerPage) : [];
    const totalPages = eventData ? Math.ceil(eventData.length / eventsPerPage) : 1;

    const renderPaginationButtons = () => {
        const buttons = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => handlePageClick(i)}
                        className={`border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center ${currentPage === i ? 'bg-[#27066F] text-white' : ''}`}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            buttons.push(
                <button
                    key={1}
                    onClick={() => handlePageClick(1)}
                    className={`border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center ${currentPage === 1 ? 'bg-[#27066F] text-white' : ''}`}
                >
                    1
                </button>
            );

            if (currentPage > 3) {
                buttons.push(<span key="left-ellipsis" className="px-[1.5vh] py-[1vh] flex justify-center items-center">...</span>);
            }

            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => handlePageClick(i)}
                        className={`border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center ${currentPage === i ? 'bg-[#27066F] text-white' : ''}`}
                    >
                        {i}
                    </button>
                );
            }

            if (currentPage < totalPages - 2) {
                buttons.push(<span key="right-ellipsis" className="px-[1.5vh] py-[1vh] flex justify-center items-center">...</span>);
            }

            buttons.push(
                <button
                    key={totalPages}
                    onClick={() => handlePageClick(totalPages)}
                    className={`border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center ${currentPage === totalPages ? 'bg-[#27066F] text-white' : ''}`}
                >
                    {totalPages}
                </button>
            );
        }

        return buttons;
    };

    return (
        <div className="mt-[10vh] mb-[20vh]">
            <div className="px-[5vw] bg-gradient-to-t from-[#FFC84A] to-[#F3F2FF] h-[40vh]">
                <h1 className="text-[5vw] font-light text-center font-OrelegaOne text-[--text-primary]">Events</h1>
            </div>

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
                    <p className="col-span-3 text-center text-[1vw] font-light text-[--text-primary]">Loading events...</p>
                )}
            </div>

            {/* pagination */}
            <div className="flex justify-center gap-[2vh] mb-[30vh]">
                <button
                    onClick={handlePrevClick}
                    className="border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center"
                    disabled={currentPage === 1}
                >
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" /></svg>
                </button>

                {renderPaginationButtons()}

                <button
                    onClick={handleNextClick}
                    className="border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center"
                    disabled={eventData && currentPage === totalPages}
                >
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768l50.432-56.768L659.2 512 197.632 960 147.2 903.232 528.704 512z" fill="#000000" /></svg>
                </button>
            </div>
        </div>
    );
};

export default Events;
