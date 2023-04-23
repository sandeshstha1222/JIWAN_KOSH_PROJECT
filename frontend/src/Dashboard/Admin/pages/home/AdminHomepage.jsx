import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import "./home.css";
import AidAgency from "../aidAgency/AidAgency";

export default function Homepage() {
  return (
    <div className="Admin-home">
      <Featuredinfo />
      <div className="Agency">
        <AidAgency />
      </div>
    </div>
  );
}
