"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Grid,
  Button,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropdownMenu = ({ title, items }) => {
  const [anchorEl, setAnchorEl] = useState(Array(items.length).fill(null));

  const handleClick = (event, index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = event.currentTarget;
    setAnchorEl(newAnchorEl);
  };

  const handleClose = (index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = null;
    setAnchorEl(newAnchorEl);
  };

  return (
    <>
      <Typography align="center" sx={{ margin: "5%" }} fontSize={30}>
        {title.toUpperCase()}
      </Typography>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginX: "2%" }}>
          {items.slice(0, items.length / 2).map((item, index) => (
            <Box
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#233D33",
                },
              }}
            >
              <hr />
              <Button
                onClick={(event) => handleClick(event, index)}
                sx={{
                  border: "none",
                  justifyContent: "space-between",
                }}
              >
                <Typography align="center">{item.domain}</Typography>
                <ArrowDropDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl[index]}
                open={Boolean(anchorEl[index])}
                onClose={() => handleClose(index)}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{ background: "transparent" }}
              >
                {item.members.map((member, subIndex) => (
                  <MenuItem
                    key={subIndex}
                    sx={{ zIndex: "0" }}
                    onClick={() => handleClose(index)}
                  >
                    {member}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ))}
        </Box>
        <Box>
          {items.slice(items.length / 2).map((item, index) => (
            <Box
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#233D33",
                },
              }}
            >
              <hr />
              <Button
                onClick={(event) => handleClick(event, index)}
                sx={{
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#233D33",
                  },
                  alignContent: "center",
                }}
              >
                <Typography align="center">{item.domain}</Typography>
                <ArrowDropDownIcon sx={{ justifyContent: "left" }} />
              </Button>
              <Menu
                anchorEl={anchorEl[index]}
                open={Boolean(anchorEl[index])}
                onClose={() => handleClose(index)}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {item.members.map((member, subIndex) => (
                  <MenuItem
                    key={subIndex}
                    sx={{ border: "none", backgroundColor: "transparent" }}
                    onClick={() => handleClose(index)}
                  >
                    {member}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ))}
        </Box>
      </Stack>
    </>
  );
};

export default DropdownMenu;
