import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header";
import MyAcardion from "../acardion/MyAcardion";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Header />
      <CssBaseline />
      <div style={{ paddingTop: "84px" }}>
        <Container>
          <MyAcardion />
        </Container>
      </div>
      <div>
        <Outlet />
      </div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#e8e8e3",
          height: "40px"
        }}
      >
        <h4>Давлат статистика қўмитаси © 2021</h4>
      </div>
    </>
  );
}
