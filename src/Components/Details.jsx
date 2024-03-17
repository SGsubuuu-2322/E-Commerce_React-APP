// import React from 'react'

import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] p-[10%] flex justify-between items-center h-full m-auto">
      <img
        className="h-[90%] w-[40%] object-contain"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="product-image"
      />

      <div className="content w-[60%]">
        <h1 className="text-4xl tracking-tighter">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h3 className="text-zinc-400 my-3">mens clothing</h3>
        <h2 className="text-red-300 mb-2">$109.95</h2>
        <p className="mb-[5%]">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <Link className="px-5 py-2 rounded border border-blue-300 text-blue-300 mr-5">
          Edit
        </Link>
        <Link className="px-5 py-2 rounded border border-red-300 text-red-300 ">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Details;
