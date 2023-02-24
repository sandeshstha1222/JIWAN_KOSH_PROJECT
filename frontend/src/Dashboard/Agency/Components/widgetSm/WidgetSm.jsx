import "./widgetSm.css"
import img1 from "../../../../images/image.jpg";
import VisibilityIcon from '@mui/icons-material/Visibility';
import img2 from "../../../../images/image4.jpg";




export default function Widgetsm() {
  return (
    <div className="widgetSm">
       <span className="widgetSmTitle">New Joined Client</span>
       <ul className="widgetSmList">
        <li className="widgetSmListItem">
            <img src={img1} alt="" className="widgetSmImg" />
            <div className="widgetSmClient">
                <span className="widgetSmClientName"> Ram shah</span>
                <span className="widgetSmClientAmount"> 50000</span>
            </div>
            <button className="widgetSmButton">
             <VisibilityIcon className="widgetSmIcon"/>
             Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src={img1} alt="" className="widgetSmImg" />
            <div className="widgetSmClient">
                <span className="widgetSmClientName"> SitaRam Khatri</span>
                <span className="widgetSmClientAmount"> 30000</span>
            </div>
            <button className="widgetSmButton">
             <VisibilityIcon className="widgetSmIcon"/>
             Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src={img2} alt="" className="widgetSmImg" />
            <div className="widgetSmClient">
                <span className="widgetSmClientName"> Dipesh Ojha</span>
                <span className="widgetSmClientAmount"> 40000</span>
            </div>
            <button className="widgetSmButton">
             <VisibilityIcon className="widgetSmIcon"/>
             Display
            </button>
        </li>
        <li className="widgetSmListItem">
            <img src={img2} alt="" className="widgetSmImg" />
            <div className="widgetSmClient">
                <span className="widgetSmClientName"> Shyam Khatri</span>
                <span className="widgetSmClientAmount"> 60000</span>
            </div>
            <button className="widgetSmButton">
             <VisibilityIcon className="widgetSmIcon"/>
             Display
            </button>
        </li>
        
       </ul>
    </div>
  )
}
