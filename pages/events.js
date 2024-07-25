const Events = () => {
    return (
        <div className="mt-[10vh] mb-[20vh]">
            <div className="px-[5vw] bg-gradient-to-t from-[#FFC84A] to-[#F3F2FF] h-[40vh]">
                <h1 className="text-[5vw] font-light text-center font-OrelegaOne text-[--text-primary]">Events</h1>
            </div>

            {/* big cards with desc */}
            <div className="grid grid-cols-3 gap-[5vw] mb-[10vh] -mt-[15vh] px-[5vw]">
                {Array(4).fill().map((_, i) => (
                    <div className="w-full h-[50vh] bg-[#F3F2FF] rounded-[2vh] border-[1vw] border-[#F3F2FF]" key={i}>
                        <div className="h-[30vh] bg-[url('/events_images/event_img.jpg')] rounded-t-[0.2vh] bg-cover bg-center"></div>
                        <div className="px-[2vh] py-[2vh]">
                            <p className="text-[1vw] font-light text-center text-[--text-primary]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div className="flex justify-center gap-[2vh] mb-[30vh]">
                <button
                    className="border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center"
                >
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" /></svg>
                </button>

                {Array(4).fill().map((_, i) => (
                    <button
                        key={i}
                        className="border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center"
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    className="border border-[#27066F] px-[1.5vh] py-[1vh] rounded-xl w-[7vh] h-[7vh] flex justify-center items-center"
                >
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768l50.432-56.768L659.2 512 197.632 960 147.2 903.232 528.704 512z" fill="#000000" /></svg>
                </button>
            </div>

        </div>
    )
}

export default Events;
