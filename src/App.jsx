// import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <nav className="h-full w-[15%] flex flex-col items-center bg-zinc-50 pt-5">
        <a
          href="/create"
          className="px-5 py-2 rounded border border-blue-300 text-blue-300 "
        >
          Create a new product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="text-2xl font-semibold w-[80%] mb-3">Category Filter</h1>
        <ul className="w-[80%]">
          <li className="flex items-center mb-3">
            <span className="w-[15px] h-[15px] mr-2 bg-blue-100 rounded-full"></span>
            Cat-1
          </li>
          <li className="flex items-center mb-3">
            <span className="w-[15px] h-[15px] mr-2 bg-green-100 rounded-full"></span>
            Cat-2
          </li>
          <li className="flex items-center mb-3">
            <span className="w-[15px] h-[15px] mr-2 bg-red-100 rounded-full"></span>
            Cat-3
          </li>
        </ul>
      </nav>

      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
