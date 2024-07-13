import { INTERNALS } from "next/dist/server/web/spec-extension/request";

export const departments = [

  {
    type: "sfi",
    name: "Civil",
    vision: `To be a leading center of excellence in civil engineering education, 
          research, and innovation, producing world-class professionals who drive 
          infrastructural advancements and contribute to sustainable development.`,
    mission: `1. To provide high-quality education in civil engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving 
          through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address 
          real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to 
          lifelong learning and leadership in the dynamic field of civil engineering.`,
    faculties: [
      {
        id: "civil-faculty-1",
        name: "Amitkumar D Raval",
        designation: "Lecturer",
        qualification: "M.E. (Construction Engineering & Management)",
        experience: "10 years",
        image: "/faculty/civil-sfi/civil-sfi-2.png"
      },
      {
        id: "civil-faculty-2",
        name: "Mr. Iliyas A. Kapadiya",
        designation: "Head of Department",
        qualification: "M.E. (Construction Engineering & Management)",
        experience: "13 years",
        image: "/faculty/civil-sfi/civil-sfi-1.png"
      },
      {
        id: "civil-faculty-2",
        name: "Prachi M Gor",
        designation: "Lecturer",
        qualification: "M.E. (WRM)",
        experience: "10 years",
        image: "/faculty/civil-sfi/civil-sfi-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ],

  },
  {
    type: "gia",
    name: "Civil",
    vision: `To be a leading center of excellence in civil engineering education, 
          research, and innovation, producing world-class professionals who drive 
          infrastructural advancements and contribute to sustainable development.`,
    mission: `1. To provide high-quality education in civil engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving 
          through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address 
          real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to 
          lifelong learning and leadership in the dynamic field of civil engineering.`,
    faculties: [
      {
        id: "civil-faculty-1",
        name: "Amitkumar D Raval",
        designation: "Lecturer",
        qualification: "M.E. (Construction Engineering & Management)",
        experience: "10 years",
        image: "/faculty/civil-sfi/civil-sfi-2.png"
      },
      {
        id: "civil-faculty-2",
        name: "Mr. Iliyas A. Kapadiya",
        designation: "Head of Department",
        qualification: "M.E. (Construction Engineering & Management)",
        experience: "13 years",
        image: "/faculty/civil-sfi/civil-sfi-1.png"
      },
      {
        id: "civil-faculty-2",
        name: "Prachi M Gor",
        designation: "Lecturer",
        qualification: "M.E. (WRM)",
        experience: "10 years",
        image: "/faculty/civil-sfi/civil-sfi-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ],

  },
  {
    type: "gia",
    name: "Computer",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-3",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      },
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-3",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      },


    ],

    sem: [
      {
        sem1: [
          {
            subcode: "123455",
            sub: "C",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          },
          {
            subcode: "123455",
            sub: "C",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          },
          {
            subcode: "123455",
            sub: "C",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          },
          {
            subcode: "123455",
            sub: "C",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          },
          {
            subcode: "123455",
            sub: "C",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          },
      
      
          
        ],
        sem2: [
          {
            subcode: "123455",
            sub: "C++",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          }
        ],
        sem3: [
          {
            subcode: "123455",
            sub: "DSA",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          }
        ],
        sem4: [
          {
            subcode: "123455",
            sub: "AOOP",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          }
        ],
        sem5: [
          {
            subcode: "123455",
            sub: "RDBMS",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          }
        ],
        sem6: [
          {
            subcode: "123455",
            sub: "Python",
            external: "70",
            mid:"30",
            internal:"25",
            practical:"25",
            total:"50"

          }
        ],
      },

    ],

    //  'Sem 1': [
    //       { course: 'Math 101', credits: 4, grade: 'A' },
    //       { course: 'Physics 101', credits: 3, grade: 'B+' },
    //     ],
    //     'Sem 2': [
    //       { course: 'Math 102', credits: 4, grade: 'A-' },
    //       { course: 'Chemistry 101', credits: 3, grade: 'B' },
    //     ],
    //     'Sem 3': [
    //       { course: 'Math 201', credits: 4, grade: 'B+' },
    //       { course: 'Biology 101', credits: 3, grade: 'A' },
    //     ],
    //     'Sem 4': [
    //       { course: 'Math 202', credits: 4, grade: 'A' },
    //       { course: 'Computer Science 101', credits: 3, grade: 'A-' },
    //     ],
    //     'Sem 5': [
    //       { course: 'Math 301', credits: 4, grade: 'B+' },
    //       { course: 'Statistics 101', credits: 3, grade: 'A' },
    //     ],
    //     'Sem 6': [
    //       { course: 'Math 302', credits: 4, grade: 'A' },
    //       { course: 'Economics 101', credits: 3, grade: 'A-' },
    //     ],

    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ],

    placement: [
      {
        sr: "1",
        company: "Accenture",
        package: "24 LPA"
      },
      {
        sr: "2",
        company: "TCS",
        package: "24LPA"
      },
      {
        sr: "3",
        company: "Infosys",
        package: "24LPA"
      },
      {
        sr: "4",
        company: "Wipro",
        package: "24LPA"
      },
      {
        sr: "5",
        company: "Reliance",
        package: "24LPA"
      },

    ],


  },
  {
    type: "sfi",
    name: "Computer",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ],

  },
  {
    type: "gia",
    name: "Electrical",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "sfi",
    name: "Electrical",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "gia",
    name: "Electronic & Communication",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "sfi",
    name: "Electronic & Communication",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "sfi",
    name: "Information Technology",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "gia",
    name: "Mechanical",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "sfi",
    name: "Mechanical",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "sfi",
    name: "Mechatronics",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "gia",
    name: "Science & Humanities",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  },
  {
    type: "sfi",
    name: "Science & Humanities",
    vision: `To be a leading center of excellence in computer engineering education, 
          research, and innovation, producing world-class professionals who drive 
          technological advancements and contribute to the global knowledge economy`,
    mission: `1. To provide high-quality education in computer engineering that equips students with strong theoretical foundations and practical skills.
  
          2. To foster a culture of innovation, critical thinking, and problem-solving through cutting-edge research and collaborative projects.
  
          3. To engage with industry partners and the community to address real-world challenges and contribute to sustainable development.
  
          4. To nurture ethical and socially responsible professionals committed to lifelong learning and leadership in the dynamic field of computer engineering.`,
    faculties: [
      {
        id: "computer-faculty-1",
        name: "Jiten P. Parmar",
        designation: "I/C Head of Department",
        qualification: "M.E. Computer",
        experience: "26 years",
        image: "/faculty/computer-gia/mask.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-2.png"
      },
      {
        id: "computer-faculty-2",
        name: "Bob Johnson",
        designation: "Assistant Professor",
        qualification: "M.Sc.",
        experience: "6 years",
        image: "/faculty/computer-gia/computer-3.png"
      }
    ],
    lab: [

      {
        title: "Programming Lab",
        detail: "Dive into the world of programming with our comprehensive courses in C, C++, Python, Java, and more. Our expert instructors and hands-on learning approach ensure you gain the skills and confidence needed to excel in the tech industry.",
        img: "/faculty/computer-gia/plab.png"
      },
      {
        title: "Tech Skill Lab",
        detail: "Here, you can master HTML, CSS, RDBMS, Excel, and more, guided by expert instructors and using cutting-edge technology. Whether you're a beginner or looking to advance your technical expertise, our lab provides the perfect environment for learning, innovation, and growth. Join us to enhance your capabilities and stay ahead in the digital age.",
        img: "/faculty/computer-gia/techlab.png",
      }
    ]
  }



];