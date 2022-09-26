import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MySelect from "../Select";
import MyReportTable from "../TableReport";
import MyYears from "../Years";
import MyButton from "../Button/Button";
import MyDefTable from "../Tablitsa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

export default function MyReports() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "12-korxona shakli",
      year: "2021",
      davr: "yanvar-iyul",
      status: "Qoralama",
      tVaqt: "23.08.2021 09:43:28",
      nVaqt: "23.08.2021 15:36:12",
      inspector: "Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45"
    },
    {
      id: 2,
      title: "12-moliya",
      year: "2021",
      davr: "yanvar-iyul",
      status: "Jo'natilgan",
      tVaqt: "23.08.2021 10:58:23",
      nVaqt: "25.08.2021 09:38:04",
      inspector: "Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45"
    },
    {
      id: 3,
      title: "12-narx (sanoat)",
      year: "2021",
      davr: "yanvar-avgust",
      status: "Ko'rib chiqilmoqda",
      tVaqt: "23.08.2021 11:09:23",
      nVaqt: "11.07.2021 17:48:13",
      inspector: "Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45"
    },
    {
      id: 4,
      title: "2-fx Йилда 2 марта (1 апрель ва 1 октябрь ҳолатига)",
      year: "2021",
      davr: "I davr",
      status: "Rad etilgan",
      tVaqt: "23.08.2021 16:33:23",
      nVaqt: "25.08.2021 09:38:04",
      inspector: "Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45"
    },
    {
      id: 5,
      title: "4-mehnat",
      year: "2021",
      davr: "II chorak",
      status: "Qabul qilingan",
      tVaqt: "09.07.2021 15:22:46",
      nVaqt: "01.07.2021 17:48:13",
      inspector: "Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45"
    },
    {
      id: 6,
      title: "1-kb shakli",
      year: "2020",
      davr: "yillik",
      status: "Qabul qilingan",
      tVaqt: "24.02.2021 15:22:46",
      nVaqt: "13.07.2021 17:48:13",
      inspector: "Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45"
    }
  ]);

  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#e8e8e3", mb: "3px" }}>
        <Button onClick={handleOpen}>Hisobot topshirish</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <MySelect />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <MyReportTable />
            </Typography>
          </Box>
        </Modal>
        <div style={{ display: "flex", alignItems: "center" }}>
          <MyButton />
        </div>
        <div>
          <MyYears />
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Nomi</th>
            <th>Yil</th>
            <th>Davr</th>
            <th>Status</th>
            <th>Topshirilgan vaqt</th>
            <th>Natija javobi vaqti</th>
            <th>Inspector ma'lumotlari</th>
          </tr>
          {posts.map((post) => (
            <MyDefTable post={post} key={post.id} />
          ))}
        </table>
      </div>
    </>
  );
}
