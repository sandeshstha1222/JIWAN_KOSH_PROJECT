import Featuredinfo from "../../../Agency/Components/featuredinfo/Featuredinfo";
import "./home.css"
import Chart from "../../../Agency/Components/chart/Chart";
import { donationData } from "../../../Agency/Components/dummyData";
import WidgetSm from "../../../Agency/Components/widgetSm/WidgetSm";
import WidgetLg from "../../../Agency/Components/widgetLg/WidgetLg";

export default function Homepage() {
  return (
    <div className="home">
     <Featuredinfo />
     <Chart data = {donationData} title = "Donation Analytics" grid dataKey= "Beneficiary1" />
     <div className="homeWidgets">
      <WidgetSm />
      <WidgetLg />
     </div>
    </div>
  )
}
