// Sidebar.js
import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Sidebar = ({ departmentData }) => {
  const offsetValue = -90;
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      setCurrentSection(to);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={offsetValue}
            activeClass="active"
          >
            About Department
            {currentSection === "about" && (
              <div className="absolute top-2 -left-7 w-6 h-6">
                <svg
                  width="50"
                  height="36"
                  viewBox="0 0 50 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9272 7.7317L39.776 17.5308L26.0119 27.4191M37.8585 17.537L9.86198 17.6273"
                    stroke="#54031F"
                    stroke-width="4.03124"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
          </Link>
        </li>
        <li>
          <Link to="faculty" smooth={true} duration={500} offset={offsetValue}>
            Faculties
            {currentSection === "faculty" && (
              <div className="absolute top-12 -left-7 w-6 h-6">
                <svg
                  width="50"
                  height="36"
                  viewBox="0 0 50 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9272 7.7317L39.776 17.5308L26.0119 27.4191M37.8585 17.537L9.86198 17.6273"
                    stroke="#54031F"
                    stroke-width="4.03124"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}{" "}
          </Link>
        </li>
        <li>
          <Link to="syllabus" smooth={true} duration={500} offset={offsetValue}>
            Syllabus
            {currentSection === "syllabus" && (
              <div className="absolute top-[88px] -left-7 w-6 h-6">
                <svg
                  width="50"
                  height="36"
                  viewBox="0 0 50 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9272 7.7317L39.776 17.5308L26.0119 27.4191M37.8585 17.537L9.86198 17.6273"
                    stroke="#54031F"
                    stroke-width="4.03124"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="lab-container"
            smooth={true}
            duration={500}
            offset={offsetValue}
          >
            Laboratory
            {currentSection === "lab-container" && (
              <div className="absolute top-32 -left-7 w-6 h-6">
                <svg
                  width="50"
                  height="36"
                  viewBox="0 0 50 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9272 7.7317L39.776 17.5308L26.0119 27.4191M37.8585 17.537L9.86198 17.6273"
                    stroke="#54031F"
                    stroke-width="4.03124"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="placements"
            smooth={true}
            duration={500}
            offset={offsetValue}
          >
            Placements
            {currentSection === "placements" && (
              <i className="fas fa-arrow-up" />
            )}
          </Link>
        </li>
        <li>
          <Link
            to="department-activities"
            smooth={true}
            duration={500}
            offset={offsetValue}
          >
            Department Activities
            {currentSection === "department-activities" && (
              <i className="fas fa-arrow-up" />
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
