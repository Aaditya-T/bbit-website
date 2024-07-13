// Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';

const Sidebar = ({ departmentData }) => {
  const offsetValue = -90;
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    Events.scrollEvent.register('end', () => {
      const currentScrollPosition = window.scrollY;
      const sections = document.querySelectorAll('.deptDataMain > *');
      let currentSectionId = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.id;
        }
      });

      setCurrentSection(currentSectionId);
    });
  }, []);

  return (
    <div className="w-[12vw] ml-[6vw] relative mt-[40vh] text-[2.3vh] text-[#23527c] cursor-pointer">
      <ul>
        <li className='mb-[0.6vh] hover:font-semibold'>
          <Link to="about" smooth={true} duration={500} offset={offsetValue}>
            About Department
            {currentSection === 'about' && <i className="fas fa-arrow-up" />}
          </Link>
        </li>
        <li className='mb-[0.6vh] hover:font-semibold'>
          <Link to="faculty" smooth={true} duration={500} offset={offsetValue}>
            Faculties
            {currentSection === 'faculty' && <i className="fas fa-arrow-up" />}
          </Link>
        </li>
        <li className='mb-[0.6vh] hover:font-semibold'>
          <Link to="syllabus" smooth={true} duration={500} offset={offsetValue}>
            Syllabus
            {currentSection === 'syllabus' && <i className="fas fa-arrow-up" />}
          </Link>
        </li>
        <li className='mb-[0.6vh] hover:font-semibold'>
          <Link to="laboratory" smooth={true} duration={500} offset={offsetValue}>
            Laboratory
            {currentSection === 'laboratory' && <i className="fas fa-arrow-up" />}
          </Link>
        </li>
        <li className='mb-[0.6vh] hover:font-semibold'>
          <Link to="placements" smooth={true} duration={500} offset={offsetValue}>
            Placements
            {currentSection === 'placements' && <i className="fas fa-arrow-up" />}
          </Link>
        </li>
        <li className='mb-[0.6vh] hover:font-semibold'>
          <Link to="department-activities" smooth={true} duration={500} offset={offsetValue}>
            Department Activities
            {currentSection === 'department-activities' && <i className="fas fa-arrow-up" />}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;