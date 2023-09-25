import "./Cover.css";
const Cover = () => {
  return (
    <div className="bg-center cover-container">
      <div className="text-center cover-body">
        <div className="space-y-16">
          <div>
            <h1 className="mb-5 text-center text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div className="flex justify-center ">
            <input
              className=" rounded-s-xl p-3 w-96 h-14 focus:outline-gray-200"
              type="search"
              name=""
              placeholder="Search here..."
              id=""
            />
            <button className="p-3 w-36 h-14 text-lg font-semibold text-white bg-colorBgBtn rounded-e-xl">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
