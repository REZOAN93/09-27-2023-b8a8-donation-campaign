import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import ErrorPage from "./ErrorPage";
import Statistics from "../Components/Statistics/Statistics";
import Details from "../Components/Campaign/Details";
import DonationData from "../Components/DonationData/DonationData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <DonationData />,
        loader: () => fetch("data.json"),
      },
      {
        path: "/donationDetails/:id",
        element: <Details />,
        loader: () => fetch("data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("data.json"),
      },
    ],
  },
]);
