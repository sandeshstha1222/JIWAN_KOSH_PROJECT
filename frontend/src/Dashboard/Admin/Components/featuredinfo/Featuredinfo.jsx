import "./featuredinfo.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
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
      <div className="featuredItem">
        <p className="featuredTitle">Vendors</p>
        <div className="featuredContainer">
          <p className="featuredValue">10</p>
          <p className="featuredRate">
            +4.5 <ArrowUpwardIcon className="featuredIcon" />
          </p>
          <div>
            <p className="featuredSub">Compared to last month</p>
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <p className="featuredTitle">Total tokens</p>
        <div className="featuredContainer">
          <p className="featuredValue">1000000</p>
          <p className="featuredRate">
            +7.4 <ArrowUpwardIcon className="featuredIcon" />
          </p>
          <div>
            <p className="featuredSub">Compared to last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
