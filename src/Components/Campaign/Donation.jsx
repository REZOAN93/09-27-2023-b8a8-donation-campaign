import PropTypes from "prop-types";
import "./donation.css";


const Donation = ({ data, handleDonation }) => {
  const { id, category, name, picture1, font_color, backgroundColor } = data;

  const textStyle = {
    color: font_color,
  };
  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
         <div
        onClick={() => handleDonation(id)}
        style={containerStyle}
        className="rounded-lg flex flex-col cardContainer"
      >
        <figure id="img-box">
          <img src={picture1} alt="Shoes" />
        </figure>
        <div className=" p-5 flex-grow space-y-2">
          <button
            style={containerStyle}
            className="px-3 py-1 font-medium rounded-md text-sm border-none"
            disabled
          >
            <span style={textStyle}>{category}</span>
          </button>
          <p style={textStyle} className=" text-base md:text-lg lg:text-xl xl:text-lg font-bold">
            {name}
          </p>
        </div>
      </div>
  );
};

Donation.propTypes = {
  data: PropTypes.object,
  handleDonation: PropTypes.func,
};

export default Donation;
