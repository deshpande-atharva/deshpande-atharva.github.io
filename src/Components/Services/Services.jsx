import React from "react";
import "./Services.css";
import Card from "@mui/material/Card";
import Cards from "../Cards/Cards.jsx";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import card1 from "../../img/cardImage1.png";
import card2 from "../../img/backendImage.png";
import card3 from "../../img/webdevimage.jpg";
import card4 from "../../img/cloud.jpg";
import Slider from "react-slick";

function downloadCV() {
  const cvUrl = "../../resume/AtharvaDeshpandeResume.pdf"; // Ensure the file is in the public folder
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Atharva_Deshpande_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const Services = () => {
  const cardsData = [
    {
      image: card1,
      title: "Transforming Designs into Interactive Experiences",
      content:
        "With expertise in ReactJS, HTML5, CSS3, and JavaScript, I bring websites to life with responsive, modern designs...",
    },
    {
      image: card2,
      title: "Building Robust Back-End Systems",
      content:
        "I specialize in creating Node.js and Express-based APIs, ensuring secure and efficient data management...",
    },
    {
      image: card3,
      title: "Crafting Seamless Full-Stack Solutions",
      content:
        "As a full-stack developer, I bridge the gap between front-end and back-end development...",
    },
    {
      image: card4,
      title: "Optimizing Deployment & Infrastructure",
      content:
        "By using Docker, Kubernetes, and AWS, I streamline development and deployment pipelines...",
    },
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1899,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="services">
      {/* Left Side */}
      <div className="s-left">
        <span>My Expertise,</span>
        <span>Your Advantage</span>
        <span>
          <div class="glow-object"></div>
          As a versatile software developer, I offer
          <br />
          tailored IT solutions to meet your needs.
          <br /> With expertise in full-stack development,
          <br />I create responsive websites and applications using
          <br /> ReactJS, JavaScript, PostgreSQL and MongoDB. <br /> Proficient
          in tools like Docker, Kubernetes and Git , <br />I ensure seamless
          deployment and efficient collaboration.
          <br /> Whether it’s custom web development, database
          <br /> management, or software maintenance, I deliver scalable,
          <br /> high-quality solutions to bring your ideas to life.
        </span>
        <button className="btn btn-1" onClick={downloadCV}>
          Download CV
        </button>
        <div className="blur s-blur1"></div>
      </div>

      {/* Right Side */}
      <div className="s-right">
        {/* Carousel with Cards */}
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              image={card.image}
              title={card.title}
              content={card.content}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
