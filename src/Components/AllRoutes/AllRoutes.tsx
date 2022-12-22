import React from "react";
import { useRoutes } from "react-router-dom";



import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
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
