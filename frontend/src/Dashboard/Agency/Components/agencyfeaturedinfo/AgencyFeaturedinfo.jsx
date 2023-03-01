import "./agencyfeaturedinfo.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function AgencyFeaturedinfo() {
  return (
    <div className="Agencyfeatured">
      <div className="AgencyfeaturedItem">
        <p className="AgencyfeaturedTitle">Donation Project</p>
        <div className="AgencyfeaturedContainer">
          <p className="AgencyfeaturedValue">5</p>
          <p className="AgencyfeaturedRate">
            +5.6 <ArrowUpwardIcon className="AgencyfeaturedIcon" />
          </p>
          <div>
            <p className="AgencyfeaturedSub">Compared to last month</p>
          </div>
        </div>
      </div>
      <div className="AgencyfeaturedItem">
        <p className="AgencyfeaturedTitle">Beneficiaries</p>
        <div className="AgencyfeaturedContainer">
          <p className="AgencyfeaturedValue">3</p>
          <p className="AgencyfeaturedRate">
            -2.4 <ArrowDownwardIcon className="AgencyfeaturedIconNegative" />
          </p>
          <div>
            <p className="AgencyfeaturedSub">Compared to last month</p>
          </div>
        </div>
      </div>
      <div className="AgencyfeaturedItem">
        <p className="AgencyfeaturedTitle">Vendors</p>
        <div className="AgencyfeaturedContainer">
          <p className="AgencyfeaturedValue">10</p>
          <p className="AgencyfeaturedRate">
            +4.5 <ArrowUpwardIcon className="AgencyfeaturedIcon" />
          </p>
          <div>
            <p className="AgencyfeaturedSub">Compared to last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
