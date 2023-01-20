import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import MainLogin from "../Auth/LoginAuth/MainLogin";
import ParentLogin from "../Auth/LoginAuth/SchoolLogin";
import StudentLogin from "../Auth/LoginAuth/StudentLogin";
import TeacherLogin from "../Auth/LoginAuth/TeacherLogin";
import MainAuth from "../Auth/MainAuth";
import ParentSignup from "../Auth/SchoolSignUp";
import StudentSignup from "../Auth/StudentSignup";
import TeachersSignUp from "../Auth/TeachersSignUp";
import FeeMangement from "../DashBoard/AdminDash/Screen/Expenses";
import Academics from "../DashBoard/AdminDash/Screen/Academics";
import Dashboard from "../DashBoard/AdminDash/Screen/Dashboard";
import Header from "../DashBoard/AllNav/Header";
import Report from "../DashBoard/AdminDash/Screen/Report";
import Notification from "../DashBoard/AdminDash/Screen/Notification";
import SchoolSignUp from "../Auth/SchoolSignUp";
import ConfirmSchool from "../Auth/ConfirmSchool";
import SchoolLogin from "../Auth/LoginAuth/SchoolLogin";
import SchoolConfirmVerify from "../Auth/SchoolConfirmVerify";
import TeacherHeader from "../DashBoard/TeacherDash/TeacherNav/TeacherHeader";
import TeacherDashboard from "../DashBoard/TeacherDash/TeacherComp/TeacherDashboard";
import StudentHeader from "../DashBoard/StudentDash/StudentNav/StudenHeader";
import StudentDashboard from "../DashBoard/StudentDash/StudentDashboard";
import PrivateRoute from "../Global/PrivateRoute";
import StudentTest from "../DashBoard/StudentDash/StudentTest";
import Attendance from "../DashBoard/TeacherDash/TeacherComp/Attendance/Attendance";
import SubjectTest from "../DashBoard/TeacherDash/TeacherComp/Test/SubjectTest";
import NoticeBoard from "../DashBoard/TeacherDash/TeacherComp/NoticeBoard/NoticeBoard";

import AssignmentScreen from "../DashBoard/StudentDash/AssignmentScreen";

import Students from "../DashBoard/AdminDash/Screen/Students";
import ClassRooms from "../DashBoard/AdminDash/Screen/ClassRooms";
import ConfirmTeacherMessage from "../Auth/ConfirmTeachersMessage";
import ClassRoomDetails from "../DashBoard/AdminDash/ClassRoomDetails";
import StudentDetails from "../DashBoard/AdminDash/StudentDetails";
import AllTest from "../DashBoard/TeacherDash/TeacherComp/Test/AllTest";
import TestDetail from "../DashBoard/TeacherDash/TeacherComp/Test/TestDetail";
import CreateTest from "../DashBoard/TeacherDash/TeacherComp/Test/CreateTest";

import TimeTable from "../DashBoard/StudentDash/TimeTable";
import StudentReport from "../DashBoard/StudentDash/StudentReport";
import StudentNot from "../DashBoard/StudentDash/StudentNot";

import Expenses from "../DashBoard/AdminDash/Screen/Expenses";

import DetailsTest from "../DashBoard/StudentDash/DetailsTest";
import TeacherReport from "../DashBoard/TeacherDash/TeacherComp/Report/TeacherReport";
import StatusStudent from "../DashBoard/StudentDash/StatusStudent";

import Lecture from "../DashBoard/TeacherDash/TeacherComp/Lectures/Lecture";
import LectureDetail from "../DashBoard/TeacherDash/TeacherComp/Lectures/LectureDetail";
import CreateQuestions from "../DashBoard/TeacherDash/TeacherComp/Test/CreateQuestions";
import StudentPerformance from "../DashBoard/StudentDash/StudentPerformance";
import LectureScreen from "../DashBoard/StudentDash/LectureScreen";
import LectureDetailRating from "../DashBoard/StudentDash/LectureDetailRating";
import ReportCard from "../DashBoard/StudentDash/ReportCard";
import TeacherDetails from "../DashBoard/AdminDash/Screen/TeacherDetails";
import SalaryPay from "../DashBoard/AdminDash/Screen/SalaryPay";

