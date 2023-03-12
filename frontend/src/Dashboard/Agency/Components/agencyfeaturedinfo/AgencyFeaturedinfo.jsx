import "./agencyfeaturedinfo.css";
import DisplayProject from "../../pages/projectDisplay/DisplayProject";
import BeneficiaryDis from "../../pages/BeneficiariesDisplay/BeneficiariesDis";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredContainer">
          <DisplayProject />
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredContainer">
          <BeneficiaryDis />
        </div>
      </div>
    </div>
  );
}
