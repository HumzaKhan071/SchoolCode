import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../DashBoard/AdminDash/Screen/Dashboard";
import Academics from "../DashBoard/AdminDash/Screen/Academics";
import Commubication from "../DashBoard/AdminDash/Screen/Commubication";
import FeeMangement from "../DashBoard/AdminDash/Screen/FeeMangement";
import Notification from "../DashBoard/AdminDash/Screen/Notification";
import Report from "../DashBoard/AdminDash/Screen/Report";

const DashRoute = () => {
  let element = useRoutes([
    {
      path:"/admin-dashboard",
      children:[
        {
          index:true,
          element:<Dashboard/>

        },
        {
          path:"createteacher",
          element:<Academics/>

        },
        {
          path:"createstudent",
          element:<Commubication/>

        },
        {
          path:"expenses",
          element:<FeeMangement/>

        },
        {
          path:"report",
          element:<Report/>

        },
        {
          path:"notifications",
          element:<Notification/>

        },
      ]
    }
  ]);

  return element;
};

export default DashRoute;
