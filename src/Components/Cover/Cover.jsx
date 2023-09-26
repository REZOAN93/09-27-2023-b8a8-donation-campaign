import { useState } from "react";
import "./Cover.css";
const Cover = () => {
  const [displayData, setDisplayData] = useState([]);
  

  const HandleDisplayData = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    console.log(category)
  };

  return (
    <div className="cover-body">
      <div className="text-center p-20">
        <div className="space-y-10">
          <div>
            <h1 className="mb-5 text-center text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div className="flex justify-center">
            <form onSubmit={HandleDisplayData}>
              <input
                className=" rounded-s-xl py-3 w-96 h-14 focus:outline-gray-200 px-5"
                type="search"
                name="category"
                placeholder="Search here..."
                id=""
              />
              <input
                className="p-3 w-36 h-14 text-lg font-semibold text-white bg-colorBgBtn hover:bg-red-800 rounded-e-xl"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
