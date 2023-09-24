const Cover = () => {
  return (
    <div className="">
      <div
        className="bg-gradient-to-r from-lime-700 "
        style={{
          backgroundImage: "url(https://i.ibb.co/1zJTz5V/bgimg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="">
          <div>
            <h1 className="mb-5 text-center text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
          </div>
            <div className="flex justify-center ">
              <input className=" rounded-s-xl p-3 w-96 focus:outline-gray-200" type="search" name="" placeholder="Search here..." id="" />
              <button className="p-3 w-36 text-base font-semibold text-white bg-red-500 rounded-e-xl">Search</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
