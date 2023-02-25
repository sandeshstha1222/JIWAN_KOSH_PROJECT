import "./widgetSm.css";
import img1 from "../../../../images/image.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import img2 from "../../../../images/image4.jpg";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <p className="widgetSmTitle">New Joined Client</p>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={img1} alt="" className="widgetSmImg" />
          <div className="widgetSmClient">
            <p className="widgetSmClientName"> Ram shah</p>
            <p className="widgetSmClientAmount"> 50000</p>
          </div>
          <div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img src={img1} alt="" className="widgetSmImg" />
          <div className="widgetSmClient">
            <p className="widgetSmClientName"> SitaRam Khatri</p>
            <p className="widgetSmClientAmount"> 30000</p>
          </div>
          <div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img src={img2} alt="" className="widgetSmImg" />
          <div className="widgetSmClient">
            <p className="widgetSmClientName"> Dipesh Ojha</p>
            <p className="widgetSmClientAmount"> 40000</p>
          </div>
          <div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </div>
        </li>
        <li className="widgetSmListItem">
          <img src={img2} alt="" className="widgetSmImg" />
          <div className="widgetSmClient">
            <p className="widgetSmClientName"> Shyam Khatri</p>
            <p className="widgetSmClientAmount"> 60000</p>
          </div>
          <div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
