// import React from "react";
// import Boxes from "../BoxesforTimeLine/Boxes";
import "./Experience.css";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptop,
  FaUniversity,
} from "react-icons/fa";

import React from "react";
import Boxes from "../BoxesforTimeLine/Boxes";
import "./Experience.css";

export const Experience = () => {
  const myExperiences = [
    {
      title: "Bachelor's Degree",
      dates: "Sept 2018- May 2022",
      position: "Student",
      description:
        "Specialized in Electronics and Telecommunication with a strong emphasis on software development and full-stack web technologies, learning both front-end and back-end development principles.",
    },
    {
      title: "Persistent Systems",
      dates: "Feb 2022- Aug 2023",
      position: "Software Engineer",
      description: [
        "Maintained the company's website using ReactJS, MongoDB, and PostgreSQL.",
        "Implemented new features, resolved JIRA tickets, and ensured seamless communication with overseas clients.",
        "Gained expertise in deployment tools such as Docker and Kubernetes while actively contributing to multiple IBM client projects.",
      ],
    },
    {
      title: "Satronics Enterprises",
      dates: "Aug 2023- April 2024",
      position: "Intern",
      description: [
        "Developed back-end web applications using Node.js and built interactive front-end interfaces using ReactJS.",
        "Contributed to web app development for Customer Engineering Projects, focusing on enhancing user experience and optimizing performance by reducing page load times by 15%.",
        "Hosted and deployed web apps on AWS, ensuring high availability and robust functionality.",
      ],
    },
    {
      title: "Master's Degree",
      dates: "Sept 2024- May 2026",
      position: "Student",
      description: [
        "Pursuing a Master's in Information Systems at Northeastern University, working on multiple projects with hands-on experience in full-stack development using ReactJS, JavaScript, SASS, and Bootstrap.",
      ],
    },
  ];

  return (
    <div className="experience">
      <div className="eheading">
        <span className="first-line">Evolution Through</span>
        <span className="second-line">Experience</span>
      </div>
      <div className="glow-object"></div>
      <div className="verticle-line">
        <div className="timeline-icon" style={{ top: "18%" }}>
          <FaGraduationCap />
        </div>
        <div className="timeline-icon" style={{ top: "37%" }}>
          <FaBriefcase />
        </div>
        <div className="timeline-icon" style={{ top: "61%" }}>
          <FaLaptop />
        </div>
        <div className="timeline-icon" style={{ top: "84.4%" }}>
          <FaUniversity />
        </div>
      </div>
      {myExperiences.map((exp, index) => {
        const alignment = index % 2 === 0 ? "left" : "right"; // Determine alignment
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: alignment === "left" ? "flex-start" : "flex-end",
              marginBottom: "20px",
            }}
          >
            <Boxes
              index={index}
              title={exp.title}
              dates={exp.dates}
              position={exp.position}
              description={exp.description}
              alignment={alignment} // Pass alignment as a prop
            />
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
