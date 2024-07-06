import React from "react";
import { Navbar } from "../components/navbar";
import FlexBanner from "../components/FlexBanner";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FlexBanner />
      <main>
        <h1 className="welcome">Welcome to B & B Institute Of Technology</h1>
        <h5 className="subwelcome">
          Unlock your potential with innovative courses and hands-on learning
          opportunities.
        </h5>
        {/* <div className="aloo">
          <svg
            width="430"
            height="410"
            viewBox="0 0 573 573"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.5371 206.053C-1.64914 302.858 -27.2962 410.615 42.1437 508.538C138.407 644.287 466.256 523.837 505.568 490.241C544.879 456.644 628.992 396.413 512.289 128.912C395.586 -138.589 179.263 75.9615 75.5371 206.053Z"
              fill="#FFC84A"
              stroke="#FFC84A"
              stroke-width="1.43688"
            />
          </svg>
        </div>*/}
        <div className="wave">
        <img className="tabframe" src="/home/wavetry.svg" alt="Alumni" />
        </div> 
        {/* <div className="tabletframe tabletframe-scaled">
          <object
            className="tabframe"
            type="image/svg+xml"
            data="/home/tablet.svg"
          ></object>
          <img src="/home/campus.jpg" className="campus"></img>
          <div className="ellipse1"></div>
          <div className="ellipse2"></div>
          <div className="ellipse3"></div>
          <div className="ellipse4"></div>
          <div className="ellipse5"></div>
          <div className="ellipse6"></div>
          <div className="rectangle"></div>
          <div className="psychology"></div>
          </div> */}

        {/* <div className="flex-banner">
          <img src='/home/banner-1.jpg' alt="college-images"></img>
          <img src='/home/banner-2.jpg' className='big' alt="college-images"></img>
          <img src='/home/banner-3.jpg' alt="college-images"></img>
          <img src='/home/banner-4.jpg' alt="college-images"></img>
        </div> */}

        <div className="activities">
          <object
            className="tabframe"
            type="image/svg+xml"
            data="/home/activity.svg"
          ></object>
          <div className="rec1">
            <h5>Activities</h5>
          </div>
        </div>
        <div className="virtual-tour">
          <object
            className="tabframe"
            type="image/svg+xml"
            data="/home/vtour.svg"
          ></object>
          <div className="rec2">
            <h5>Virtual Tour</h5>
          </div>
        </div>
        <div className="alumnis">
          <img className="tabframe" src="/home/alumni.svg" alt="Alumni" />
          <div className="rec3">
            <h5>Alumni</h5>
          </div>
        </div>

        <div className="section-2">
          <div className="news">
            <h1>LATEST NEWS</h1>

            <div className="date1">
            <h3>01 July 2024</h3>
            <p>Creato event result declaration</p>
            <img className="line1" src="/home/line.svg" alt="line" />
            <img className="tabframe1" src="/home/calendar.svg" alt="calendar" />
            </div>

            <div className="date2">
            <h3>01 July 2024</h3>
            <p>Creato event result declaration</p>
            <img className="line2" src="/home/line.svg" alt="line" />
            <img className="tabframe2" src="/home/calendar.svg" alt="calendar" />
            </div>

            <div className="date3">
            <h3>01 July 2024</h3>
            <p>Creato event result declaration</p>
            <img className="line3" src="/home/line.svg" alt="line" />
            <img className="tabframe3" src="/home/calendar.svg" alt="calendar" />
            </div>

            <button className="vw-1">View More</button>
          </div>

          <div className="chairman">
            <h4>Er. BHIKUBHAI B. PATEL</h4>
            <h1>CHAIRMAN's MESSAGE</h1>
            <p>Education plays a vital role in the socio-economic development of the country; Education that is thorough, purposeful and meets the requirements of today’s technological industry market. It is our deepest desire to serve the society by molding the technocrats of tomorrow. </p>
            <img className="tabframe" src="/home/chairman.svg" alt="Chairman" />
          </div>

          <div className="principal">
            <h4>Dr. K.M MAKWANA</h4>
            <h1>PRINCIPAL's MESSAGE</h1>
            <p>Education plays a vital role in the socio-economic development of the country; Education that is thorough, purposeful and meets the requirements of today’s technological industry market. It is our deepest desire to serve the society by molding the technocrats of tomorrow. </p>
            <img className="tabframe" src="/home/principal.svg" alt="Principal" />
          </div>
        </div>

      </main>
    </div>
  );
};

export default Home;
