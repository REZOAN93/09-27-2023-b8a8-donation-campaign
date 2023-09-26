import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "../../Utilities/LocalStorage";
import DonatedDetails from "./DonatedDetails";

const DonationData = () => {
  const allDonation = useLoaderData();
  const [donatedData, setDonatedData] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedIds = getLocalStorageData();
    if (allDonation.length > 0) {
      const donatedData = allDonation.filter((na) => storedIds.includes(na.id));
      setDonatedData(donatedData);
    }
  }, [allDonation]);

  return (
    <div>
      <div className=" grid grid-cols-2 max-w-7xl mx-auto my-8 gap-8">
        {donatedData.slice(0, dataLength).map((na) => (
          <DonatedDetails key={na.id} data={na}></DonatedDetails>
        ))}
        </div>
        <div className={`text-center mb-20 ${dataLength === allDonation.length && "hidden"}`}>
          <button
            onClick={() => setDataLength(allDonation.length)}
            className="btn btn-submit bg-colorShowAll hover:bg-green-900 border-none text-xl font-semibold text-white"
          >
            Show All
          </button>
      </div>
    </div>
  );
};

export default DonationData;
