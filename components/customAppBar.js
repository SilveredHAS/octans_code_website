"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppLogo from "../public/asset/image/AppLogo.png";
import { Button, Typography } from "@mui/material";
import { PRIMARY_BLACK } from "@/constants";

export default function CustomAppBar() {
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: PRIMARY_BLACK }}
        component={"div"}
      >
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: { xs: "none", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a href="/">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  width: {
                    xs: "13rem",
                  },
                }}
              >
                <img
                  src={AppLogo.src}
                  alt="AppLogo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </a>
            <Box
              sx={{
                display: "flex",
                width: "35%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {navList.map((item, index) => (
                  <Button
                    disableRipple
                    onClick={() => handleOnClick(item)}
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      transition: "all 0.4s linear",
                      "&:hover": {
                        color: "#FFC43A",
                        textDecoration: "2px solid #FFC43A underline",
                        textUnderlineOffset: "8px",
                      },
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Box>
            <Box>
              <Button
                disableRipple
                onClick={() => (window.location.href = "#contactus-section")}
                sx={{
                  backgroundColor: "#FFC43A",
                  color: "black",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  borderRadius: "0.2rem",
                  transition: "all 0.2s linear",
                  pl: 2,
                  pr: 2,
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "#FFC43A",
                    color: "black",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {"Let's Connect"}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
