import "./App.css";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { ToastContainer, toast } from "react-toastify";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import AdminDashboard from "./Dashboard/Admin/Dashboard";
import AgencyDashboard from "./Dashboard/Agency/AgencyDashboard";
import TokenOperation from "./Dashboard/Admin/pages/tokenOperation/TokenOperation";
import ProjectDisplay from "./Dashboard/Admin/pages/Projectdisplay/projectDisplay";
import DisplayProject from "./Dashboard/Agency/pages/projectDisplay/DisplayProject";
import BeneficiaryDisplay from "./Dashboard/Admin/pages/Beneficiary/BeneficiaryDisplay";
import DProject from "../src/Dashboard/Agency/pages/dProject/DProject";
import DonationProjects from "./Dashboard/Donor/Projects/Projects";
import RequestToken from "./Dashboard/Donor/RequestToken/RequestToken";
import Donor from "./Dashboard/Donor/Donor";
import DonorTransaction from "./Dashboard/Donor/Transaction/Transaction";
import ProjectDetails from "./Dashboard/Donor/Projects/ProjectDetails";
import Beneficiary from "./Dashboard/Beneficiary/Beneficiary";
import EnrollProjects from "./Dashboard/Beneficiary/EnrollProjects/EnrollProject";
import TransferToken from "./Dashboard/Beneficiary/TransferToken/TokenTransfer";
import Dashboard from "./Dashboard/Admin/Dashboard";
import AgencyDashboarddisplay from "./Dashboard/Agency/AgencyDashboard";
import BeneficiariesDis from "./Dashboard/Agency/pages/BeneficiariesDisplay/BeneficiariesDis";
import AidAgency from "./Dashboard/Admin/pages/aidAgency/AidAgency";
import Bank from "./Dashboard/Bank/Bank";
import SendMoney from "./Dashboard/Bank/SendMoney/SendMoney";
import BankRequestList from "./Dashboard/Bank/RequestList/RequestList";
import AdminRequestList from "./Dashboard/Admin/pages/RequestList/RequestList";

function App() {
  return (
    <div className="App">
      <div className="Path">
        <Router>
          <Routes>
            {/* {!localStorage.getItem("Email") && (
              <>
                <Route exact path="/login" element={<Login />} />
                <Route
                  exact
                  path="/beneficiaryhome"
                  element={<Navigate replace to="/login" />}
                />
                <Route
                  exact
                  path="/donorhome"
                  element={<Navigate replace to="/login" />}
                />
                <Route
                  exact
                  path="/agencydashboard"
                  element={<Navigate replace to="/login" />}
                />
                <Route
                  exact
                  path="/admindashboard"
                  element={<Navigate replace to="/login" />}
                />
              </>
            )} */}
            {/* {localStorage.getItem("Role") == "Donor" && (
              <>
                <Route
                  exact
                  path="/"
                  element={<Navigate replace to="/donorhome" />}
                />

                <Route
                  exact
                  path="/login"
                  element={<Navigate replace to="/donorhome" />}
                />
              </>
            )} */}
            {/* {localStorage.getItem("Role") == "Beneficiary" && (
              <>
                <Route
                  exact
                  path="/"
                  element={<Navigate replace to="/beneficiaryhome" />}
                />

                <Route
                  exact
                  path="/login"
                  element={<Navigate replace to="/beneficiaryhome" />}
                />
              </>
            )}
            {localStorage.getItem("Role") == "Aid Agency" && (
              <>
                <Route
                  exact
                  path="/"
                  element={<Navigate replace to="/agencyhome" />}
                />

                <Route
                  exact
                  path="/login"
                  element={<Navigate replace to="/agencyhome" />}
                />
              </>
            )}
            {localStorage.getItem("Role") == "Admin" && (
              <>
                <Route
                  exact
                  path="/"
                  element={<Navigate replace to="/admindashboard" />}
                />

                <Route
                  exact
                  path="/login"
                  element={<Navigate replace to="/admindashboard" />}
                />
              </>
            )} */}

            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/agencydashboard" element={<AgencyDashboard />} />
            <Route path="/beneficiary" element={<BeneficiaryDisplay />} />
            <Route path="/Home" element={<Dashboard />} />
            <Route path="/AgencyHome" element={<AgencyDashboarddisplay />} />
            <Route path="/tokenoperation" element={<TokenOperation />} />
            <Route path="/requestlist" element={<AdminRequestList />} />
            <Route path="/Projectdisplay" element={<ProjectDisplay />} />
            <Route path="/dProject" element={<DProject />} />
            <Route path="/DisplayProject" element={<DisplayProject />} />
            <Route path="/tokenrequest" element={<RequestToken />} />
            <Route path="/donationprojects" element={<DonationProjects />} />
            <Route path="/donorhome" element={<Donor />} />
            <Route path="/bank/home" element={<Bank />} />
            <Route path="/bank/requestlist" element={<BankRequestList />} />
            <Route path="/bank/transfermoney" element={<SendMoney />} />
            <Route path="/projectdetails" element={<ProjectDetails />} />
            <Route path="/beneficiaryhome" element={<Beneficiary />} />
            <Route path="/enrollprojects" element={<EnrollProjects />} />
            <Route path="/transfertoken" element={<TransferToken />} />
            <Route path="/donor/transaction" element={<DonorTransaction />} />

            <Route
              path="/BeneficiariesDisplay"
              element={<BeneficiariesDis />}
            />
            <Route path="/AidAgency" element={<AidAgency />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
