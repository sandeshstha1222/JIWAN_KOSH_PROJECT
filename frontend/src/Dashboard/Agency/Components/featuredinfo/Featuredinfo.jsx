import "./featuredinfo.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Featuredinfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Donation Project</span>
            <div className="featuredContainer">
            <span className="featuredValue">5</span>
            <span className="featuredRate">
                +5.6 <ArrowUpwardIcon className="featuredIcon"/>
            </span>
            <div>
            <span className="featuredSub">Compared to last month</span>
            </div>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Beneficiaries</span>
            <div className="featuredContainer">
            <span className="featuredValue">3</span>
            <span className="featuredRate">
                -2.4 <ArrowDownwardIcon className="featuredIconNegative"/>
            </span>
            <div>
            <span className="featuredSub">Compared to last month</span>
            </div>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Vendors</span>
            <div className="featuredContainer">
            <span className="featuredValue">10</span>
            <span className="featuredRate">
                +4.5 <ArrowUpwardIcon className="featuredIcon" />
            </span>
            <div>
            <span className="featuredSub">Compared to last month</span>
            </div>
            </div>
        </div>
         </div>
  )
}
