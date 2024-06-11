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

export default function Home() {
  return (
    <Box sx={{ backgroundColor: PRIMARY_BLACK }}>
      <CustomAppBar />
      <HeroSection />
      <Box sx={{ mt: 15, backgroundColor: PRIMARY_BLACK }}></Box>
      <AboutUs />
      <Box sx={{ mt: 15, backgroundColor: PRIMARY_BLACK }}></Box>
      <Services />
      <Box sx={{ mt: 15, backgroundColor: PRIMARY_BLACK }}></Box>
      <Projects />
      <Box sx={{ mt: 15, backgroundColor: PRIMARY_BLACK }}></Box>
      <ContactUs />
      <Box sx={{ mt: 15, backgroundColor: PRIMARY_BLACK }}></Box>
      <Footer />
    </Box>
  );
}
