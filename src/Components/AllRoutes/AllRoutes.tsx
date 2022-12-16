import React from "react";
import { useRoutes } from "react-router-dom";
import MainLogin from "../Auth/LoginAuth/MainLogin";
import ParentLogin from "../Auth/LoginAuth/ParentLogin";
import StudentLogin from "../Auth/LoginAuth/StudentLogin";
import TeacherLogin from "../Auth/LoginAuth/TeacherLogin";
import MainAuth from "../Auth/MainAuth";
import ParentSignup from "../Auth/ParentSignup";
import StudentSignup from "../Auth/StudentSignup";
import TeachersSignUp from "../Auth/TeachersSignUp";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
const AllRoutes = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <Home />,
		},

		{
			path: "/get-started",
			children: [
				{
					index: true,
					element: <MainAuth />,
				},

				{
					path: "teacher-signup",
					element: <TeachersSignUp />,
				},
				{
					path: "student-signup",
					element: <StudentSignup />,
				},
				{
					path: "parent-signup",
					element: <ParentSignup />,
				},
			],
		},

		{
			path: "/login",
			children: [
				{
					index: true,
					element: <MainLogin />,
				},

				{
					path: "teacher",
					element: <TeacherLogin />,
				},
				{
					path: "student",
					element: <StudentLogin />,
				},
				{
					path: "parent",
					element: <ParentLogin />,
				},
			],
		},

		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return element;
};

export default AllRoutes;
