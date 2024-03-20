// import React from 'react'

import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";

const App = () => {
  const { pathname, search } = useLocation();
  return (
    <div className="h-screen w-screen flex">
      {(pathname !== "/" || search.length > 0) && (
        <Link
          to="/"
          className="text-red-400 cursor-pointer absolute  top-[4%] left-[18%]"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
