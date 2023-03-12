import AgencyFeaturedinfo from "../../Components/agencyfeaturedinfo/AgencyFeaturedinfo";
import "./agencyhome.css";

import WidgetSm from "../../Components/agencywidgetSm/AgencyWidgetSm";
import WidgetLg from "../../Components/agencywidgetLg/AgencyWidgetLg";

export default function Homepage() {
  return (
    <div className="Agency-home">
      <AgencyFeaturedinfo />

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
