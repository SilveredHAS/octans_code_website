import { Box, Paper, Typography, duration } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const ProjectsModel = ({ src, name, link, desc, content }) => {
  const textColor = "white";
  return (
    <a href={link} target="_blank">
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "steelblue",
          backgroundColor: "darkslategray",
          // backgroundColor: "lightskyblue",
        }}
      >
        <Box>
          <img
            src={src}
            alt={name}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: { xs: 1, sm: 2, xl: 3, xxl: 3.5, xxxl: 4.5 },
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", color: textColor, fontWeight: 600 }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: "left",
              color: "gold",
              fontWeight: 600,
              mt: 0.5,
            }}
          >
            {desc}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: "left",
              color: textColor,
              fontWeight: 300,
              mt: 2,
            }}
          >
            {content}
          </Typography>
        </Box>
      </Paper>
    </a>
  );
};

export default ProjectsModel;
