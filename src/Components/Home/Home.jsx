import { useEffect, useState } from "react";
import Donation from "../Campaign/Donation";
import { useNavigate } from "react-router";
import Cover from "../Cover/Cover";
import Header from "../Shared/Header/Header";

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setDisplayData(data);
      });
  }, []);

  const HandleDisplayData = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = e.target.category.value;
    if (category) {
      const specificData = donations.filter(
        (na) => na.category.toLowerCase() == category.toLowerCase()
      );
      setDisplayData(specificData);
      form.reset();
    }
  };

  const handleDonation = (id) => {
    navigate(`/donationDetails/${id}`);
  };

  return (
    <div>
      <div>
        <div className="relative">
          <div className="">
            <Cover HandleDisplayData={HandleDisplayData}></Cover>
          </div>
          <div className=" absolute w-full top-0">
            <Header></Header>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-10">
          <div className="grid px-5 md:px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {displayData.map((na) => (
              <Donation
                key={na.id}
                data={na}
                handleDonation={handleDonation}
              ></Donation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
