import React from "react";
import "./Navbar.css"
function Work() {
  var images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201.png",
      top: "43%",
      left: "39%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203.png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];

  return (
    <div className="w-full satoshi">
      <div className="relative max-w-sreen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight ">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="absolute w-96 rounded-lg -translate-x-[50%] -translate-y-[-50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                ></img>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
