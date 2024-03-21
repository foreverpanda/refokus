import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
import {motion} from "framer-motion"
function Button({title = "Get Started"}) {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        {/* <span className='text-sm font-medium'>{title}</span> */}
        
        <motion.a className='text-sm font-medium'
  whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
>{title}</motion.a>

        <IoIosReturnRight/>
    </div>
  )
}

export default Button