// import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../Utils/Axios";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { productContext } from "../Utils/Context";
import { toast } from "react-toastify";

const Details = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useContext(productContext);
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

  const handleDeletion = (id) => {
    const filteredProducts = products.filter((p) => p.id != id);

    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    toast.success("Product deleted successfully...");
    Navigate("/");
  };

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
        <Link
          to={`/edit/${product.id}`}
          className="px-5 py-2 rounded border border-blue-300 text-blue-300 mr-5"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDeletion(product.id)}
          className="px-5 py-2 rounded border border-red-300 text-red-300 "
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
