import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="home">
      <div class="text-box">
        <h1>
          <a>JIWAN</a> <b>KOSH</b>
        </h1>
        <p>
          A shared commitment to relieve suffering and improve the lives of{" "}
          <br /> needy people.
        </p>
        <Link to="/login">
          <div className="startfunding">START FUNDING</div>
        </Link>
        <div className="moto">
          <br />
          We are raising money for the needy people who needs money for their
          any situation <br />
          and your contribution will make a great impact, whether you donate Rs
          5 or Rs 5000. <br />
          Many of the people seen raising funds in the street. So this is the
          platform for those
          <br />
          needy people to raise fund through online platform. Thank you for your
          support!
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
