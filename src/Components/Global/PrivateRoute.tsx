import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import Dashboard from "../DashBoard/AdminDash/Screen/Dashboard";
import Header from "../DashBoard/AllNav/Header";
import StudentDashboard from "../DashBoard/StudentDash/StudentDashboard";
import StudentHeader from "../DashBoard/StudentDash/StudentNav/StudenHeader";
import TeacherDashboard from "../DashBoard/TeacherDash/TeacherDashboard";
import TeacherHeader from "../DashBoard/TeacherDash/TeacherNav/TeacherHeader";
import Home from "../Home/Home";
import { User } from "./RecoilState";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const PrivateRoute = ({ children, ...props }: Props) => {
  const userData = useRecoilValue(User);

  return (
    <div>
      {userData?.status === "School" ? (
        <>
          <div>
            <Header />
            <Dashboard />
          </div>
        </>
      ) : (
        <>
          {userData?.status === "Teacher" ? (
            <>
              <div>
                <TeacherHeader />
                <TeacherDashboard />
              </div>
            </>
          ) : (
            <>
              {userData?.status === "Student" ? (
                <>
                  <div>
                    <StudentHeader />
                    <StudentDashboard />
                  </div>
                </>
              ) : (
                <div>
                  <Home />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PrivateRoute;
