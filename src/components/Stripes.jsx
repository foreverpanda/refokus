import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
      number: 48,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
      number: 2,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
      number: 11,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
      number: 48,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
      number: 2,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
      number: 11,
    },
  ];

  return (
    <div className="flex items-center mt-44 bg-zinc-900">
      {data.map((elem, index) => (
        <Stripe val={elem}></Stripe>
      ))}
    </div>
  );
}

export default Stripes;
