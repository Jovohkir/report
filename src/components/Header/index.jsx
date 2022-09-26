import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import logo from "../image/logo.png";
import { MyToolbar } from "./styles";
import Stack from "@mui/material/Stack";
import Language from "../language/Language";
import { Container } from "@mui/system";

export default function Header() {
  const mystyle = {
    paddingTop: "20px"
  };
  const header = {
    backgroundColor: "#e9ecef",
    color: "#808080",
    boxShadow: "none"
  };
  const logoImg = {
    marginTop: "5px",
    marginBottom: "5px"
  };
  return (
    <AppBar position="fixed" style={header}>
      <Container>
        <MyToolbar>
          <img src={logo} alt="alt img" style={logoImg} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Statistika hisobotini taqdim etish <br />
            axborot tizimi
          </Typography>
          <Stack>
            <Language />
          </Stack>
        </MyToolbar>
      </Container>
    </AppBar>
  );
}
