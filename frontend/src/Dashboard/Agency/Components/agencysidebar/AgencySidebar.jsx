import "./agencysidebar.css";
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

export default function AgencySidebar() {
  return (
    <div className="agencysidebar">
      <div className="agencysidebarWrapper">
        <div className="agencysidebarMenu">
          <div className="agencytop-profile">
            <div>
              <img src={profile} className="image" alt="p" />
            </div>
            <div className="agencyprofile-details">
              <h3 style={{ color: "white" }}>JiwanKosh</h3>
              <p>Agency</p>
            </div>
          </div>

          <ul className="agencysidebarList">
            <li
              style={{ color: "black" }}
              className="agencysidebarListItem active"
            >
              <LineStyleIcon className="agencysidebarIcon" />
              Home
            </li>
            <hr />
            <div className="agencySidebar-Second">
              <Link to="/dProject">
                <li className="agencysidebarListItem">
                  <PaidIcon className="agencysidebarIcon" />
                  Donation Project
                </li>
              </Link>

              <li className="agencysidebarListItem">
                <AccountBalanceIcon className="agencysidebarIcon" />
                Bank
              </li>

              <li className="agencysidebarListItem">
                <PeopleIcon className="agencysidebarIcon" />
                Beneficiaries
              </li>
              <li className="agencysidebarListItem">
                <ShoppingCartIcon className="agencysidebarIcon" />
                Vendors
              </li>
              <li className="agencysidebarListItem">
                <CompareArrowsIcon className="agencysidebarIcon" />
                Transaction
              </li>
            </div>
            <Link to="/">
              <li
                className="agencysidebarListItem"
                onClick={() => localStorage.clear()}
              >
                <LogoutOutlinedIcon className="agencysidebarIcon" />
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
