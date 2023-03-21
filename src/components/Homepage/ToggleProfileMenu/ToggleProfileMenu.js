import * as React from "react";
import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const categories = [
  { id: "3", name: "Profile", link: "/profile" },
  { id: "1", name: "My Cars", link: "/myCars" },
  { id: "2", name: "Reservations", link: "/reservations" },
  { id: "4", name: "Log Out", link: "/" }
];

const ToggleMenu = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <IconButton
        onClick={handleToggleMenu}
        sx={{ mr: 1 }}
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleCloseMenu}>
        <Box
          sx={{
            width: { xs: "100vw", sm: 240 },
            height: "100vh",
            background: "white",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease",
            transform: {
              xs: open ? "translateX(0)" : "translateX(-100%)",
              sm: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid grey",
              backgroundColor: "rgb(40, 47, 140)",
            }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
              Categories
            </Typography>

            <IconButton onClick={handleCloseMenu} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <Box
              sx={{
                borderBottom: "1px solid grey",
                backgroundColor: "rgb(40, 47, 140)",
              }}
            >
            </Box>

            {categories.map(({ id, name, link }) => (
              <ListItem key={id} button onClick={handleCloseMenu}>
                <Link style={{ textDecoration: "none", color: "black" }} to={link}><ListItemText primary={name} /></Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ToggleMenu;
