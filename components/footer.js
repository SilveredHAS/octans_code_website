"use client";
import { Box, Button, Divider, Typography, styled } from "@mui/material";
import React from "react";

const Footer = () => {
  const navList = ["Home", "About Us", "Services", "Projects", "Contact Us"];

  const handleOnClick = (item) => {
    if (item === "Home") {
      scrollToSection("hero-section");
    } else if (item === "About Us") {
      scrollToSection("about-section");
    } else if (item === "Services") {
      scrollToSection("services-section");
    } else if (item === "Projects") {
      scrollToSection("projects-section");
    } else if (item === "Contact Us") {
      scrollToSection("contactus-section");
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1C1D20",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 6,
        pb: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xsm: "95%", sm: "90%", lg: "60%", xxxl: "50%" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {navList.map((item, index) => (
          <Button
            disableRipple
            onClick={() => handleOnClick(item)}
            key={index}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#1C1D20",
              color: "white",
              "&:hover": {
                backgroundColor: "#1C1D20",
              },
            }}
          >
            <Typography variant="body2">{item}</Typography>
          </Button>
        ))}
      </Box>
      <Box sx={{ width: "100%", mt: 6 }}>
        <Divider sx={{ backgroundColor: "#AEAEAE" }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ color: "white", mt: 2 }}>
          Copyrights @ OctansCode | All Rights Reservered
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
