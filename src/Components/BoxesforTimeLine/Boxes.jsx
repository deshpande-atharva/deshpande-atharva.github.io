//
import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const Boxes = ({
  title,
  dates,
  position,
  description,
  alignment,
  index,
  isVisible,
}) => {
  const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
  return (
    <Box
      sx={{
        opacity: 0,
        animation: `${fadeIn} 0.5s ease-out forwards ${index * 2}s`,
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.2), inset 0 4px 6px rgba(255, 255, 255, 0.2)",
        maxWidth: "40%",
        backgroundColor: "#424242",
        color: "#E0E0E0",
        padding: "1.5rem",
        borderRadius: "20px",
        border: "1px solid #BDBDBD",
        position: "relative",
        "&::after": {
          zIndex: "1",
          content: '""',
          position: "absolute",
          top: "20%",
          transform: "translateY(-50%)",
          borderStyle: "solid",
          borderWidth: "10px",
          borderColor:
            alignment === "left"
              ? "transparent transparent transparent #424242"
              : "transparent #424242 transparent transparent", // Set border colors for left and right alignment
          left: alignment === "left" ? "100%" : "auto", // For left-side box, position arrow at the right edge
          right: alignment === "right" ? "100%" : "auto", // For right-side box, position arrow at the left edge
          marginLeft: alignment === "left" ? "-0px" : "auto", // Overlap effect for left box
          marginRight: alignment === "right" ? "-0px" : "auto", // Overlap effect for right box
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontFamily: "Vollkorn, serif",
          fontWeight: "bold",
          color: "#FFCC80",
          marginBottom: "8px",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
          color: "#BDBDBD",
          marginBottom: "8px",
        }}
      >
        {dates}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#A5D6A7",
          marginBottom: "8px",
        }}
      >
        {position}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "400",
          color: "#E0E0E0",
          lineHeight: "1.5",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Boxes;
