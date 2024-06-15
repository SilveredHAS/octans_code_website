import { Box, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../public/asset/image/HeroImage.webp";
import { PRIMARY_BLACK } from "@/constants";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      component={"div"}
      id="hero-section"
      sx={{
        height: {
          xs: "50vh",
          sm: "48vh",
          smmd: "52vh",
          md: "63vh",
          lg: "91vh",
          xxl: "100vh",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundImage: { xs: `url(${HeroImage.src})`, lg: "none" },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: PRIMARY_BLACK,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: { xs: "100%", lg: "50%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", lg: "row" },
            pl: { xs: 2, lg: 10 },
            pb: { xs: 2, lg: 10 },
            backgroundColor: { xs: "rgba(0,0,0,0.5)", lg: PRIMARY_BLACK },
          }}
        >
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box>
              <Typography variant="h1" sx={{ color: "#FFC43A" }}>
                <span>&#x275B;&#x275B;</span>Transform Your Vision
              </Typography>
              <Typography variant="h1" sx={{ color: "#FECE5F" }}>
                into Reality with
              </Typography>
              <Typography variant="h1" sx={{ color: "#FCDD95" }}>
                Stunning Websites &
              </Typography>
              <Typography variant="h1" sx={{ color: "#FBEDCB" }}>
                Apps!<span>&#x275C;&#x275C;</span>
              </Typography>
            </Box>
          </motion.div>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "50%",
            display: { xs: "none", lg: "flex" },
          }}
        >
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={HeroImage.src}
              alt="HeroImage"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
