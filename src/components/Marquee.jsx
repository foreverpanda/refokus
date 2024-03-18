import React from "react";

function Marquee({ imagesUrls }) {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imagesUrls.map((url) => (
        <img src={url} className="w-[6vw] flex-shink-0"></img>
      ))}
      {imagesUrls.map((url) => (
        <img src={url} className="w-[6vw] flex-shink-0"></img>
      ))}{" "}
    </div>
  );
}

export default Marquee;
