import "./App.css";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import Dashboard from "./Dashboard/Dashboard";
import DonationProjects from "./Dashboard/Donor/Projects/Projects";
import RequestToken from "./Dashboard/Donor/RequestToken/RequestToken";
import Donor from "./Dashboard/Donor/Donor";
import ProjectDetails from "./Dashboard/Donor/Projects/ProjectDetails";
import Beneficiary from "./Dashboard/Beneficiary/Beneficiary";
import EnrollProjects from "./Dashboard/Beneficiary/EnrollProjects/EnrollProject";

function App() {
  return (
    <div className="App">
      <div className="Path">
        <Router>
          <div></div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tokenrequest" element={<RequestToken />} />
            <Route path="/donationprojects" element={<DonationProjects />} />
            <Route path="/donorhome" element={<Donor />} />
            <Route path="/projectdetails" element={<ProjectDetails />} />
            <Route path="/beneficiaryhome" element={<Beneficiary />} />
            <Route path="/enrollprojects" element={<EnrollProjects />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
