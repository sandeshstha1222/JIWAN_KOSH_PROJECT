import "./agencywidgetSm.css";
import img1 from "../../../../images/image.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import img2 from "../../../../images/image4.jpg";

export default function AgencyWidgetsm() {
  return (
    <div className="agencywidgetSm">
      <p className="agencywidgetSmTitle">New Joined Client</p>
      <ul className="agencywidgetSmList">
        <li className="agencywidgetSmListItem">
          <img src={img1} alt="" className="agencywidgetSmImg" />
          <div className="agencywidgetSmClient">
            <p className="agencywidgetSmClientName"> Ram shah</p>
            <p className="agencywidgetSmClientAmount"> 50000</p>
          </div>
          <div>
            <button className="agencywidgetSmButton">
              <VisibilityIcon className="agencywidgetSmIcon" />
              Display
            </button>
          </div>
        </li>
        <li className="agencywidgetSmListItem">
          <img src={img1} alt="" className="agencywidgetSmImg" />
          <div className="agencywidgetSmClient">
            <p className="agencywidgetSmClientName"> SitaRam Khatri</p>
            <p className="agencywidgetSmClientAmount"> 30000</p>
          </div>
          <div>
            <button className="agencywidgetSmButton">
              <VisibilityIcon className="agencywidgetSmIcon" />
              Display
            </button>
          </div>
        </li>
        <li className="agencywidgetSmListItem">
          <img src={img2} alt="" className="agencywidgetSmImg" />
          <div className="agencywidgetSmClient">
            <p className="agencywidgetSmClientName"> Dipesh Ojha</p>
            <p className="agencywidgetSmClientAmount"> 40000</p>
          </div>
          <div>
            <button className="agencywidgetSmButton">
              <VisibilityIcon className="agencywidgetSmIcon" />
              Display
            </button>
          </div>
        </li>
        <li className="agencywidgetSmListItem">
          <img src={img2} alt="" className="agencywidgetSmImg" />
          <div className="agencywidgetSmClient">
            <p className="agencywidgetSmClientName"> Shyam Khatri</p>
            <p className="agencywidgetSmClientAmount"> 60000</p>
          </div>
          <div>
            <button className="agencywidgetSmButton">
              <VisibilityIcon className="agencywidgetSmIcon" />
              Display
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
