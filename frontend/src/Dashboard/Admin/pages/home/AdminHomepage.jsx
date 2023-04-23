import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import "./home.css";

import Chart from "../../Components/AgencyChart/Chart";

export default function Homepage() {
  return (
    <div className="Admin-home">
      <Featuredinfo />
      <div className="Agency">
        <Chart />
      </div>
    </div>
  );
}
