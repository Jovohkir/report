import calendar from "./image/calendar.png";
import exit from "./image/exit.png";
import responsible from "./image/responsible.jpg";
import notif from "./image/notif.png";
import change from "./image/change.webp";

function createImg(id, src) {
  return { id, src };
}

const images = [
  createImg(1, notif),
  createImg(2, responsible),
  createImg(3, calendar),
  createImg(4, change),
  createImg(5, exit)
];

export default images;
