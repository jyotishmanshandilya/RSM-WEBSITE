import React, { useState } from "react";
import {
  Typography,
  Stack,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { societyMembers } from "./BoardMemberArray";
import DropDownMenue from "./DropDownMenu";

const Photo = ({ src, name }) => {
  return (
    <CardMedia
      component="img"
      image={`/${src}`}
      alt={`${name}`}
      sx={{
        borderRadius: "50%",
        height: "180px",
        width: "180px",
        border: "1px solid #e3e3e3",
      }}
    />
  );
};

const BoardMemberCard = ({ boardCategory, list }) => {
  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Box
        sx={{
          alignItems: "center",
          paddingX: { xs: "5%", sm: "10%" },
          marginTop: { xs: "35%", sm: "25%", lg: "10%", xl: "5%" },
        }}
      >
        <Typography
          variant="body2"
          fontWeight="normal"
          fontSize={30}
          color="white"
          align="center"
        >
          {boardCategory.toUpperCase()}
        </Typography>

        {list.map((member, index) => {
          return (
            <Stack
              key={member.name}
              direction={{
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              }}
              spacing={2}
              alignItems="center"
              marginY={2}
              paddingX={1}
            >
              <Photo src={member.image} name={member.name} />

              <Stack alignItems="center">
                <CardContent>
                  <Typography variant="h5" component="div" color="#fff">
                    {member.name}
                  </Typography>
                  <Typography variant="h6" component="div" color="#7BD9C6">
                    {member.post}
                  </Typography>
                  <Typography variant="body2" color="#fff" fontStyle="italic">
                    {member.researchArea}
                  </Typography>
                  <Typography variant="subtitle2" color="#fff">
                    {member.message}
                  </Typography>
                </CardContent>
              </Stack>
            </Stack>
          );
        })}
      </Box>
    </Stack>
  );
};

export default BoardMemberCard;
