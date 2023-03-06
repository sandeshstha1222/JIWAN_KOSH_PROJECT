import React from "react";
import "./Dashboard.css";
import AgencySidebar from "./Components/agencysidebar/AgencySidebar";
import AgencyHomepage from "./pages/home/AgencyHomepage";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="container">
        <AgencySidebar />
        <AgencyHomepage />
      </div>
    </div>
  );
};

export default Dashboard;
