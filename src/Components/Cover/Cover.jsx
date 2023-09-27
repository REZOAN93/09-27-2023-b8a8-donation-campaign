import "./Cover.css";
import PropTypes from "prop-types";
import imgbg from "../../assets/bgimg.jpg";

const Cover = ({ HandleDisplayData }) => {
  return (
    <div className="">
      <div>
        <div className="text-center relative">
          <div style={{ height: "500px" }} className=" w-cover">
            <img
              style={{ height: "500px" }}
              className="imagebg"
              src={imgbg}
              alt=""
            />
          </div>
          <div className=" space-y-3 md:space-y-10 absolute top-40 text-center w-full ">
            <div>
              <h1 className="mb-5 text-center text-2xl md:text-4xl lg:text-5xl font-bold">
                I Grow By Helping People In Need
              </h1>
            </div>
            <div className="flex justify-center">
              <form onSubmit={HandleDisplayData}>
                <input
                  className=" rounded-s-xl py-3 w-40 md:w-96 h-14 focus:outline-gray-200 px-5"
                  type="search"
                  name="category"
                  placeholder="Search here..."
                  id=""
                />
                <input
                  className="p-3 w-24 md:w-36 h-14 text-lg font-semibold text-white bg-colorBgBtn hover:bg-red-800 rounded-e-xl"
                  type="submit"
                  value="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Cover.propTypes = {
  HandleDisplayData: PropTypes.func,
};

export default Cover;
