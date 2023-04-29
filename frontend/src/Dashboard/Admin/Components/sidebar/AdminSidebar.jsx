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
            <Link to="/Home" className="Link">
              <li style={{ color: "black" }} className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <hr />
            <div className="Sidebar-Second">
              <Link to="/tokenoperation" className="Link">
                <li className="sidebarListItem">
                  <AppsIcon className="sidebarIcon" />
                  Operation
                </li>
              </Link>
              <Link to="/requestlist" className="Link">
                <li className="sidebarListItem">
                  <ShoppingCartIcon className="sidebarIcon" />
                  Token Request List
                </li>
              </Link>
              <Link to="/AidAgency" className="Link">
                <li className="sidebarListItem">
                  <CorporateFareIcon className="sidebarIcon" />
                  Aid Agency
                </li>
              </Link>
              <Link to="/Projectdisplay" className="Link">
                <li className="sidebarListItem">
                  <PaidIcon className="sidebarIcon" />
                  Display Project
                </li>
              </Link>
              <li className="sidebarListItem">
                <AccountBalanceIcon className="sidebarIcon" />
                Bank/Vendors
              </li>
              <Link to="/beneficiary" className="Link">
                <li className="sidebarListItem">
                  <PeopleIcon className="sidebarIcon" />
                  Beneficiaries
                </li>
              </Link>

              <li className="sidebarListItem">
                <CompareArrowsIcon className="sidebarIcon" />
                Transaction
              </li>
            </div>
            <Link to="/" className="Link">
              <li
                className="sidebarListItem"
                onClick={() => localStorage.clear()}
              >
                <LogoutOutlinedIcon className="sidebarIcon" />
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
