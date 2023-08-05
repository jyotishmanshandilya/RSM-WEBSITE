"use client";
import { useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dropdown from "./Dropdown";
import Link from "next/link";
// import { makeStyles } from "@material-ui/core/styles";


const drawerWidth = 240;
const navItems = ["Team", "Events"];

function DrawerAppBar(props) {
  // const classes = makeStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{ textAlign: "center", backgroundColor: "black", minHeight: "100%" }}
    >
      <div
        className="p-2"
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="/">
          <img
            width={250}
            height={70}
            src="https://res.cloudinary.com/rsmanipal/image/upload/v1615985422/ResearchSoc/RSM_Logo_mne8a2.png"
            alt="logo"
          />
        </a>
      </div>
      <Dropdown />
      <Box onClick={handleDrawerToggle}>
        <Divider />
        <List>
          {navItems.map((item) => (
            <Link key={`${item}`} href={`/${item}`} passHref>
              <ListItem key={item} component="a" disablePadding passHref>
                <ListItemButton sx={{ textAlign: "center" }} passHref>
                  <ListItemText primary={item} className="text-white" />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="sm:flex sm:flex-row mx-auto xl:gap-x-80 md:gap-x-24 sm:gap-0">
            <div className="p-3 px-5">
              <a href="/">
                <img
                  width={250}
                  height={70}
                  src="https://res.cloudinary.com/rsmanipal/image/upload/v1615985422/ResearchSoc/RSM_Logo_mne8a2.png"
                  alt="logo"
                />
              </a>
            </div>

            <Box className="pt-6" sx={{ display: { xs: "none", md: "block" } }}>
              <Dropdown />
              {navItems.map((item) => (
                <Link href={`/${item}`}>
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
