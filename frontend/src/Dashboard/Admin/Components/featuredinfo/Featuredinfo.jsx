import "./featuredinfo.css";

import ProjectDisplay from "../../pages/Projectdisplay/projectDisplay";
import BeneficiaryDisplay from "../../pages/Beneficiary/BeneficiaryDisplay";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredContainer">
          <ProjectDisplay />
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredContainer">
          <BeneficiaryDisplay />
        </div>
      </div>
    </div>
  );
}
