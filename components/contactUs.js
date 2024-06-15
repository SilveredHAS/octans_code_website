"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { PRIMARY_BLACK } from "@/constants";
import emailjs from "@emailjs/browser";
import CelebrationPopup from "./celebrationPopup";
import Loader from "./pageLoader";
import { motion } from "framer-motion";

const ContactUs = () => {
  const services = [
    "Website Design & Development",
    "App Design & Development",
    "Website Redesign",
    "Domain & Hosting",
    "Custom Software Solution",
  ];

  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoadingScreenOpen, setIsLoadingScreenOpen] = useState(false);

  const [popupOpen, setPopupOpen] = useState(false);

  function setIsOpenCallback(value) {
    setPopupOpen(value);
  }

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setErrorMsg("");
      setIsLoadingScreenOpen(true);
      console.log("Inside handle submit function");
      const templateParams = {
        name: name,
        phoneNumber: phoneNo,
        email: email,
        service: service,
        message: message,
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
          templateParams,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
          }
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsLoadingScreenOpen(false);
            setPopupOpen(true);
            setName("");
            setEmail("");
            setPhoneNo("");
            setMessage("");
            setService(services[0]);
          },
          (error) => {
            console.log("FAILED...", error);
            setPopupOpen(false);
            setIsLoadingScreenOpen(false);
          }
        );
    } catch (error) {
      console.log(error);
      setErrorMsg("Something went wrong. Please try again in some time");
      setPopupOpen(false);
      setIsLoadingScreenOpen(false);
    }
  };

  return (
    <div
      id="contactus-section"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: PRIMARY_BLACK,
        marginTop: 80,
        marginBottom: 80,
      }}
    >
      <Box sx={{ width: { xs: "85%", mdlg: "80%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: {
              xs: 0,
              mdlg: 2,
              xl: 3,
              xxl: 5,
              xxxl: 7,
              xxxxl: 9,
              xxxxxl: 12,
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#FCDD95", textAlign: "center", mb: 6 }}
          >
            Contact&nbsp;
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "#FECE5F", textAlign: "center", mb: 6 }}
          >
            Us
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            color: "white",
            justifyContent: "space-between",
          }}
        >
          <Grid container spacing={{ xs: 8, lg: 20 }}>
            <Grid item xs={12} mdlg={6}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h2" sx={{ mb: 4 }}>
                    We're here for you
                  </Typography>
                  <Typography variant="h6" sx={{ mb: { xs: 2, lg: 4 } }}>
                    Feel free to connect with us for any service assistance. Our
                    support team is on standby to help. Email / Call / Text us,
                    we'll respond without delay.
                  </Typography>
                  <Divider sx={{ backgroundColor: "white" }} />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: { xs: 2, mdlg: 4 },
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: "2.1rem" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Tamil Nadu, India
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: { xs: 2, mdlg: 4 },
                    }}
                  >
                    <EmailIcon sx={{ fontSize: "2.1rem" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      contactus@octanscode.com
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: { xs: 2, mdlg: 4 },
                    }}
                  >
                    <CallIcon sx={{ fontSize: "2.1rem" }} />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      +91 78719 10369
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} mdlg={6}>
              {/* <motion.div
                initial={{ x: 500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              > */}
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#1D2024",
                  p: 4,
                  overflow: "hidden",
                }}
              >
                <Box component={"form"} onSubmit={handleSubmit}>
                  <Typography variant="h4" sx={{ color: "#FFC43A" }}>
                    Let's Talk
                  </Typography>
                  <TextField
                    id="name"
                    placeholder="Name*"
                    type="text"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      mt: { xs: 2, xxxl: 3 },
                      width: "100%",
                      borderBottom: "1px solid #AEAEAE",
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      backgroundColor: "orange",
                    }}
                    required
                  />
                  <TextField
                    id="phone-no"
                    placeholder="Phone No*"
                    variant="standard"
                    type="tel"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    sx={{
                      mt: { xs: 2, xxxl: 3 },
                      width: "100%",
                      borderBottom: "1px solid #AEAEAE",
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      backgroundColor: "orange",
                    }}
                    required
                  />
                  <TextField
                    id="email"
                    type="email"
                    required
                    placeholder="Email*"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      mt: { xs: 2, xxxl: 3 },
                      width: "100%",
                      borderBottom: "1px solid #AEAEAE",
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                  <TextField
                    id="service"
                    select
                    defaultValue={service}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200, // Set max height if needed
                          width: 250, // Set the fixed width for the menu
                        },
                      },
                    }}
                    sx={{
                      mt: { xs: 2, xxxl: 3 },
                      width: "100%",
                      borderBottom: "1px solid #AEAEAE",
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                      "& .MuiTypography-root": {
                        color: "white",
                      },
                      ".MuiSvgIcon-root ": {
                        fill: "white !important",
                      },
                    }}
                  >
                    {services.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        <Typography sx={{ color: "black" }}>
                          {option}
                        </Typography>
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="filled-multiline-static"
                    placeholder="Message*"
                    multiline
                    rows={8}
                    variant="filled"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{
                      // backgroundColor: "#3D3F42",
                      border: `1px solid #AEAEAE`,
                      mt: 3,
                      width: "100%",
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          color: "#AEAEAE",
                          opacity: 1, // otherwise firefox shows a lighter color
                        },
                      },
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      display: errorMsg ? "flex" : "none",
                      color: "red",
                      mt: { xs: 2, xxxl: 3 },
                      mb: 1,
                    }}
                  >
                    {`*${errorMsg}`}
                  </Typography>
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "#FFC43A",
                      color: "black",
                      textTransform: "capitalize",
                      width: "100%",
                      mt: { xs: 4, xxxl: 5 },
                      transition: "all 0.2s linear",
                      "&:hover": {
                        backgroundColor: "#FFC43A",
                        color: "black",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Connect with Octans Code
                    </Typography>
                  </Button>
                </Box>
                <CelebrationPopup
                  open={popupOpen}
                  setIsOpenCallback={setIsOpenCallback}
                />
                <Loader isLoadingScreenOpen={isLoadingScreenOpen} />
              </Box>
              {/* </motion.div> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
