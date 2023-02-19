import React from "react";
import "./DonateSection.css";
import donation1 from "./../../images/Donation1.jpg";
import donation2 from "./../../images/Donation2.jpg";
import donation3 from "./../../images/Donation3.jpg";

const DonateSection = () => {
  return (
    <div className="HeadOfDonation">
      <h1>Fundrequired in your Areas</h1>
      <div className="Donation-Box">
        <div className="Donation1">
          <div className="Donation-Info">
            <img className="Donation-Img" src={donation1} alt="DONATION1" />
            <div className="Info-Donation">
              <p>
                Mahima Adhikari, a social activist, who is economically poor is
                in serious condition and needs more than ventilator support.
                Doctor has recommended for ECMO treatment which is expensive so,
                his well wishers have started fund raising campaign to get
                financial support from people. Donate us to support her with
                finance.
              </p>
            </div>
          </div>
        </div>
        <div className="Donation2">
          <div className="Donation-Info">
            <img className="Donation-Img" src={donation2} alt="DONATION2" />
            <div className="Info-Donation">
              <p>
                Mahima Adhikari, a social activist, who is economically poor is
                in serious condition and needs more than ventilator support.
                Doctor has recommended for ECMO treatment which is expensive so,
                his well wishers have started fund raising campaign to get
                financial support from people. Donate us to support her with
                finance.
              </p>
            </div>
          </div>
        </div>
        <div className="Donation3">
          <div className="Donation-Info">
            <img className="Donation-Img" src={donation3} alt="DONATION3" />
            <div className="Info-Donation">
              <p>
                Mahima Adhikari, a social activist, who is economically poor is
                in serious condition and needs more than ventilator support.
                Doctor has recommended for ECMO treatment which is expensive so,
                his well wishers have started fund raising campaign to get
                financial support from people. Donate us to support her with
                finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
