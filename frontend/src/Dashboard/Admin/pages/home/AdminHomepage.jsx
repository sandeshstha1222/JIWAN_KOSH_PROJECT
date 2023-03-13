import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import "./home.css";
import AgencyChart from "../../Components/AgencyChart/AgencyChart";

export default function AdminHomepage() {
  return (
    <div className="Admin-home">
      <Featuredinfo />
      <div className="Agency">
        <AgencyChart />
      </div>
    </div>
  );
}
