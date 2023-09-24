import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import ErrorPage from "./ErrorPage";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";
import Cover from "../Components/Cover/Cover";

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
          path: "/statistics",
          element: <Statistics />,
        },
      ],
    },
  ]);