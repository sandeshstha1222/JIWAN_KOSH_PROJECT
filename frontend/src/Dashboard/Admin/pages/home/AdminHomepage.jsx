import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import "./home.css";

import WidgetSm from "../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import AidAgency from "../aidAgency/AidAgency";

export default function Homepage() {
  return (
    <div className="Admin-home">
      <Featuredinfo />
      <div className="Agency">
        <AidAgency />
      </div>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
