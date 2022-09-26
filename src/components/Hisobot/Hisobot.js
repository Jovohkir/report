import { Button } from "@mui/material";
import React from "react";
import "./style.css";

const Hisobot = () => {
  function grafaFuntion(e) {
    console.log("new value", e.target.value);
  }

  return (
    <>
      <div
        style={{
          alignItems: "center",
          marginLeft: "15px",
          marginRight: "15px",
          marginBottom: "15px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button>1-BOB</Button>
          <Button>2-BOB</Button>
          <Button>3-BOB</Button>
          <Button>4-BOB</Button>
          <Button>5-BOB</Button>
          <Button>6-BOB</Button>
        </div>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th rowSpan="2">Тақдим этувчи - хизмат номи</th>
              <th rowSpan="2">Сатр коди</th>
              <th colSpan="2">Юридик шахслар учун тариф, сўмда</th>
              <th colSpan="2">Жисмоний шахслар учун тариф, сўмда</th>
              <th rowSpan="2">Изоҳ: тариф ўзгариши сабаблари</th>
            </tr>
            <tr>
              <th></th>
              <th>Ўтган ойда</th>
              <th>Жорий ойда</th>
              <th>Ўтган ойда</th>
              <th>Жорий ойда</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ backgroundColor: "honeydew" }}></td>
              <td style={{ backgroundColor: "honeydew" }}>1</td>
              <td style={{ backgroundColor: "honeydew" }}>2</td>
              <td style={{ backgroundColor: "honeydew" }}>4</td>
              <td style={{ backgroundColor: "honeydew" }}>5</td>
              <td style={{ backgroundColor: "honeydew" }}>5</td>
              <td style={{ backgroundColor: "honeydew" }}>6</td>
              <td style={{ backgroundColor: "honeydew" }}>7</td>
            </tr>
            <tr>
              <td>0</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                ПОЧТА ВА КУРЬЕРЛИК ХИЗМАТИ Вазни 20 граммгача бўлган оддий хатни
                жўнатиш учун тўлов
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g2"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g3"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g4"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g5"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g6"
                />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                Ўтказиладиган пулнинг ҳар бир тўлиқ ёки тўлиқсиз 1000 сўмига
                почта пул жўнатмасини юбориш тўлови
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g2"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g3"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g4"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g5"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g6"
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                Вазни 1 кг жўнатма (пакети)ни ер усти транспортида жўнатиш учун
                олинадиган тўлов, жумладан қўшимча оғирлик билан (суғурта
                тўловларисиз)
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g2"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g3"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g4"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g5"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g6"
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                Қимматбаҳо бандеролни ҳар бир тўлиқ ва тўлиқсиз 500 грамм вазни
                учун жўнатиш тўлови
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g2"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g3"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g4"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g5"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g6"
                />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                ШАҲАР ТЕЛЕФОН АЛОҚАСИ Асосий телефон учун (бир ойлик) абонентлик
                тўлови
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g2"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g3"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g4"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g5"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g6"
                />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                Бюджетдан молиялаштирилмайдиган ташкилотлар учун
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g2"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g3"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g4"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g5"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g6"
                />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                Бюджетдан молиялаштириладиган ташкилотлар учун
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g2"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g3"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g4"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g5"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g6"
                />
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                Телефон тармоғига рухсат бериш учун тўлов
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                Бюджетдан молиялаштирилмайдиган ташкилотлар учун
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                Бюджетдан молиялаштириладиган ташкилотлар учун
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                {" "}
                Энг кўп юклама бўлган даврда (ҳар бир тўлиқ ва тўлиқсиз дақиқа
                учун) уланишлар (сўзлашувлар)га автоматик равишда уланиш учун
                тўлов{" "}
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                {" "}
                ТЕЛЕГРАФ АЛОҚАСИ Ички оддий телеграмма жўнатиш учун (ҳар бир сўз
                учун) тўлов
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                {" "}
                300 км масофагача, ўтказиш имконияти 50 Бод бўлган телеграф
                алоқа канали ижараси (тўлиқ ва тўлиқсиз кун) учун тўлов
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td style={{ backgroundColor: "lightgrey" }}>
                {" "}
                600 км гача бўлган масофада маҳаллий ёки бошқа шаҳардаги абонент
                билан абонент телеграфи орқали сўзлашув (ҳар бир тўлиқ ёки
                тўлиқсиз дақиқа учун) учун тўлов
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
              <td>
                <input
                  store_type="unique_id"
                  type="number"
                  onChange={grafaFuntion}
                  data-column_id="g1"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Hisobot;
