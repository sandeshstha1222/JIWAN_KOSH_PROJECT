import React from "react";
import "./Dashboard.css";
import AdminHomepage from "./Admin/pages/home/AdminHomepage";
import Topbar from "./Admin/Components/topbar/Topbar";
import AdminSidebar from "./Admin/Components/sidebar/AdminSidebar";
import AgencySidebar from "./Agency/Components/agencysidebar/AgencySidebar";
import AgencyHomepage from "./Agency/pages/home/AgencyHomepage";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      {/* <Topbar/> */}
      <div className="container">
        {/* <AdminSidebar />
        <AdminHomepage /> */}
        <AgencySidebar />
        <AgencyHomepage />
      </div>
    </div>
  );
};

export default Dashboard;
