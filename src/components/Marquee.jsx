import React from "react";
import { motion } from "framer-motion";
function Marquee({ imagesUrls, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
    <motion.div
      initial={{ x: direction === "left" ? "0" : "-100%" }}
      animate={{ x: direction === "left" ? "-100%" : "0" }}
      transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      className="flex flex-shrink-0 gap-40 py-10 pr-40"
    >
      {imagesUrls.map((url) => (
        <img src={url} className="w-[6vw] flex-shink-0"></img>
      ))}
    </motion.div>
    <motion.div
      initial={{ x: direction === "left" ? "0" : "-100%" }}
      animate={{ x: direction === "left" ? "-100%" : "0" }}
      transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      className="flex flex-shrink-0 gap-40 py-10 pr-40"
    >
      {imagesUrls.map((url) => (
        <img src={url} className="w-[6vw] flex-shink-0"></img>
      ))}
    </motion.div>
    </div>
    
  );
}

export default Marquee;
