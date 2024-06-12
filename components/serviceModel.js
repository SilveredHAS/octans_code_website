import { Box, Typography } from "@mui/material";
import React from "react";

const ServiceModel = ({ src, name, content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { xs: "50vh", xsm: "42vh", lg: "60vh" },
        overflow: "hidden",
        // border: "4px solid #FFC43A",
        borderRadius: "1rem",
        backgroundColor: "#1B1C1F",
        backgroundColor: "#2e2e2e",
      }}
    >
      <Box sx={{ width: "100%", height: { xs: "60%", lg: "70%" } }}>
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
          p: { xs: 1, lg: 2 },
          height: { xs: "40%", lg: "30%" },
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "left", fontWeight: 600, mt: { xs: 1, lg: 0 } }}
        >
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
