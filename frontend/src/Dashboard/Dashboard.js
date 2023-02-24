import React from 'react';
import "./Dashboard.css"
import AdminHomepage from "./Admin/pages/home/Homepage";
import Topbar from "./Admin/Components/topbar/Topbar";
import Sidebar from "./Admin/Components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      {/* <Topbar/> */}
        <div className="container">
           <Sidebar />
           <AdminHomepage /> 
           </div>
    </div>
  )
}

export default Dashboard;
