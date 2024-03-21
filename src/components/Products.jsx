import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import videoSource1 from "../assets/webflow-education-promo.mp4";
import videoSource2 from "../assets/Arqitel project video 4_3.webm";
import videoSource3 from "../assets/Cula_promo_new_4_3.mp4";
import videoSource4 from "../assets/Maniv-Compressed.mp4";
import videoSource5 from "../assets/Silvr.webm";

function Products() {
  const products = [
    {
      title: "arquitel",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
      live: true,
      case: true,
    },
    {
      title: "arquitel",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative bg-zinc-800">
      {products.map((val, index) => (
        <Product val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full  pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] left-[43%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full  h-full  relative"
          >
            <video autoPlay muted loop src={videoSource1}></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video autoPlay muted loop src={videoSource2}></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          ><video autoPlay muted loop src={videoSource3}></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          ><video autoPlay muted loop src={videoSource4}></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          ><video autoPlay muted loop src={videoSource5}></video></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
