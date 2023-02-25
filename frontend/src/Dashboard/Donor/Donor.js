import React from "react";
import DonorNavbar from "./DonorNavbar/DonorNavbar";
import Projects from "./Projects/Projects";
import "./Donor.css";

const Donor = () => {
  return (
    <div className="Donor">
      <DonorNavbar />
      <div className="Quotes" style={{ fontSize: "3em" }}>
        <p style={{ color: "#3cb100" }}>Alone we can do little.</p>
        <p style={{ marginLeft: "4em" }}>Together we can do so much.</p>
      </div>
      <Projects />
    </div>
  );
};

export default Donor;
