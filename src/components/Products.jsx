import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      title: "arquitel",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
        live:true,
        case:false,
    },
    {
        title: "TTR",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
          live:true,
          case:false,
      },
      {
        title: "YIR 2022",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
          live:true,
          case:true,
      },
      {
        title: "Yahoo!",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
          live:true,
          case:true,
      },
      {
        title: "arquitel",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
          live:true,
          case:false,
      },
  ];

  return (
    <div className="mt-32">
    {products.map((val,index)=> <Product val={val}/>)}
    </div>
  );
}

export default Products;
