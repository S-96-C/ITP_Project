import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
             <a href="/" style={{ textDecoration: "none", color: "#000" }}>
            <img
              src="./Assets/Images/Group 1836.png"
              alt="Logo"
              width="150px"
              height="50px"
            />
           

            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "#000" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">HOME</Typography>
              </MenuItem>
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">HOTEL</Typography>
              </MenuItem>
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">FOOD</Typography>
              </MenuItem>
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">PACKAGE</Typography>
              </MenuItem>
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">EVENT</Typography>
              </MenuItem>
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">FLIGHT</Typography>
              </MenuItem>
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">VEHICLE</Typography>
              </MenuItem>
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">ABOUT US</Typography>
              </MenuItem>
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">CONTACT US</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <h3>Travel Aspire</h3>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                Home
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/Hotel"
                style={{ textDecoration: "none", color: "#000" }}
              >
                HOTEL
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a href="/Food" style={{ textDecoration: "none", color: "#000" }}>
                FOOD
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/Package"
                style={{ textDecoration: "none", color: "#000" }}
              >
                PACKAGE
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/Event"
                style={{ textDecoration: "none", color: "#000" }}
              >
                EVENT
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/Flight"
                style={{ textDecoration: "none", color: "#000" }}
              >
                FLIGHT
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/Vehicle"
                style={{ textDecoration: "none", color: "#000" }}
              >
                VEHICLE
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/Agent"
                style={{ textDecoration: "none", color: "#000" }}
              >
                AGENT
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/Customer_Service"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Customer Service
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/About_Us"
                style={{ textDecoration: "none", color: "#000" }}
              >
                ABOUT US
              </a>
            </Button>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a
                href="/Contact_Us"
                style={{ textDecoration: "none", color: "#000" }}
              >
                CONTACT US
              </a>
            </Button>
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <a href="/User">User</a>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
