import React from "react";
import { eventArray } from "./EventArray";
import { Box, Stack, Typography, CardMedia, Accordion } from "@mui/material";
import Link from "next/link";
import Nav from "../../components/Nav";

const Photo = ({ src, name }) => {
  return (
    <CardMedia
      component="img"
      image={`${src}`}
      alt={`${name}`}
      sx={{
        borderRadius: "5%",
        height: "180px",
        maxWidth: "180px",
        border: "1px solid #e3e3e3",
        marginTop: "2%",
      }}
    />
  );
};

const index = () => {
  return (
    <Box sx={{ backgroundColor: "#1c1c1ce1", opacity: "90%" }}>
      <Nav />
      <Typography
        variant="h1"
        fontSize={"normal"}
        align="center"
        sx={{ color: "#7BD9C6", marginTop: "10%" }}
      >
        Events
      </Typography>
      <Stack direction="column" alignContent={"center"}>
        {eventArray.map((event) => {
          return (
            <Box
              sx={{
                margin: "3%",
              }}
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
                  <Typography variant="subtitle1" sx={{ color: "grey" }}>
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
  );
};

export default index;
