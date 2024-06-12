import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PRIMARY_BLACK } from "@/constants";
import { StyledIconButton } from "./styledIconBox";
import MenuIcon from "@mui/icons-material/Menu";

export default function Sidebar({ color }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const pagesXS = ["Home", "About Us", "Services", "Projects", "Contact Us"];

  const handleOnClick = (item) => {
    if (item === "Home") {
      scrollToSection("hero-section");
    } else if (item === "About Us") {
      scrollToSection("about-section");
    } else if (item === "Services") {
      scrollToSection("services-section");
    } else if (item === "Projects") {
      scrollToSection("projects-section");
    } else if (item === "Contact Us") {
      scrollToSection("contactus-section");
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, backgroundColor: "#2e2e2e", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem
          key={"closebutton"}
          disablePadding
          sx={{ pl: { xs: 0.75, lg: 0.35 } }}
        >
          <StyledIconButton>
            <CloseIcon
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: "inherit",
              }}
            />
          </StyledIconButton>
        </ListItem>
        {pagesXS.map((text, index) => (
          <>
            <ListItem
              key={text}
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: PRIMARY_BLACK,
                  color: "white",
                },
              }}
            >
              <ListItemButton disableRipple onClick={() => handleOnClick(text)}>
                <Typography
                  variant="subtitle1"
                  sx={{ p: 0, pt: 1, pb: 1, color: "white" }}
                >
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
            {/* <Divider sx={{ backgroundColor: "lightgray" }} /> */}
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)} sx={{ color: color }} />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
