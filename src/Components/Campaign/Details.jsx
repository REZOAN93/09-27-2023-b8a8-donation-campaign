import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { savedDonatedList } from "../../Utilities/LocalStorage";
import "./Details.css";
import Header from "../Shared/Header/Header";

const Details = () => {
  const navigate=useNavigate()
  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const specificData = data.find((na) => na.id === idInt);
  const { name, donation_amount, description, picture2,font_color } = specificData;

  const btnStyle = {
    backgroundColor:font_color,
  };
  const handleDonateAmount=()=>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `You have Successfully Donate`,
      text: `The amount $${donation_amount} for ${name}`,
      showConfirmButton: false,
      timer: 2000
    })
    navigate('/')
    savedDonatedList(idInt)
  }

  return (
    <div>
      <div>
      <Header></Header>
      </div>
      <div className="max-w-7xl mx-auto my-2 pb-20 px-5 md:px-0 space-y-5">
      <div className="card">
       <div className="  relative">
        <figure className="w-full md:h-screen rounded-lg ">
          <img className="w-full md:h-screen rounded-lg" src={picture2} alt="Shoes" />
        </figure>
       </div>
       <div className=" absolute inset-x-0 bottom-0 bg-colorBg py-8 px-3 rounded-bl-lg rounded-br-lg">
        <button onClick={handleDonateAmount} style={btnStyle} className="btn border-none text-xl font-semibold text-white">Donate ${donation_amount}</button>
      </div>
      </div>
      <h2 className=" text-4xl font-bold">{name}</h2>
        <p className=" text-base text-justify text-gray-500">{description}</p>    
    </div>
    </div>
  );
};

export default Details;
