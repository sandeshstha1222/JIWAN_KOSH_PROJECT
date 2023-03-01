import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AppsIcon from "@mui/icons-material/Apps";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import profile from "../../../../images/Profile.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="top-profile">
            <div>
              <img src={profile} className="image" alt="p" />
            </div>
            <div className="profile-details">
              <h3 style={{ color: "white" }}>JiwanKosh</h3>
              <p>Admin</p>
            </div>
          </div>

          <ul className="sidebarList">
            <li style={{ color: "black" }} className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <hr />
            <div className="Sidebar-Second">
              <Link to="/raisefunds">
                <li className="sidebarListItem">
                  <AttachMoneyIcon className="sidebarIcon" />
                  Raise Fund
                </li>
              </Link>
              <Link to="/operation">
                <li className="sidebarListItem">
                  <AppsIcon className="sidebarIcon" />
                  Operation
                </li>
              </Link>
              <li className="sidebarListItem">
                <CorporateFareIcon className="sidebarIcon" />
                Aid Agency
              </li>
              <Link to="/donationProject">
                <li className="sidebarListItem">
                  <PaidIcon className="sidebarIcon" />
                  Donation Project
                </li>
              </Link>
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
                <CompareArrowsIcon className="sidebarIcon" />
                Transaction
              </li>
            </div>
            <li className="sidebarListItem">
              <LogoutOutlinedIcon className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
