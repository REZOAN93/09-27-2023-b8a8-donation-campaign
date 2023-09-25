import PropTypes from "prop-types";
import "./donation.css";

const Donation = ({ data }) => {
  const { category, name, picture1, font_color, backgroundColor } = data;
  console.log(backgroundColor);

  const textStyle = {
    color: font_color,
  };
  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div style={containerStyle} className="rounded-lg flex flex-col">
      <figure id="img-box">
        <img src={picture1} alt="Shoes" />
      </figure>
      <div className=" p-5 flex-grow space-y-2">
        <button style={(containerStyle)} className="btn btn-sm font-medium text-sm border-none">
           <span style={(textStyle)}>{category}</span>
        </button>
        <p style={textStyle} className=" text-xl font-bold">
          {name}
        </p>
      </div>
    </div>
  );
};

Donation.propTypes = {
  data: PropTypes.array,
};

export default Donation;