//  4b4b1a2eaa0a87dc574b3e44dd683eb8a1ad7649

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <PrivateRoute />,
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
        // {
        // 	path: "student-signup",
        // 	element: <StudentSignup />,
        // },
        {
          path: "school-signup",
          element: <SchoolSignUp />,
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
          path: "school",
          element: <SchoolLogin />,
        },
      ],
    },

    //Admin/School Route

    {
      path: "/admin-dashboard",
      children: [
        {
          index: true,
          element: (
            <>
              <PrivateRoute />
            </>
          ),
        },
        {
          path: "createteacher",
          children: [
            {
              index: true,
              element: (
                <>
                  <Header />
                  <Academics />
                </>
              ),
            },

            {
              path: "view-teacher-detail/:id",
              element: (
                <>
                  <Header />
                  <TeacherDetails />
                </>
              ),
            },
          ],
        },
        {
          path: "createstudent",
          children: [
            {
              index: true,
              element: (
                <>
                  <Header />
                  <Students />
                </>
              ),
            },

            {
              path: "view-student-detail/:id",
              element: (
                <>
                  <Header />
                  <StudentDetails />
                </>
              ),
            },
          ],
        },
        {
          path: "classrooms",
          children: [
            {
              index: true,
              element: (
                <>
                  <Header />
                  <ClassRooms />
                </>
              ),
            },
            {
              path: "view-class-details/:id",
              element: (
                <>
                  <Header />
                  <ClassRoomDetails />
                </>
              ),
            },
          ],
        },
        {
          path: "pay-salary",
          element: (
            <>
              <Header />
              <SalaryPay />
            </>
          ),
        },
        {
          path: "expenses",
          element: (
            <>
              <Header />
              <FeeMangement />
            </>
          ),
        },
        {
          path: "report",
          element: (
            <>
              <Header />
              <Report />
            </>
          ),
        },
        {
          path: "notifications",
          element: (
            <>
              <Header />
              <Notification />
            </>
          ),
        },
      ],
    },

    //Teachers Route
    {
      path: "/teacher-dashboard",
      children: [
        {
          index: true,
          element: (
            <>
              <PrivateRoute />
            </>
          ),
        },

        {
          path: "attendance",
          element: (
            <>
              <TeacherHeader />
              <Attendance />
            </>
          ),
        },
        {
          path: "test",
          children: [
            {
              index: true,
              element: (
                <>
                  <TeacherHeader />
                  <SubjectTest />
                </>
              ),
            },

            {
              path: "new_test/:id",
              element: (
                <>
                  <TeacherHeader />
                  <CreateTest />
                </>
              ),
            },

            {
              path: "alltest/:id",
              children: [
                {
                  index: true,
                  element: (
                    <>
                      <TeacherHeader />
                      <AllTest />
                    </>
                  ),
                },

                {
                  path: "preview_test",
                  element: (
                    <>
                      <TeacherHeader />
                      <TestDetail />
                    </>
                  ),
                },
                {
                  path: "add-questions",
                  element: (
                    <>
                      <TeacherHeader />
                      <CreateQuestions />
                    </>
                  ),
                },
              ],
            },
          ],
        },

        {
          path: "report",
          element: (
            <>
              <TeacherHeader />
              <TeacherReport />
            </>
          ),
        },
        {
          path: "lecture",
          element: (
            <>
              <TeacherHeader />
              <Lecture />
            </>
          ),
        },
        {
          path: "lecture_detail/:id",
          element: (
            <>
              <TeacherHeader />
              <LectureDetail />
            </>
          ),
        },
        {
          path: "noticeboard",
          element: (
            <>
              <TeacherHeader />
              <NoticeBoard />
            </>
          ),
        },
      ],
    },

    //Student Route
    {
      path: "/student-dashboard",
      children: [
        {
          index: true,
          element: (
            <>
              <StudentHeader />
              <StudentDashboard />
            </>
          ),
        },

        {
          path: "status/:id",
          element: (
            <>
              <StudentHeader />
              <StatusStudent />
            </>
          ),
        },
        {
          path: "lecture",
          element: (
            <>
              <StudentHeader />
              <AssignmentScreen />
            </>
          ),
        },
        {
          path: "lecture/lecture-screen/:id",
          element: (
            <>
              <StudentHeader />
              <LectureScreen />
            </>
          ),
        },
        {
          path: "report-card",
          element: (
            <>
              <StudentHeader />
              <ReportCard />
            </>
          ),
        },
        {
          path: "lecture-screen-detail/:myID",
          element: (
            <>
              <StudentHeader />
              <LectureDetailRating />
            </>
          ),
        },
        {
          path: "Time-Table",
          element: (
            <>
              <StudentHeader />
              <TimeTable />
            </>
          ),
        },
        {
          path: "general-performance",
          element: (
            <>
              <StudentHeader />
              <StudentPerformance />
            </>
          ),
        },
        {
          path: "student-report",
          element: (
            <>
              <StudentHeader />
              <StudentReport />
            </>
          ),
        },
        {
          path: "student-notifications",
          element: (
            <>
              <StudentHeader />
              <StudentNot />
            </>
          ),
        },
        {
          path: "student-test",
          children: [
            {
              index: true,
              element: (
                <>
                  <StudentHeader />
                  <StudentTest />
                </>
              ),
            },

            {
              path: "student-test-details/:id",
              element: (
                <>
                  <StudentHeader />
                  <DetailsTest />
                </>
              ),
            },
          ],
        },
      ],
    },

    {
      path: "/confirm",
      element: <ConfirmSchool />,
    },
    {
      path: "/api/school/verified/:id",
      element: <SchoolConfirmVerify />,
    },
    {
      path: "/api/teacher/verified/:id",
      element: <ConfirmTeacherMessage />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
};

export default AllRoutes;
