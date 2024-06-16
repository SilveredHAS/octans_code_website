"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CustomAppBar from "@/components/customAppBar";
import HeroSection from "@/components/heroSection";
import AboutUs from "@/components/aboutUs";
import { Box } from "@mui/material";
import Services from "@/components/services";
import Projects from "@/components/projects";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import { PRIMARY_BLACK } from "@/constants";
import { motion } from "framer-motion";

export default function Home() {
  const delay = 0.3;
  return (
    <Box sx={{ backgroundColor: PRIMARY_BLACK }}>
      <CustomAppBar />
      <HeroSection />
      <Box
        sx={{
          mt: { xs: 6, mdlg: 6, xxl: 10 },
          backgroundColor: PRIMARY_BLACK,
        }}
      ></Box>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: delay, ease: "linear" }}
        viewport={{ once: true }}
      >
        <AboutUs />
      </motion.div>
      <Box
        sx={{
          mt: { xs: 6, sm: 10, md: 14, mdlg: 8, xxl: 10 },
          backgroundColor: PRIMARY_BLACK,
        }}
      ></Box>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: delay, ease: "linear" }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>
      <Box
        sx={{
          mt: { xs: 6, sm: 10, md: 10, mdlg: 8, xxl: 10, xxxl: 14 },
          backgroundColor: PRIMARY_BLACK,
        }}
      ></Box>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: delay, ease: "linear" }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>
      <Box
        sx={{
          mt: { xs: 6, mdlg: 8, xxl: 10, xxxl: 14 },
          backgroundColor: PRIMARY_BLACK,
        }}
      ></Box>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: delay, ease: "linear" }}
        viewport={{ once: true }}
      >
        <ContactUs />
      </motion.div>
      <Box
        sx={{
          mt: { xs: 6, mdlg: 12, xxl: 10 },
          backgroundColor: PRIMARY_BLACK,
        }}
      ></Box>
      <Footer />
    </Box>
  );
}
