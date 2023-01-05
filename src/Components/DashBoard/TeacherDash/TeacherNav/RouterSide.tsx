import { IconBaseProps, IconType } from "react-icons";
import { SiMicrosoftacademic } from "react-icons/si";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { TbBooks } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

interface NavCon {
  name: string;
  icon: IconType;
  to: string;
}

export const SideBarItem: NavCon[] = [
  {
    name: "Dashboard",
    icon: (prop: IconBaseProps) => <MdDashboard />,
    to: "/teacher-dashboard",
  },
  {
    name: "Attendance",
    icon: (prop: IconBaseProps) => <SiMicrosoftacademic />,
    to: "/teacher-dashboard/attendance",
  },
  {
    name: "Lectures",
    icon: (prop: IconBaseProps) => <TbBooks />,
    to: "/teacher-dashboard/lecture",
  },
  {
    name: "Test",
    icon: (prop: IconBaseProps) => <FaMoneyBillAlt />,
    to: "/teacher-dashboard/test",
  },

  {
    name: "Report",
    icon: (prop: IconBaseProps) => <HiDocumentReport />,
    to: "/teacher-dashboard/report",
  },

  {
    name: "Notice Board",
    icon: (prop: IconBaseProps) => <IoIosNotifications />,
    to: "/teacher-dashboard/noticeboard",
  },
];
