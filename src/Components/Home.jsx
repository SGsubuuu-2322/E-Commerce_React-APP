// import React from 'react'

import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { productContext } from "../Utils/Context";
// import axios from "../Utils/Axios";

const Home = () => {
  const [products] = useContext(productContext);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category);

  // const getProductsCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setFilteredProducts(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    if (!filteredProducts || category === "undefined")
      setFilteredProducts(products);
    if (category !== "undefined") {
      // getProductsCategory()
      setFilteredProducts(products.filter((p) => p.category == category));
    }
  }, [category, products]);

  // console.log(filteredProducts);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
