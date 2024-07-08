import React from "react";
import { Navbar } from "../components/navbar";
import FlexBanner from "../components/FlexBanner";
import footer from "../components/footer.js";
import Footer from "../components/footer.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FlexBanner />
      <Footer />
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
    <div className="elli1"></div>
    <div className="elli2"></div>
    <div className="elli3"></div>
    <div className="elli4"></div>
    <div className="elli5"></div>

    
    <div className="svgContainer">
    
      <svg width="1277" height="1743" viewBox="0 0 1277 1740" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M379.453 0.371094L20.1876 128.018L360.241 266.911L717.584 135.89L379.453 0.371094Z" fill="#0C8ABD"/>
        <path d="M360.241 312.459V266.911L717.585 135.89V181.438L360.241 312.459Z" fill="#BEE8F9"/>
        <path d="M423 384.435V338.887L780.344 207.867V253.415L423 384.435Z" fill="#BEE8F9"/>
        <path d="M485.759 455.288V409.74L843.103 278.719V324.267L485.759 455.288Z" fill="#BEE8F9"/>
        <path d="M548.519 526.14V480.592L905.862 349.572V395.119L548.519 526.14Z" fill="#BEE8F9"/>
        <path d="M423 338.888L360.241 312.458L717.585 181.438L780.344 207.867L423 338.888Z" fill="#0C8ABD"/>
        <path d="M485.759 410.302L423 383.873L780.344 252.853L843.103 279.282L485.759 410.302Z" fill="#0C8ABD"/>
        <path d="M548.519 481.154L485.759 454.725L843.103 323.705L905.862 350.134L548.519 481.154Z" fill="#0C8ABD"/>
        <path d="M357.039 787.619L0.335205 905.706L369.847 1070.47L727.19 939.445L357.039 787.619Z" fill="#0C8ABD"/>
        <path d="M369.847 1116.01V1070.47L727.191 939.445V984.993L369.847 1116.01Z" fill="#BEE8F9"/>
        <path d="M432.606 1187.99V1142.44L789.95 1011.42V1056.97L432.606 1187.99Z" fill="#BEE8F9"/>
        <path d="M495.365 1258.84V1213.29L852.709 1082.27V1127.82L495.365 1258.84Z" fill="#BEE8F9"/>
        <path d="M558.125 1329.69V1284.15L915.469 1153.13V1198.67L558.125 1329.69Z" fill="#BEE8F9"/>
        <path d="M432.606 1142.44L369.847 1116.01L727.191 984.993L789.95 1011.42L432.606 1142.44Z" fill="#0C8ABD"/>
        <path d="M495.365 1213.86L432.606 1187.43L789.95 1056.41L852.709 1082.84L495.365 1213.86Z" fill="#0C8ABD"/>
        <path d="M558.125 1284.71L495.365 1258.28L852.709 1127.26L915.468 1153.69L558.125 1284.71Z" fill="#0C8ABD"/>
        <path d="M905.862 395.12L548.519 526.14L919.311 677.966L1271.53 545.259L905.862 395.12Z" fill="#DD6702"/>
        <path d="M548.519 573.937V526.14L919.311 677.966V726.326L548.519 573.937Z" fill="#FFDE88"/>
        <path d="M484.479 645.914V598.117L855.271 749.943V798.303L484.479 645.914Z" fill="#FFDE88"/>
        <path d="M420.438 716.766V668.969L791.231 820.796V869.155L420.438 716.766Z" fill="#FFDE88"/>
        <path d="M356.398 787.619V739.822L727.19 891.648V940.008L356.398 787.619Z" fill="#FFDE88"/>
        <path d="M484.479 598.117L548.519 573.937L919.311 726.326L855.271 749.943L484.479 598.117Z" fill="#DD6702"/>
        <path d="M420.438 669.532L484.479 645.352L855.271 797.74L791.231 821.358L420.438 669.532Z" fill="#DD6702"/>
        <path d="M356.398 740.384L420.438 716.204L791.231 868.593L727.19 892.21L356.398 740.384Z" fill="#DD6702"/>
        <path d="M915.469 1198.67L558.125 1329.13L928.277 1480.96L1276.65 1337L915.469 1198.67Z" fill="#DD6702"/>
        <path d="M557.484 1376.93L558.125 1329.13L928.276 1480.96V1529.32L557.484 1376.93Z" fill="#FFDE88"/>
        <path d="M493.444 1448.91V1401.11L864.236 1552.94V1601.3L493.444 1448.91Z" fill="#FFDE88"/>
        <path d="M429.404 1519.76V1471.96L800.196 1623.79V1672.15L429.404 1519.76Z" fill="#FFDE88"/>
        <path d="M365.364 1590.61V1542.81L736.156 1694.64V1743L365.364 1590.61Z" fill="#FFDE88"/>
        <path d="M493.444 1401.11L557.484 1376.93L928.276 1529.32L864.236 1552.94L493.444 1401.11Z" fill="#DD6702"/>
        <path d="M429.404 1472.52L493.444 1448.34L864.236 1600.73L800.196 1624.35L429.404 1472.52Z" fill="#DD6702"/>
        <path d="M365.364 1543.38L429.404 1519.2L800.196 1671.59L736.156 1695.2L365.364 1543.38Z" fill="#DD6702"/>
      </svg>
      
      <div className="rand">
        <div className="text2"><a href="#">Courses</a></div>
        <div className="text3"><a href="#">Hostels</a></div>
        <div className="text4"><a href="#">Events</a></div>
        <div className="text5"><a href="#">Awards & Achievements</a></div>
      </div>
      
      <div className="icon icon1"><img src="/stair_img/icon-1.png" alt="Icon 1"/></div>
      <div className="icon icon2"><img src="/stair_img/icon-2.png"  alt="Icon 2"/></div>
      <div className="icon icon3"><img src="/stair_img/icon-3.png"  alt="Icon 3"/></div>
      <div className="icon icon4"><img src="/stair_img/icon-4.png"  alt="Icon 4"/></div>
      <div className="icon icon5"><img src="/stair_img/pin.svg"  alt="Icon 5"/></div>
      <div className="icon icon6"><img src="/stair_img/pin.svg" alt="Icon 6"/></div>
      <div className="icon icon7"><img src="/stair_img/pin.svg" alt="Icon 7"/></div>
      <div className="icon icon8"><img src="/stair_img/pin.svg" alt="Icon 8"/></div>
      
    </div>

    <div>
      <div className="container">
        <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="66.701" height="199.999">
          <path d="M20.322 14.359C16.552 7.343 11.417 4.818 0 0v199.999h66.701s-18.94 -29.663 -19.994 -50.935c-1.138 -22.974 15.966 -41.011 9.287 -63.284 -4.559 -15.201 -6.774 -13.564 -15.296 -23.573 -10.837 -12.729 -16.607 -40.832 -20.376 -47.848" fill="#FB6BB0"/>
          <path d="M12.619 22.965C8.672 13.437 0 7.203 0 7.203V199.999h42.938s-9.997 -29.099 -9.287 -50.093c0.66 -19.516 11.136 -31.069 6.009 -50.093 -4.015 -14.898 -13.018 -18.822 -19.065 -33.208 -5.981 -14.229 -2.071 -29.386 -7.976 -43.639" fill="#42C2EE"/>
        </svg>
         <div className="content">
          <div className="vision">
            <h2>OUR VISION</h2>
            <p>
            At BBIT our vision is to create a nurturing and innovative environment where every student can thrive academically, socially, and personally. We aspire to be a leading institution recognized for excellence in education, fostering a culture of inclusivity, critical thinking, and lifelong learning. Through cutting-edge research, community engagement, and a commitment to sustainability, we aim to empower our students to become compassionate leaders and impactful global citizens.
            </p>
          </div>
          <div className="mission">
            <h2>OUR MISSION</h2>
            <ul>
              <li> &#8226; Prepare the student with strong fundamental concepts, analytical abilities & Problem solving skills.</li>
              <li> &#8226; Offer ambiance & Support to cultivate creativity & Innovation.</li>
              <li> &#8226; Disseminate quality training to enhance skills & Entrepreneurship for professional development.</li>
              <li> &#8226; Establish opportunities for the students and teachers for lifelong learning to meet the ever changing global technological standards.</li>
              <li> &#8226; Foster students to seek excellence in technical education.</li>
            </ul>
          </div>
        </div> 
      </div>
    </div> 

      </main>
    </div>
  );
};

export default Home;
