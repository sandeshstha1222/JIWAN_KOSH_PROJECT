import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


export default function Sidebar() {

       

  return (
    <div className="sidebar">
     <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
                </li>
                <li className="sidebarListItem">
                <PaidIcon className="sidebarIcon"/>
                Donation Project
                </li>
                <li className="sidebarListItem">
                <AccountBalanceIcon className="sidebarIcon" />
                Bank
                </li>
                <li className="sidebarListItem">
                <PeopleIcon className="sidebarIcon" />
                Beneficiaries
                </li>
                <li className="sidebarListItem">
                <ShoppingCartIcon className="sidebarIcon" />
                Vendors
                </li>
                <li className="sidebarListItem">
                <CompareArrowsIcon className="sidebarIcon"/>
                Transaction
                </li>
                <li className="sidebarListItem">
                <LogoutOutlinedIcon className="sidebarIcon"/>
                Logout
                </li>
                
                </ul>
        </div>
     </div>
    </div>
  )
}

