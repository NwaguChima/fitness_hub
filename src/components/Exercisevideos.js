import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Exercisevideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h3">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      ></Stack>
    </Box>
  );
};

export default Exercisevideos;
