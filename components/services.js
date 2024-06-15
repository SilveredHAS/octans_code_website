import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceWebImage from "../public/asset/image/Service_Web.jpg";
import ServiceAppImage from "../public/asset/image/Service_App.jpg";
import ServiceDesignImage from "../public/asset/image/Service_Design.jpg";
import ServiceHostingImage from "../public/asset/image/Service_Hosting.jpg";
import ServiceMaintenanceImage from "../public/asset/image/Serive_Maintenance.jpg";
import SeoImage from "../public/asset/image/seo.jpg";
import ServiceModel from "./serviceModel";
import { PRIMARY_BLACK } from "@/constants";

const Services = () => {
  return (
    <div
      id="services-section"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: PRIMARY_BLACK,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            xsm: "80%",
            sm: "70%",
            md: "65%",
            lg: "90%",
            xl: "80%",
            xxxl: "85%",
            xxxxl: "90%",
          },
          pl: 3,
          pr: 3,
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
            Services
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
          }}
        >
          <Grid
            container
            flexDirection={"row"}
            columnSpacing={8}
            rowSpacing={{ xs: 5, lg: 10 }}
          >
            <Grid item xs={12} lg={4}>
              <ServiceModel
                src={ServiceWebImage.src}
                name={"Website Development"}
                content={
                  "Crafting responsive, user-friendly websites that reflect your brand identity and drive engagement."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ServiceModel
                src={ServiceAppImage.src}
                name={"App Development"}
                content={
                  "Developing seamless, high-performance apps to provide your customers with superior experiences."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ServiceModel
                src={ServiceDesignImage.src}
                name={"UI / UX Design"}
                content={
                  "Designing intuitive, visually appealing interfaces to enhance user engagement and satisfaction."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ServiceModel
                src={ServiceHostingImage.src}
                name={"Domain and Hosting"}
                content={
                  "Providing reliable domain registration, hosting services to ensure your website runs smoothly."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ServiceModel
                src={SeoImage.src}
                name={"SEO"}
                content={
                  "Optimizing your online presence to improve visibility and drive organic traffic, boosting your search engine rankings."
                }
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <ServiceModel
                src={ServiceMaintenanceImage.src}
                name={"24/7 Support"}
                content={
                  "Offering round-the-clock maintenance to keep your digital platforms running efficiently without downtime."
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Services;
