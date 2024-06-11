import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CelebrationPopup({ open, setIsOpenCallback }) {
  const handleClickOpen = () => {
    setIsOpenCallback(true);
  };

  const handleClose = () => {
    setIsOpenCallback(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#2e2e2e",
          },
        }}
      >
        <DialogTitle sx={{ color: "white" }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {"Thanks for Contacting Us"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ color: "white" }}
          >
            We have received your message successfully.&nbsp; Our team will
            contact you soon.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            disableRipple
            sx={{
              backgroundColor: "transparent",
              color: "#FFC43A",
              "&:hover": { backgroundColor: "transparent", color: "#FFC43A" },
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
