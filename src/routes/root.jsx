import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import ErrorPage from "./ErrorPage";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";
import Details from "../Components/Campaign/Details";

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
        element: <Donation />,
      },
      {
        path: "/donationDetails/:id",
        element: <Details />,
        loader: () => fetch("data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);
