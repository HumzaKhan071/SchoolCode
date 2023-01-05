import { IconBaseProps, IconType } from "react-icons";
import { SiGoogleclassroom, SiMicrosoftacademic } from "react-icons/si";
import { FaChalkboardTeacher, FaMoneyBillAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";
import { HiDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineDisconnect } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { User } from "../../Global/RecoilState";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBriefcaseSharp } from "react-icons/io5";

interface NavCon {
	name: string;
	icon: IconType;
	to: string;
}

export const SideBarItem: NavCon[] = [
	{
		name: "Dashboard",
		icon: (prop: IconBaseProps) => <MdDashboard />,
		to: "/admin-dashboard",
	},

	{
		name: "Teachers",
		icon: (prop: IconBaseProps) => <FaChalkboardTeacher />,
		to: "/admin-dashboard/createteacher",
	},
	{
		name: "Students",
		icon: (prop: IconBaseProps) => <BsFillPeopleFill />,
		to: "/admin-dashboard/createstudent",
	},
	{
		name: "ClassRooms",
		icon: (prop: IconBaseProps) => <SiGoogleclassroom />,
		to: "/admin-dashboard/classrooms",
	},
	{
		name: "Expenses",
		icon: (prop: IconBaseProps) => <FaMoneyBillAlt />,
		to: "/admin-dashboard/expenses",
	},
	{
		name: "Reports",
		icon: (prop: IconBaseProps) => <HiDocumentReport />,
		to: "/admin-dashboard/report",
	},

	{
		name: "Events",
		icon: (prop: IconBaseProps) => <IoIosNotifications />,
		to: "/admin-dashboard/notifications",
	},
];
