import PropTypes from "prop-types";

const Donation = ({ data }) => {
  const { id,category,name,picture1,font_color,background_color,btn_color} = data;
  return <div>
    <div className="card card-compact bg-base-100">
    <figure style={{width:'312px',height:'194px'}}><img style={{width:'312px',height:'194px'}} src={picture1} alt="Shoes" /></figure>
    <div className="">
        <button>{category}</button>
        <p>{name}</p>
    </div>
</div>

  </div>;
};

Donation.propTypes = {
  data: PropTypes.array,
};

export default Donation;
