import React from "react";
import Button from "@mui/material/Button";

export default function MyButton() {
  return (
    <>
      <div
        style={{
          border: "1px solid #0e59ed",
          marginLeft: "5px",
          borderRadius: "3px"
        }}
      >
        <Button>Qoralamalar</Button>
      </div>
      <div
        style={{
          border: "1px solid #0e59ed",
          marginLeft: "5px",
          borderRadius: "3px"
        }}
      >
        <Button>Junatilgan</Button>
      </div>
      <div
        style={{
          border: "1px solid #0e59ed",
          marginLeft: "5px",
          borderRadius: "3px"
        }}
      >
        <Button>Ko'rib Chiqish Jarayonida</Button>
      </div>
      <div
        style={{
          border: "1px solid #0e59ed",
          marginLeft: "5px",
          borderRadius: "3px"
        }}
      >
        <Button>Qabul Qilingan</Button>
      </div>
      <div
        style={{
          border: "1px solid #0e59ed",
          marginLeft: "5px",
          borderRadius: "3px"
        }}
      >
        <Button>Rad Etilgan</Button>
      </div>
    </>
  );
}
