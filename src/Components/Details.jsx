// import React from 'react'
import { Link, useParams } from "react-router-dom";
// import axios from "../Utils/Axios";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { productContext } from "../Utils/Context";

const Details = () => {
  const [products] = useContext(productContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios(`/products/${id}`);
  //     setProduct(data);
  //     // console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  return product ? (
    <div className="w-[80%] p-[10%] flex justify-between items-center h-full m-auto gap-10">
      <img
        className="h-[100%] w-[40%] object-contain"
        src={`${product.image}`}
        alt="product-image"
      />

      <div className="content w-[60%]">
        <h1 className="text-4xl tracking-tighter">{product.title}</h1>
        <h3 className="text-zinc-400 my-3">{product.category}</h3>
        <h2 className="text-red-300 mb-2">${product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link className="px-5 py-2 rounded border border-blue-300 text-blue-300 mr-5">
          Edit
        </Link>
        <Link className="px-5 py-2 rounded border border-red-300 text-red-300 ">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
