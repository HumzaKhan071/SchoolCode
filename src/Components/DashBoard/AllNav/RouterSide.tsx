import {IconBaseProps, IconType } from "react-icons"
import {SiMicrosoftacademic} from 'react-icons/si';
import { FaMoneyBillAlt } from 'react-icons/fa';
import {IoIosNotifications } from 'react-icons/io';
import {CgCommunity } from 'react-icons/cg';
import {HiDocumentReport } from 'react-icons/hi';
import {MdDashboard } from 'react-icons/md';

interface NavCon
{
    name: string;
    icon: IconType;
    to: string; 
}

export const SideBarItem: NavCon[] = [
    
    {
        name: "Dashboard",
        icon: (prop: IconBaseProps) => <MdDashboard />,
        to:"admin-dashboard"
        
    },
    {
        name: "Create Teacher",
        icon: (prop: IconBaseProps) => <SiMicrosoftacademic />,
        to:"/admin-dashboard/createteacher"
    },
    {
        name: "Create Student",
        icon: (prop: IconBaseProps) => <FaMoneyBillAlt />,
        to:"/admin-dashboard/createstudent"
    },
    {
        name: "Expenses",
        icon: (prop: IconBaseProps) => <CgCommunity />,
        to:"/admin-dashboard/expenses"
    },
    {
        name: "Report",
        icon: (prop: IconBaseProps) => <HiDocumentReport />,
        to:"/admin-dashboard/report"
    },
 
    {
        name: "Notification",
        icon: (prop: IconBaseProps) => <IoIosNotifications />,
        to:"/admin-dashboard/notifications"
    }

]