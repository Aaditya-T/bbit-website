"use client";
import React, { useState, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState('');

  const handleScroll = (event) => {
    setSelectedSection(event.target.value);
  };

  useEffect(() => {
    if (selectedSection) {
      scroller.scrollTo(selectedSection, {
        duration: 500,
        smooth: true,
        offset: -90 // Adjust this offset value as needed
      });
    }
  }, [selectedSection]);

  return (
    <div className="text-[2.3vh] text-[#54031F] cursor-pointer z-50">
      <div className='hidden md:flex lg:flex mt-[25vh] fixed'>
        <ul>
          {['about', 'faculty members', 'laboratory', 'timetable', 'syllabus', 'activities'].map((section, index) => (
            <li key={index} className='mb-[0.6vh] hover:font-semibold'>
              <Link to={section} smooth={true} duration={500}>
                {section.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <select 
        onChange={handleScroll}
        className='text-start lg:hidden md:hidden fixed bg-[#EAE6FF] h-10 w-[80vw] mt-[10vh] ml-[10vw] rounded-xl border-[#54031F] border text-[#54031F] z-[9999]'
      >
        {['about', 'faculty members', 'laboratory', 'timetable', 'syllabus', 'activities'].map((section, index) => (
          <option key={index} value={section}>
              {section.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sidebar;
