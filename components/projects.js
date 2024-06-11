import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectsModel from "./projectsModel";
import ProjectImage from "../public/asset/image/ProjectImage.png";
import SilveredProjectImage from "../public/asset/image/SilveredProjectImage.png";

const Projects = () => {
  return (
    <div
      id="projects-section"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "90vh",
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
            width: "85%",
            height: "100%",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              <ProjectsModel
                src={ProjectImage.src}
                name={"Eraliamman Charitable Trust"}
                link={"https://www.eraliammancharitabletrust.com/"}
                desc={"Custom Website"}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ProjectsModel
                src={ProjectImage.src}
                name={"Two Wheeler Mechanic Foundation"}
                link={"https://www.twowheelermechanicfoundation.com/"}
                desc={"Business Website"}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ProjectsModel
                src={SilveredProjectImage.src}
                name={"Silvered Store"}
                link={"https://www.silvered.store/"}
                desc={"E-Commerce Website"}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
