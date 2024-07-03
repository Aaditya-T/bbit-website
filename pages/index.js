import React from "react";
import { Navbar } from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="welcome">Welcome to B & B Institute Of Technology</h1>
        <h5 className="subwelcome">
          Unlock your potential with innovative courses and hands-on learning
          opportunities.
        </h5>
        <div className="aloo">
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
        </div>
        <div className="wave">
        <img className="tabframe" src="/home/wavetry.svg" alt="Alumni" />
          {/* <svg
            width="1440"
            height="500"
            viewBox="0 50 1440 987"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
              M59.3635 223.859
              
              C30.9891 216.502 -0.136475 210 -0.136475 213.359
              
              V820
              
              H698.5
              
              H1470
              
              V0.858704
              
              C1440 0.858704 1422 1.35878 2000 17
              
              C600 -50 1000 450 590 490
              
              C200 550 213 265.237 59.3635 223.859Z"
              fill="url(#paint0_linear_86_118)"           
            />
            <defs>
              <linearGradient
                id="paint0_linear_86_118"
                x1="720"
                y1="768"
                x2="720"
                y2="0.999944"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3F2FF" />
                <stop offset="0.24" stop-color="#AB86F7" />
                <stop offset="0.44" stop-color="#8146F2" />
                <stop offset="0.711667" stop-color="#5F13EE" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
        <div className="tabletframe tabletframe-scaled">
          <object
            className="tabframe"
            type="image/svg+xml"
            data="/home/tablet.svg"
          ></object>
          <div className="ellipse1"></div>
          <div className="ellipse2"></div>
          <div className="ellipse3"></div>
          <div className="ellipse4"></div>
          <div className="ellipse5"></div>
          <div className="ellipse6"></div>
          <div className="rectangle"></div>
          <div className="psychology"></div>

        </div>
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
