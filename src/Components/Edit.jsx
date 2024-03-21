// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { productContext } from "../Utils/Context";
// import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const [products, setProducts] = useContext(productContext);
  const Navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  //   console.log(product);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      product.title.trim() < 5 ||
      product.image.trim() < 5 ||
      product.category.trim() < 5 ||
      product.price.trim() < 1 ||
      product.description.trim() < 5
    ) {
      alert("Each and every field must have 4 characters...");
      return;
    }

    // console.log(product);
    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };

    // console.log(copyData);
    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    toast.success("Product edited successfully...");
    Navigate(-1);
    // console.log(newProduct);
  };

  return (
    <form
      className="p-[5%] w-screen h-screen flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add new Product</h1>

      <input
        type="url"
        name="image"
        placeholder="Image Link"
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        value={product && product.image}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        value={product && product.title}
        onChange={changeHandler}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3"
          value={product && product.category}
          onChange={changeHandler}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3"
          value={product && product.price}
          onChange={changeHandler}
        />
      </div>
      <textarea
        rows="10"
        name="description"
        placeholder="Enter product description here..."
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        value={product && product.description}
        onChange={changeHandler}
      />

      <div className="w-1/2">
        <button className="px-5 py-2 rounded border border-blue-300 text-blue-300 ">
          Edit this product
        </button>
      </div>
    </form>
  );
};

export default Edit;
