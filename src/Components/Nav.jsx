// import React from 'react'

import { useContext } from "react";
import { productContext } from "../Utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(productContext);

  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategory = [...new Set(distinctCategory)];
  // console.log(distinctCategory);

  return (
    <nav className="h-full w-[15%] flex flex-col items-center bg-zinc-50 pt-5">
      <a
        href="/create"
        className="px-5 py-2 rounded border border-blue-300 text-blue-300 "
      >
        Create a new product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl font-semibold w-[80%] mb-3">Category Filter</h1>
      <div className="w-[80%]">
        {distinctCategory.map((item, index) => {
          return (
            <Link
              to={`/?category=${item}`}
              key={index}
              className="flex items-center mb-3"
            >
              <span className="w-[15px] h-[15px] mr-2 bg-blue-100 rounded-full"></span>
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
