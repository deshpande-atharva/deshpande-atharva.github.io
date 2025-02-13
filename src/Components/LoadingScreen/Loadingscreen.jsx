import React, { useState, useEffect } from "react";
import "./Loadingscreen.css";

const greetings = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "नमस्कार", language: "Marathi" },
  { text: "السلام عليكم", language: "Arabic" },
  { text: "Bonjour", language: "French" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Hola", language: "Spanish" },
  { text: "Ciao", language: "Italian" },
  { text: "你好", language: "Chinese" },
  { text: "안녕하세요", language: "Korean" },
];

const Loadingscreen = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      setFade(true);

      const timeout1 = setTimeout(() => {
        setFade(false);
      }, 400); // Fade out before changing text

      const timeout2 = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 500); // Change text after fade-out

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    } else {
      setTimeout(onFinish, 500); // Call the finish function after greetings end
    }
  }, [currentIndex, onFinish]);

  return (
    <div className="loading-screen">
      <div className={`greeting-container ${fade ? "fade-in" : "fade-out"}`}>
        <div className="greeting-text">
          {currentIndex < greetings.length
            ? `${greetings[currentIndex].text} 👋`
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Loadingscreen;
