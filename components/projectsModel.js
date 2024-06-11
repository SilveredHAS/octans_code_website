import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const ProjectsModel = ({ src, name, link, desc }) => {
  return (
    <a href={link} target="_blank">
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "0.5rem",
          backgroundColor: "black",
          height: "100%",
          position: "relative",
        }}
      >
        <Box sx={{ height: "100%" }}>
          <img
            src={src}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.8)",
            width: "100%",
            bottom: 0,
            height: "4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: "lightgray", fontWeight: 600 }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: "left",
              color: "#FFC43A",
              fontWeight: 600,
              mt: 0.5,
            }}
          >
            {desc}
          </Typography>
        </Box>
      </Paper>
    </a>
  );
};

export default ProjectsModel;
