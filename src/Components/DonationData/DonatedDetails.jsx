import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const DonatedDetails = ({ data }) => {
  const navigate=useNavigate()
  const {
    name,
    id,
    donation_amount,
    picture2,
    font_color,
    category,
    backgroundColor,
  } = data;

  const textStyle = {
    color: font_color,
  };
  const containerStyle = {
    backgroundColor: backgroundColor,
  };
  const btnStyle = {
    backgroundColor: font_color,
  };
  const handleViewDetails=()=>{
    navigate(`/donationDetails/${id}`)
  }

  return (
    <div style={containerStyle} className="card card-side bg-base-100 flex flex-row">
      <figure className=" w-5/12 h-full">
        <img className=" w-full h-full" src={picture2} alt="picture" />
      </figure>
      <div className="p-5 w-7/12 space-y-2 flex-grow">
        <button
          style={containerStyle}
          className="px-3 py-2 rounded-lg font-medium text-sm border-none"
          disabled
        >
          <span style={textStyle}>{category}</span>
        </button>
        <p className=" text-xl font-bold text-black">{name}</p>
        <p style={textStyle} className=" text-xl font-bold">
          ${donation_amount}.00
        </p>
        <button
        onClick={handleViewDetails}
          style={btnStyle}
          className="btn border-none capitalize text-base md:text-xl font-semibold text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
DonatedDetails.propTypes = {
  data: PropTypes.object,
};

export default DonatedDetails;
