import AgencyFeaturedinfo from "../../Components/agencyfeaturedinfo/AgencyFeaturedinfo";
import "./agencyhome.css";
import Chart from "../../Components/agencychart/AgencyChart";
import { donationData } from "../../Components/agencydummyData";
import WidgetSm from "../../Components/agencywidgetSm/AgencyWidgetSm";
import WidgetLg from "../../Components/agencywidgetLg/AgencyWidgetLg";

export default function Homepage() {
  return (
    <div className="Agency-home">
      <AgencyFeaturedinfo />
      <Chart
        data={donationData}
        title="Donation Analytics"
        grid
        dataKey="Beneficiary1"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
