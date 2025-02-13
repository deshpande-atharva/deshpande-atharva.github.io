import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Myimage from "../../img/myownimage.png";
import thumbsup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import glasses from "../../img/glassesimoji.png";

export const Intro = () => {
  return (
    <div className="intro">
      {/* the into is divided into 2 parts. left for content and right for the image */}
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am </span>
          <span>Atharva Deshpande</span>
          <span>
            Passionate Front-End Developer, aspiring Full-Stack Engineer, and
            tech enthusiast. I turn ideas into visually stunning, functional,
            and scalable digital experiences!
          </span>
        </div>
        <button className="button-hireme i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/deshpande-atharva">
            <img src={Github} alt="" />
          </a>
          <a href="https://linkedin.com/in/atharva-deshpande0205">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Myimage} alt="" />
        <img src={glasses}></img>
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer"></FloatingDiv>
        </div>
        <div style={{ top: "18rem", left: "-10rem" }}>
          <FloatingDiv
            image={thumbsup}
            txt1="Full-Stack"
            txt2="Developer"
          ></FloatingDiv>
        </div>
        {/* Blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-12rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
