import { Box, Typography } from "@mui/material";
import React from "react";

const ServiceModel = ({ src, name, content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "60vh",
        overflow: "hidden",
        // border: "4px solid #FFC43A",
        borderRadius: "1rem",
        backgroundColor: "#1B1C1F",
        backgroundColor: "#2e2e2e",
      }}
    >
      <Box sx={{ width: "100%", height: "70%" }}>
        <img
          src={src}
          alt="name"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            // border: "4px solid #FFC43A",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          p: 2,
          height: "30%",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "left", fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, textAlign: "left" }}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ServiceModel;
