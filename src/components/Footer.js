import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h7" color="#000">
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/chima-nwagu-3972a6179/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#777",
              textDecoration: "none",
              paddingBottom: "10px",
            }}
          >
            @Chima_Nwagu
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
