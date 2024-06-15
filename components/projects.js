import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectsModel from "./projectsModel";
import ProjectImage from "../public/asset/image/Silvered1.png";
import EraliammanProjectImage from "../public/asset/image/eraliamman_trust.png";
import TMFProjectImage from "../public/asset/image/tmf.png";
import SilveredProjectImage from "../public/asset/image/Silvered1.png";

const Projects = () => {
  return (
    <Box
      component={"div"}
      id="projects-section"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: { xs: "1rem", lg: "3rem" },
        paddingBottom: { xs: "1rem", lg: "3rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // height: "90vh",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h2"
            sx={{ color: "#FCDD95", textAlign: "center", mb: 6 }}
          >
            Our&nbsp;
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "#FECE5F", textAlign: "center", mb: 6 }}
          >
            Projects
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: { xs: "80%", lg: "90%" },
            height: "100%",
          }}
        >
          <Grid
            container
            spacing={4}
            rowSpacing={{ xs: 4, sm: 8, md: 7, lg: 2 }}
          >
            <Grid item xs={12} lg={4}>
              <ProjectsModel
                src={EraliammanProjectImage.src}
                name={"Eraliamman Charitable Trust"}
                link={"https://www.eraliammancharitabletrust.com/"}
                desc={"Charity Website"}
                content={
                  "Developed a compassionate charity website to drive online donations and community engagement through compelling storytelling, intuitive navigation, and responsive design, fostering meaningful interactions and support."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ProjectsModel
                src={TMFProjectImage.src}
                name={"TMF"}
                link={"https://www.twowheelermechanicfoundation.com/"}
                desc={"Business Website"}
                content={
                  "Crafted a professional, modern business website showcasing expertise and services, emphasizing client trust and engagement, and featuring a sleek design and intuitive user-friendly interface for optimal user experience."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ProjectsModel
                src={SilveredProjectImage.src}
                name={"Silvered Store"}
                link={"https://www.silvered.store/"}
                desc={"E-Commerce Website"}
                content={
                  "Engineered a robust e-commerce platform designed for seamless shopping experiences, secure transactions, and scalable growth, empowering businesses with enhanced customer satisfaction and operational efficiency."
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
