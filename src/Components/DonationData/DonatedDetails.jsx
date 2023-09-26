import PropTypes from "prop-types";

const DonatedDetails = ({ data }) => {
  const { name, donation_amount, picture2, font_color,category,backgroundColor } = data;

  const textStyle = {
    color: font_color,
  };
  const containerStyle = {
    backgroundColor: backgroundColor,
  };
  const btnStyle = {
    backgroundColor:font_color,
  };

  return (
    <div>
      <div style={containerStyle} className="card card-side bg-base-100">
        <figure className=" w-56 h-52">
          <img
          className=" w-56 h-52"
            src={picture2}
            alt="picture"
          />
        </figure>
        <div className="p-5 space-y-2">
        <button
          style={containerStyle}
          className="btn btn-sm font-medium text-sm border-none"
          disabled
        >
          <span style={textStyle}>{category}</span>
        </button>
        <p className=" text-xl font-bold text-black">
          {name}
        </p>
        <p style={textStyle} className=" text-xl font-bold">
          ${donation_amount}.00
        </p>
        <button style={btnStyle} className="btn border-none text-xl font-semibold text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};
DonatedDetails.propTypes = {
  data: PropTypes.object,
};

export default DonatedDetails;
