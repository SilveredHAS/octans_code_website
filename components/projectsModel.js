import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const ProjectsModel = ({ src, name, link, desc }) => {
  const textColor = "white";
  return (
    <a href={link} target="_blank">
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "steelblue",
          backgroundColor: "darkslategray",
          background: "radial-gradient(145deg, #2f4f4f, #708090)",
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
            p: 1,
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
            Incapillo is a Pleistocene-age caldera – a depression formed by the
            collapse of a volcano – in La Rioja Province, Argentina. It is part
            of the southernmost volcanic centre in the Andean Central Volcanic
            Zone (CVZ)
          </Typography>
        </Box>
      </Paper>
    </a>
  );
};

export default ProjectsModel;
