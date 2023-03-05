import React from "react";
import "./Dashboard.css";
import AdminHomepage from "./pages/home/AdminHomepage";
import AdminSidebar from "./Components/sidebar/AdminSidebar";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="container">
        <AdminSidebar />
        <AdminHomepage />
      </div>
    </div>
  );
};

export default Dashboard;
