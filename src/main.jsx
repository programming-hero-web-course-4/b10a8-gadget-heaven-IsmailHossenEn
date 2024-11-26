import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Error from "./components/Error/Error.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Products/:product_id",
        element: <ProductDetails />,
        loader: () => fetch("/ProductsData.json"),
      },
      {
        path: "Statistics",
        element: <Statistics />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
