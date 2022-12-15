import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Home/Home";
const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return element;
};

export default AllRoutes;
