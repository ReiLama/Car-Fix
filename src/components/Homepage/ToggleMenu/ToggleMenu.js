import * as React from "react";
import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const categories = [
  { id: "1", name: "My Cars", icon: <ListItemIcon>icon1</ListItemIcon> },
  { id: "2", name: "Reservations", icon: <ListItemIcon>icon2</ListItemIcon> },
  { id: "3", name: "Providers", icon: <ListItemIcon>icon3</ListItemIcon> },
  { id: "4", name: "Log Out", icon: <ListItemIcon>icon4</ListItemIcon> },
];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "200%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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

          <Box
            sx={{
              borderBottom: "1px solid grey",
              backgroundColor: "rgb(40, 47, 140)",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <List>
            {categories.map(({ id, name, icon }) => (
              <ListItem key={id} button onClick={handleCloseMenu}>
                {icon}
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ToggleMenu;
