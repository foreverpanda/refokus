import React from "react";
import Button from "./Button";
import { useState } from "react";
function Product({ val,mover,count }) {


  const colors = ["bg-blue-950", "bg-purple-950", "bg-cyan-500", "bg-green-600"]; 
  const [hovered, setHovered] = useState(false);

  // Get the color for this component based on its index
  const color = colors[count % colors.length];

  return (
    <div className={`w-full py-20 h-[23rem] ${hovered ? color : '' } text-white bg-zinc-900 transition-colors duration-300`
    } onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
