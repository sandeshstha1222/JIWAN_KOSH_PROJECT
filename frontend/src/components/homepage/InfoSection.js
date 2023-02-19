import React from "react";
import "./InfoSection.css";
import infoimage from "./../../images/InfoImage.png";
const InfoSection = () => {
  return (
    <div className="Info-Body">
      <img className="info-image" src={infoimage} alt="DONATION" />
      <div className="text">
        <div className="Info-JiwanKosh">
          <h1>
            <a>FUNDING</a>
          </h1>
          <h1>
            <b>ON</b>
          </h1>
          <h1>
            <c>JIWAN KOSH</c>
          </h1>
          <hr />
          <p>
            Small <a>Funding</a>, Powerful <c>Fundraising</c>
          </p>
        </div>
        <div className="Funding-Details">
          <p>
            <a style={{ color: "3cb100" }}>Fundraising</a> is a significant way
            that non-profit organizations may obtain the money for their
            operations. These operations can involve a very broad array of
            concerns such as religious or philanthropic groups such as research
            organizations, public broadcasters, political campaigns and
            environmental issues. Some examples of charitable organizations
            include student scholarship merit awards for athletic or academic
            achievements, humanitarian and ecological concerns, disaster relief,
            human rights, research, and other social issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
