import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const ServiceModel = ({ src, name, content }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: {
            xs: "52vh",
            xsm: "25rem",
            xsmm: "39vh",
            sm: "52vh",
            smmd: "46vh",
            md: "50vh",
            mdlg: "66vh",
            lggxl: "64vh",
            lgxxl: "55vh",
            lgxl: "50vh",
            xl: "54vh",
            xxl: "50vh",
          },
          overflow: "hidden",
          // border: "4px solid #FFC43A",
          borderRadius: "1rem",
          backgroundColor: "#2e2e2e",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: {
              xs: "60%",
              xsm: "65%",
              sm: "73%",
              md: "70%",
              mdlg: "70%",
            },
          }}
        >
          <img
            src={src}
            alt="name"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              // border: "4px solid #FFC43A",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            p: { xs: 1, sm: 2, mdlg: 2 },
            height: {
              xs: "40%",
              xsm: "35%",
              sm: "27%",
              md: "30%",
              mdlg: "30%",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              fontWeight: 600,
              mt: { xs: 1, mdlg: 0, xxl: 1, xxxl: 1.5, xxxxxl: 2 },
            }}
          >
            {name}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: "left" }}>
            {content}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ServiceModel;
