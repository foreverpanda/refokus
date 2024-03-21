import React from "react";
import "./Navbar.css"
function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="satoshi max-w-screen-xl mx-auto flex gap-32 py-10 ">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leaing-none tracking-tight">refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap4">
            <div className="basis-1/3 ">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
               { ["instagram","twitter (x?)" ,"linkedIn"].map((item,index)=> <a className="block mt-3 text-zinc-600 capitalize">{item}</a>)}
            </div>
            <div className="basis-1/3 ">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
               { ["instagram","twitter (x?)" ,"linkedIn"].map((item,index)=> <a className="block mt-3 text-zinc-600 capitalize">{item}</a>)}
            </div>
            <div className="basis-1/2 flex flex-col items-end">
                <p className="text-right">Refokus is a pioneering digital agency driven by design and empowered by teachiers</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer