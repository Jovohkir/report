import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import images from "../Images";
import { Container } from "@mui/system";

export default function MyAcardion() {
  let divImages = {
    width: "30px",
    height: "30px",
    margin: "5px"
  };
  let cont = {
    paddingTop: "20px",
    marginLeft: "10px",
    display: "flex",
    justifySelf: "flex-end"
  };

  return (
    <>
      <Container>
        <div style={{ display: "flex", justifyContent: "spacebetween" }}>
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary>
              <Typography>
                Farg'ona Viloyati Kasb-Hunar Ta'limi Hududiy Boshqarmasi
                Tasarrufidagi Farg'ona Tumani Qurilish
                <br /> Sanoat Kasb-Hunar Kolleji
                <br />
                STIR: 200197177, KTUT: 31097097
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                OPF kodi:
                <br />
                270 - Учреждение
              </Typography>
              <br />
              <Typography>
                SOOGU kodi:
                <br />
                79994 - Субъекты предпринимательства, не вошедшие в структуры
                органов государственного и хозяйственного управления
              </Typography>
              <br />
              <Typography>
                IFUT kodi:
                <br />
                85320 - Техническое и профессиональное среднее образование
              </Typography>
              <br />
              <Typography>
                SOATO kodi:
                <br />
                1730233575 - Farg'ona viloyati, Farg'ona tumani, Mindon
                shaharchasi
              </Typography>
              <br />
              <Typography>
                Manzili:
                <br />
                Mindon ko'chasi, 318-uy
              </Typography>
              <br />
              <Typography>
                Elektron pochta manzili:
                <br />-
              </Typography>
              <br />
              <Typography>
                Telefon kontaktlari:
                <br />
                +998950976067
              </Typography>
              <br />
            </AccordionDetails>
          </Accordion>
          <div style={cont}>
            {images.map((e) => (
              <img style={divImages} src={e.src} id={e.id} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
