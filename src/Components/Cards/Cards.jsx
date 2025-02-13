// import React from "react";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Box } from "@mui/material";
// import "./Cards.css";

// const Cards = ({ image, title, content }) => {
//   //   return (
//   //     <Card
//   //       className="myCard"
//   //       sx={{
//   //         position: "relative",
//   //         maxWidth: "17rem",
//   //         maxHeight: "20rem",
//   //         backgroundColor: "#fcfcfc",
//   //         border: "2px solid var(--gray)",
//   //         borderRadius: "20px",
//   //         overflow: "hidden",
//   //         transition: "all 0.3s ease-in-out",
//   //         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   //         "&:hover": {
//   //           maxHeight: "24rem",
//   //           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
//   //         },
//   //       }}
//   //     >
//   //       <CardMedia sx={{ height: "140px" }} image={image} title={title} />
//   //       <Typography
//   //         gutterBottom
//   //         variant="h6"
//   //         component="div"
//   //         sx={{
//   //           fontWeight: "bold",
//   //           background: "-webkit-linear-gradient(90deg, #000000, #1e3c72)",
//   //           WebkitBackgroundClip: "text",
//   //           WebkitTextFillColor: "transparent",
//   //           fontFamily: "Vollkorn",
//   //           textAlign: "center",
//   //         }}
//   //       >
//   //         {title}
//   //       </Typography>
//   //       <Box
//   //         sx={{
//   //           padding: "16px",
//   //           opacity: 0,
//   //           transition: "opacity 0.3s ease-in-out",
//   //           textAlign: "center",
//   //           "&:hover": {
//   //             opacity: 1,
//   //           },
//   //         }}
//   //       >
//   //         <Typography
//   //           sx={{
//   //             color: "var(--gray)",
//   //             fontSize: "17px",
//   //           }}
//   //         >
//   //           {content}
//   //         </Typography>
//   //       </Box>
//   //     </Card>
//   //   );
//   return (
//     <Card
//       className="myCard"
//       sx={{
//         position: "relative",
//         width: "100%",
//         maxWidth: "300px", // Ensuring a consistent width for all cards
//         height: "380px", // Fixed height to make the cards uniform
//         backgroundColor: "#fcfcfc",
//         border: "2px solid var(--gray)",
//         borderRadius: "20px",
//         overflow: "hidden",
//         transition: "all 0.3s ease-in-out",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//         "&:hover": {
//           maxHeight: "380px", // Ensuring the hover effect maintains uniformity
//           boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
//         },
//       }}
//     >
//       <img
//         src={image}
//         alt={title}
//         style={{
//           width: "100%",
//           height: "200px",
//           maxHeight: "140px",
//           objectFit: "cover",
//         }}
//       />
//       <Typography
//         gutterBottom
//         variant="h6"
//         component="div"
//         sx={{
//           fontWeight: "bold",
//           background: "-webkit-linear-gradient(90deg, #000000, #1e3c72)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           fontFamily: "Vollkorn",
//           textAlign: "center",
//         }}
//       >
//         {title}
//       </Typography>
//       <Box
//         sx={{
//           padding: "16px",
//           height: "100px", // Ensuring content area has a fixed height
//           opacity: 0,
//           transition: "opacity 0.3s ease-in-out",
//           textAlign: "center",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           "&:hover": {
//             opacity: 1,
//           },
//         }}
//       >
//         <Typography sx={{ color: "var(--gray)", fontSize: "17px" }}>
//           {content}
//         </Typography>
//       </Box>
//     </Card>
//   );
// };

// export default Cards;

import React, { useState } from "react";
import { Card, CardMedia, Typography, Box, Collapse } from "@mui/material";
import "./Cards.css";

const Cards = ({ image, title, content }) => {
  // State to control the collapse behavior
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the collapse state when the title is clicked
  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card
      className="myCard"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "300px", // Ensuring a consistent width for all cards
        height: isOpen ? "500px" : "380px", // Adjust height based on collapse state
        backgroundColor: "#fcfcfc",
        border: "2px solid var(--gray)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        "&:hover": {
          maxHeight: "500px", // Increase height when hovered, if the card is collapsed
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          fontWeight: "bold",
          background: "-webkit-linear-gradient(90deg, #000000, #1e3c72)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Vollkorn",
          textAlign: "center",
          cursor: "pointer", // Make the title clickable
        }}
        onClick={handleCardClick} // Toggle on title click
      >
        {title}
      </Typography>

      {/* Collapsible content section */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{ padding: "16px" }}>
          <Typography sx={{ color: "var(--gray)", fontSize: "17px" }}>
            {content}
          </Typography>
        </Box>
      </Collapse>
    </Card>
  );
};

export default Cards;
