import { IconBaseProps, IconType } from "react-icons";
import { SiMicrosoftacademic } from "react-icons/si";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";
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
		to: "/student-dashboard",
	},
	{
		name: "Assignemt",
		icon: (prop: IconBaseProps) => <SiMicrosoftacademic />,
		to: "/student-dashboard/assignment",
	},
	{
		name: "Time-Table",
		icon: (prop: IconBaseProps) => <FaMoneyBillAlt />,
		to: "/",
	},
	{
		name: "Tests",
		icon: (prop: IconBaseProps) => <CgCommunity />,
		to: "/",
	},
	{
		name: "Report",
		icon: (prop: IconBaseProps) => <HiDocumentReport />,
		to: "/",
	},

	{
		name: "Notification",
		icon: (prop: IconBaseProps) => <IoIosNotifications />,
		to: "/admin-dashboard/notifications",
	},
];
