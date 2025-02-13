// import React, { useRef } from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import "./App.css";
// import Intro from "./Components/Intro/Intro";
// import Services from "./Components/Services/Services";
// import Experience from "./Components/Experience/Experience";
// import Skills from "./Components/Skills/Skills";
// import ContactMe from "./Components/ContactMe/ContactMe";

// function App() {
//   const homeRef = useRef(null);
//   const experienceRef = useRef(null);
//   const servicesRef = useRef(null);
//   const portfolioRef = useRef(null);
//   const contactRef = useRef(null);
//   return (
//     <div className="App">
//       <Navbar />
//       <Intro />
//       <Services />
//       <Experience></Experience>
//       <Skills></Skills>
//       <ContactMe></ContactMe>
//     </div>
//   );
// }

// export default App;
import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import ContactMe from "./Components/ContactMe/ContactMe";

function App() {
  // Creating refs for each section
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      {/* Passing refs to Navbar */}
      <Navbar
        homeRef={homeRef}
        experienceRef={experienceRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      {/* Wrapping components in divs with refs */}
      <div ref={homeRef}>
        <Intro />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
