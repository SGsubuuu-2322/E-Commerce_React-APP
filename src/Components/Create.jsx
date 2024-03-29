// import React from 'react'

import { useContext, useState } from "react";
import { productContext } from "../Utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useContext(productContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() < 5 ||
      image.trim() < 5 ||
      category.trim() < 5 ||
      price.trim() < 1 ||
      description.trim() < 5
    ) {
      alert("Each and every field must have 4 characters...");
      return;
    }

    const newProduct = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };

    setProducts((prev) => [...prev, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    toast.success("Product created successfully...");

    Navigate("/");
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
        placeholder="Image Link"
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <textarea
        rows="10"
        placeholder="Enter product description here..."
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />

      <div className="w-1/2">
        <button className="px-5 py-2 rounded border border-blue-300 text-blue-300 ">
          Create a new product
        </button>
      </div>
    </form>
  );
};

export default Create;
