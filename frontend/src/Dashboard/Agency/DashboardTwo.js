import React from "react";
import "./agencyDashboard.css";
import AgencySidebar from "./Components/agencysidebar/AgencySidebar";
import AgencyHomepage from "./pages/home/AgencyHomepage";
const DashboardTwo = () => {
  return (
    <div className="Dashboard">
      <div className="container">
        <AgencySidebar />
        <AgencyHomepage />
      </div>
    </div>
  );
};

export default DashboardTwo;
