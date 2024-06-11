import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MeetingImage from "../public/asset/image/aboutus.png";
import { PRIMARY_BLACK } from "@/constants";

const AboutUs = () => {
  //   const weProvideList = ["Expert Team"];
  const weProvideList = [
    "Expert Team",
    "Premium Design",
    "Customer-Centric Approach",
    "Scalable Architecture",
    "On-Time Delivery",
    "24/7 Maintenance Support",
  ];
  return (
    <div
      id="about-section"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 3,
        flexGrow: 1,
        backgroundColor: PRIMARY_BLACK,
      }}
    >
      <Box sx={{ width: "95%" }}>
        <Grid container spacing={4} alignItems={"center"}>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "0.8rem",
              }}
            >
              <img
                src={MeetingImage.src}
                alt="Meeting Image"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "inherit",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <Typography variant="h1">
                Establish your online online online online with Octans Code
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  mb: 4,
                  borderLeft: "3.5px solid #FFC43A",
                  pl: 1,
                  color: "lightgray",
                }}
              >
                Our team specializes in creating custom websites and mobile
                applications that meets the unique needs of our clients. We
                provide
              </Typography>
              <Box>
                {weProvideList.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#FFC43A",
                      }}
                    >
                      &#x2192;
                    </Typography>{" "}
                    <Typography variant="subtitle1" sx={{ ml: 2, mt: 0.5 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutUs;
