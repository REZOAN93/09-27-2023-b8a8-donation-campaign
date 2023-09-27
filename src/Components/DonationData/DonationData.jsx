import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "../../Utilities/LocalStorage";
import DonatedDetails from "./DonatedDetails";
import Header from "../Shared/Header/Header";

const DonationData = () => {
  const allDonation = useLoaderData();
  const [donatedData, setDonatedData] = useState([]);
  const [donatedLength, setDonatedLength] = useState(0);
  const [dataLength, setDataLength] = useState(4);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const storedIds = getLocalStorageData();

    if (allDonation.length > 0) {
      const donatedDa = allDonation.filter((na) => storedIds.includes(na.id));
      setDonatedData(donatedDa);
      setDonatedLength(donatedDa.length);
    }
  }, [allDonation]);

  const handleDonatedBtn = () => {
    setDataLength(donatedData.length);
    setShowResults(true);
  };

  console.log(donatedLength)

  return (
    <div>
      <Header></Header>
      <div>
      <div className=" grid px-5 md:px-0 lg:px-0 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-8 gap-8">
        {donatedData.slice(0, dataLength).map((na) => (
          <DonatedDetails key={na.id} data={na}></DonatedDetails>
        ))}
      </div>
      <div
        className={`text-center mb-20 ${
          showResults == true || donatedLength <=4 ? "hidden" : ""
        }`}
      >
        <button
          onClick={handleDonatedBtn}
          className="btn btn-submit capitalize bg-colorShowAll hover:bg-green-900 border-none text-xl font-semibold text-white"
        >
          See All
        </button>
      </div>
      </div>
    </div>
  );
};

export default DonationData;
