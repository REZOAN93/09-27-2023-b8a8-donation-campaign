import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Donation from "./Donation";

const Campaign = () => {
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  const handleDonation = (id) => {
    navigate(`/donationDetails/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {donations.map((na) => (
          <Donation
            key={na.id}
            data={na}
            handleDonation={handleDonation}
          ></Donation>
        ))}
      </div>
    </div>
  );
};

export default Campaign;
