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
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
      <Typography align="center" sx={{ margin: "5%" }} fontSize={40}>
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
          {items.slice(0, items.length / 2).map((item, index) => {
            return (
              <>
                <Box
                  sx={{
                    "&:hover": {
                      backgroundColor: "#233D33",
                    },
                  }}
                >
                  <hr style={{ backgroundColor: "#233D33" }} />
                  <Accordion sx={{ background: "transparent" }}>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon color="success" />}
                    >
                      <Typography align="center" fontSize={30}>
                        {item.domain}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography align="center" fontSize={20}>
                        {item.members.map((member, subIndex) => {
                          return (
                            <li style={{ listStyleType: "none" }}>{member}</li>
                          );
                        })}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </>
            );
          })}
        </Box>
        <Box>
          {items.slice(items.length / 2).map((item, index) => {
            return (
              <>
                <Box
                  sx={{
                    "&:hover": {
                      backgroundColor: "#233D33",
                    },
                  }}
                >
                  <hr style={{ backgroundColor: "#233D33" }} />
                  <Accordion sx={{ background: "transparent" }}>
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon color="success" />}
                    >
                      <Typography align="center" fontSize={30}>
                        {item.domain}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography align="center" fontSize={20}>
                        {item.members.map((member, subIndex) => {
                          return (
                            <li style={{ listStyleType: "none" }}>{member}</li>
                          );
                        })}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </>
            );
          })}
        </Box>
      </Stack>
    </>
  );
};

export default DropdownMenu;
