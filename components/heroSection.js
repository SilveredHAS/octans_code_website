import { Box, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../public/asset/image/HeroImage.png";
import { PRIMARY_BLACK } from "@/constants";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      style={{ height: "91vh", backgroundColor: PRIMARY_BLACK }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "50%",
            display: "flex",
            alignItems: "center",
            pl: 10,
            pb: 10,
          }}
        >
          <Box>
            <Typography variant="h1" sx={{ color: "#FFC43A" }}>
              <span>&#x275B;&#x275B;</span>Transform Your Vision
            </Typography>
            <Typography variant="h1" sx={{ color: "#FECE5F" }}>
              into Reality with Our
            </Typography>
            <Typography variant="h1" sx={{ color: "#FCDD95" }}>
              Stunning Websites &
            </Typography>
            <Typography variant="h1" sx={{ color: "#FBEDCB" }}>
              Apps!<span>&#x275C;&#x275C;</span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ height: "100%", width: "50%" }}>
          <img
            src={HeroImage.src}
            alt="HeroImage"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default HeroSection;
