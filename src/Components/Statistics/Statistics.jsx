import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router";
import { getLocalStorageData } from "../../Utilities/LocalStorage";
import Header from "../Shared/Header/Header";

const Statistics = () => {
  const allDonation = useLoaderData();
  const [donatedData, setDonatedData] = useState([]);

  useEffect(() => {
    const storedIds = getLocalStorageData();
    if (allDonation.length > 0) {
      const donatedData = allDonation.filter((na) => storedIds.includes(na.id));
      setDonatedData(donatedData);
    }
  }, [allDonation]);

  const allData = allDonation.length;
  const donateData = donatedData.length;

  const data = [
    ["Pizza", "Popularity"],
    ["Total Donation", allData],
    ["Your Donation", donateData],
  ];

  const options = {
    legend: { position: "bottom" },
  };

  return (
    <div>
      <Header></Header>
      <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
      </div>
    </div>
  );
};

export default Statistics;
