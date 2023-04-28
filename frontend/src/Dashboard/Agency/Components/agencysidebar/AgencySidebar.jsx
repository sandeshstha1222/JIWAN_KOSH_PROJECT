import "./agencysidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";

import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";

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
            <Link to="/AgencyHome">
              <li
                style={{ color: "black" }}
                className="agencysidebarListItem active"
              >
                <LineStyleIcon className="agencysidebarIcon" />
                Home
              </li>
            </Link>
            <hr />
            <div className="agencySidebar-Second">
              <Link to="/dProject">
                <li className="agencysidebarListItem">
                  <PaidIcon className="agencysidebarIcon" />
                  Donation Project
                </li>
              </Link>

              <Link to="/BeneficiariesDisplay">
                <li className="agencysidebarListItem">
                  <PeopleIcon className="agencysidebarIcon" />
                  Beneficiaries
                </li>
              </Link>

              <li className="agencysidebarListItem">
                <CompareArrowsIcon className="agencysidebarIcon" />
                Transaction
              </li>
              <Link to="/DisplayProject">
                <li className="agencysidebarListItem">
                  <CompareArrowsIcon className="agencysidebarIcon" />
                  Display Project
                </li>
              </Link>
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
