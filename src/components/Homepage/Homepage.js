import "./Homepage.scss";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ToggleProfileMenu from "./ToggleProfileMenu/ToggleProfileMenu"
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import { Link } from "react-router-dom";

const pages = [
  {
    name: "Providers",
    link: "/providers"
  },
  {
    name: "About",
    link: "/aboutus"
  },
  {
    name: "Contact",
    link: "/contact"
  }
];
const settings = [
  {
    name: "Profile",
    link: "/profile"
  },
  {
    name: "My Cars",
    link: "/myCars"
  },
  {
    name: "Reservations",
    link: "/reservations"
  },
  {
    name: "Log Out",
    link: "/"
  }
];

function Homepage() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [logged] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <AppBar className="app-bar" position="static" sx={{ backgroundColor: "rgb(40, 47, 140)" }}>
        <Container className="container" maxWidth="xl">
          <Toolbar disableGutters>
            <ToggleMenu />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>

            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <AdbIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link style={{ textDecoration: "none", color: "white" }} to={page.link}>{page.name}</Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                { 
                  logged ? 
                  settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link style={{ textDecoration: "none", color: "black" }} to={setting.link}>{setting.name}</Link>
                    </Typography>
                    <ToggleProfileMenu />
                  </MenuItem>
                  ))
                  :
                  <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                  <Link style={{ textDecoration: "none", color: "black" }} to="/login">Log In</Link>
                  </Typography>
                  <ToggleProfileMenu />
                  </MenuItem>
                }
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}
export default Homepage;
