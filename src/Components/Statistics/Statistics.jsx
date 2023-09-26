import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router";
import { getLocalStorageData } from "../../Utilities/LocalStorage";

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
 
  return (
    <Chart
      chartType="PieChart"
      data={data}
      width={"100%"}
      height={"600px"}
    />
  );
};

export default Statistics;
