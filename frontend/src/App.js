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
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
