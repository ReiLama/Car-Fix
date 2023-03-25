import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./ProfileMenu.scss";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ProfileMenu = () => {
  const [name, setName] = React.useState("John Doe");
  const [mail, setMail] = React.useState("johndoe@mail.com");
  const [phoneNumber, setPhoneNumber] = React.useState("23923923");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="all-container">
      <Box sx={{}}>
        <Box sx={{ marginLeft: 30, marginTop: 8 }}>
          <Typography
            variant="h3"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex" },
              flexGrow: 1,
              color: "rgb(40, 47, 140)",
              textDecoration: "none",
            }}
          >
            John Doe
          </Typography>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mt: 1,
              display: { xs: "flex" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            My Profile
          </Typography>
        </Box>
        <Box sx={{ marginLeft: 30, marginTop: 0 }}>
          <br />
          <p>
            <strong>Personal Information:</strong>
          </p>
          <p>Name: {name}</p>
          <p>Email: {mail}</p>
          <p>Phone Number: {phoneNumber}</p>
          <br />
          <p>
            <strong>Edit Information:</strong>
          </p>
          <Button
            className="edit-info-btn"
            sx={{ backgroundColor: "rgb(40, 47, 140)" }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Edit Personal Information
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Profile Info</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter the new personal information to save
              </DialogContentText>
              <form action="post">
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Full Name"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={(event) => setName(event.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={(event) => setMail(event.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Phone Number"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Save</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </div>
  );
};

export default ProfileMenu;
