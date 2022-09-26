import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const columns = [
  {
    id: "Nomi",
    label: "Nomi",
    minWidth: 170
  },
  {
    id: "Davriyligi",
    label: "Davriyligi",
    minWidth: 100
  },
  {
    id: "TopshirilishMuddati",
    label: "Topshirilish muddati",
    minWidth: 170,
    align: "left"
  },
  {
    id: "Holati",
    label: "Holati",
    minWidth: 170,
    align: "left"
  },
  {
    id: "Amaliyot",
    label: "Amaliyot",
    minWidth: 170,
    align: "left"
  }
];

function createData(Nomi, Davriyligi, TopshirilishMuddati, Holati, Amaliyot) {
  return { Nomi, Davriyligi, TopshirilishMuddati, Holati, Amaliyot };
}

const rows = [
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Link to="Hisobot">Topshirish</Link>
  ),
  createData(
    "4-korxona (miz) (12-korxona shakliga ilova)",
    "Чораклик",
    "ҳисобот давридан кейинги ойнинг 20-санасидан кечиктирмай",
    "Ёпиқ",
    <Button>Topshirish</Button>
  ),
  createData(
    "2-fx Йилда 2 марта (1 апрель ва 1 октябрь ҳолатига)",
    "Йилига 2 марта",
    "Саволномани тўлдириш давридан кейинги ойнинг 2 санасига қадар",
    "Ёпиқ",
    <Button>Topshirish</Button>
  ),
  createData(
    "1-kb shakli",
    "Йиллик",
    "26 февралдан кечиктирмай, 26 мартдан кечиктирмай",
    "Ёпиқ",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona (xizmat) (12-korxona shakliga ilova)",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "4-akt shakli",
    "Чораклик",
    "ҳисобот давридан кейинги ойнинг 24 санасидан кечиктирмай, йиллик 14 февралдан кечиктирмай,йиллик 25 мартдан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "1-nogironlik shakli",
    "йиллик",
    "Ўзбекистон Республикаси Соғлиқни сақлаш вазирлиги Республика тиббий-ижтимоий экспертиза инспекцияси томонидан ўрнатилган муддатларда,15 февралдан",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  ),
  createData(
    "12-korxona shakli",
    "Ойлик",
    "ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай",
    "Ochiq",
    <Button>Topshirish</Button>
  )
];

export default function MyReportTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600, border: "none" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#e9ecef",
                    color: "#808080"
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.Davriyligi}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
