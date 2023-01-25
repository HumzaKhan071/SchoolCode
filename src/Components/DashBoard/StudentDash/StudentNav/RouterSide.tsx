import { IconBaseProps, IconType } from "react-icons";
import { SiMicrosoftacademic } from "react-icons/si";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";
import { HiDocumentReport } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

interface NavCon {
	name: string;
	icon: IconType;
	to: string;
}

export const SideBarItem: NavCon[] = [
	{
		name: "Dashboard",
		icon: (prop: IconBaseProps) => <MdDashboard />,
		to: "/student-dashboard",
	},

	{
		name: "Status",
		icon: (prop: IconBaseProps) => <FaMoneyBillAlt />,
		to: "/student-dashboard/status/:id",
	},
	{
		name: "General Performance",
		icon: (prop: IconBaseProps) => <FaMoneyBillAlt />,
		to: "/student-dashboard/general-performance",
	},
	{
		name: "Report Card",
		icon: (prop: IconBaseProps) => <FaMoneyBillAlt />,
		to: "/student-dashboard/report-card",
	},
	{
		name: "Tests",
		icon: (prop: IconBaseProps) => <CgCommunity />,
		to: "/student-dashboard/student-test",
	},
	{
		name: "Report",
		icon: (prop: IconBaseProps) => <HiDocumentReport />,
		to: "/student-dashboard/student-report",
	},

	{
		name: "Notification",
		icon: (prop: IconBaseProps) => <IoIosNotifications />,
		to: "/student-dashboard/student-notifications",
	},
	{
		name: "Lecture",
		icon: (prop: IconBaseProps) => <SiMicrosoftacademic />,
		to: "/student-dashboard/lecture",
	},
	{
		name: "Settings",
		icon: (prop: IconBaseProps) => <AiFillSetting />,
		to: "/student-dashboard/settings",
	},
];
