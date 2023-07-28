import React from "react";
import { eventArray } from "./EventArray";
import { Box, Stack, Typography, CardMedia, Accordion } from "@mui/material";
import Link from "next/link";
import Nav from "../../components/Nav";

const responsiveStyles = {
  xs: {
    padding: "8px", // Adjust padding for smaller devices
  },
  sm: {
    padding: "20px", // Adjust padding for medium-sized devices
  },
  md: {
    padding: "32px", // Adjust padding for large devices
  },
};

const Photo = ({ src, name }) => {
  return (
    <CardMedia
      component="img"
      image={`${src}`}
      alt={`${name}`}
      sx={{
        borderRadius: "5%",
        height: "250px",
        maxWidth: "300px",
        border: "1px solid #e3e3e3",
        marginTop: "2%",
      }}
    />
  );
};

const index = () => {
  return (
    <div>
      <Box
            width={"100%"}
            height={{ xs: "20%", sm: "10%" }}
            sx={{
              mt: { xs: 10, sm: 11, md: 12, lg: 11 },
              ...responsiveStyles,
              backgroundColor: "#233D33",
              paddingTop: '10px',
              // alignItems:  "center",
              // display: "flex",
              // direction: { xs: "column", md: "row" },
              zIndex: "1",
            }}
            // position="fixed"
          >
            <Typography
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", sm: "left" },
                color: "white",
                // margin: { xs: "2%", sm: "1%" },
                alignContent: "center",
              }}
              variant="h5"
            >
              Events
            </Typography>
            <Typography
              textAlign={{ xs: "center", sm: "right" }}
              // sx={{ margin: { xs: "1%", sm: "2%" } }}
            >
              <Link href={`/`}>Home</Link> / Events
            </Typography>
          </Box>
    <Box sx={{ backgroundColor: "#1c1c1ce1", opacity: "90%", paddingTop:'4em' }}>
      <Typography
        variant="h2"
        fontSize={"normal"}
        align="center"
        sx={{ color: "#ffff" }}
      >
        Events
      </Typography>
      <Stack direction="column" alignContent={"center"} className="lg:p-24 p-5 mx-auto">
        {eventArray.map((event) => {
          return (
            <Box
              alignContent={"center"}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{ color: "#fff" }}
                p={{ xs: 3, lg: 5 }}
                alignContent={"center"}
              >
                <Photo src={event.image} name={event.title} />
                <Stack direction={"column"} sx={{ margin: "1%" }}>
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    sx={{ color: "#fff" }}
                  >
                    {event.title}
                  </Typography>
                  <Typography variant="body2">Time : {event.time}</Typography>
                  <Typography variant="subtitle1" sx={{ color: "grey" }} className="text-justify">
                    {event.para1}
                    {"\n\n"}
                    {event.para2}
                    {"\n"}
                    {event.para3}
                  </Typography>
                  {event.recordinglink && (
                    <Link
                      href={event.recordinglink}
                      style={{ textDecoration: "underline", color: "#96B3F5" }}
                    >
                      Recording
                    </Link>
                  )}
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
    </div>
  );
};

export default index;
