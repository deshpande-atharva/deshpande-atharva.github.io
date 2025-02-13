import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    { Icon: FaReact, name: "React" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: FaHtml5, name: "HTML5" },
    { Icon: FaCss3Alt, name: "CSS3" },
    { Icon: FaGithub, name: "GitHub" },
    { Icon: FaGolang, name: "Golang" },
    { Icon: FaJava, name: "Java" },
    { Icon: DiJavascript, name: "JavaScript" },
    { Icon: FaSass, name: "Sass" },
    { Icon: FaBootstrap, name: "Bootstrap" },
    { Icon: FaWindows, name: "Windows" },
    { Icon: FaLinux, name: "Linux" },
    { Icon: FaAws, name: "AWS" },
    { Icon: VscAzureDevops, name: "DevOps" },
  ];
  return (
    <div className="skills">
      <div className="name">
        <span>My Versatile</span>
        <span>Capabilities</span>
      </div>
      <div className="skills-scattered">
        {skills.map(({ Icon, name }, index) => (
          <div
            key={name}
            className="skill-box"
            style={{
              "--random-offset": `${Math.random() * 20 - 10}px`,
              "--delay": `${index * 0.1}s`,
            }}
          >
            <Icon size={30} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
