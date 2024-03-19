import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import {motion} from "framer-motion"
function Card({ width, start, para, hover = false }) {
  return (
    <motion.div whileHover={{backgroundColor: hover === true && "#7443ff" , padding:"25px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-medium mt-5">Hello something</h1>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className="down w-full mt-60">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <motion.button whileHover={{backgroundColor:"white", color:"black"}} className="rounded-full mt-5 py-2 px-5  border-[1px] border-zinx-50">
              Contact Us
            </motion.button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            lorem asdasdasd sd asd asd as dsa das d sad sad{" "}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
