// import React from 'react'

import axios from "./Axios";
import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios("/products");
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <productContext.Provider value={[products, setProducts]}>
      {children}
    </productContext.Provider>
  );
};

export default Context;
