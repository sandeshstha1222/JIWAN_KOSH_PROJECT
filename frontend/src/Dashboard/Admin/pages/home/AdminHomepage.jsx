import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import "./home.css";
import Chart from "../../Components/chart/Chart";
import { donationData } from "../../Components/dummyData";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";

export default function Homepage() {
  return (
    <div className="Admin-home">
      <Featuredinfo />
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
