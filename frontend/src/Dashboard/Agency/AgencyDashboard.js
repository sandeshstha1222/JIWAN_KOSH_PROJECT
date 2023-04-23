import React from "react";
import "./AgencyDashboard.css";
import AgencySidebar from "./Components/agencysidebar/AgencySidebar";
import AgencyHomepage from "./pages/home/AgencyHomepage";
const AgencyDashboarddisplay = () => {
  return (
    <div className="Dashboard">
      <div className="container">
        <AgencySidebar />
        <AgencyHomepage />
      </div>
    </div>
  );
};

export default AgencyDashboarddisplay;
