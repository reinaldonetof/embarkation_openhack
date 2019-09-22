import uuid from "uuid/v1";

import img1 from "./imgs/img_1.png";
import img2 from "./imgs/img_2.png";
import img3 from "./imgs/img_3.png";
import img4 from "./imgs/img_4.png";

export default [
  {
    id: uuid(),
    title: "Hackathon ONU",
    description: "Um dos mais desafiadores que jpa tive o prazer de experienciar",
    imageUrl: {
      img1: img1,
      img2: img2
    },
    date: "Março, 2017"
  },
  {
    id: uuid(),
    title: "Hackhathon Rio",
    description:
      "Conseguimos o engajamento com todos os tipos de pessoas e interessados, ",
    imageUrl: {
      img1: img3,
      img2: img4
    },
    date: "Julho, 2018"
  },
];
