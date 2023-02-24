import "./App.css";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import Dashboard from "./Dashboard/Dashboard";
import Operation from "./Dashboard/Admin/pages/operation/Operation";
import Raisefund from "./Dashboard/Admin/pages/raiseFunds/RaiseFunds";

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
            <Route path="/operation" element={<Operation />} />
            <Route path="/raisefunds" element={<Raisefund />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
