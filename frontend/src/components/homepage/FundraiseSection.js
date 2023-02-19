import React from "react";
import "./FundraiseSection.css";
import yourself from "./../../images/start-yourself.png";
import startfriendsandfamily from "./../../images/start-friends-family.png";
import startcharity from "./../../images/start-charity.png";
import fundinghand from "./../../images/fundinghand2.png";

const FundraiseSection = () => {
  return (
    <div className="Fundraise">
      <div className="hr">
        <hr />
      </div>
      <div className="Fund">
        <div className="Text-Fund">
          <a>
            <p>To whom you</p>
            <h1>Fundraise for...</h1>
            <img className="Fundinghand" src={fundinghand} alt="" />
          </a>
        </div>
        <div className="Yourself-Friends-Charity">
          <div className="yourself-icons">
            <img className="yourself" src={yourself} alt="" />
            <p>Yourself</p>
          </div>
          <div className="friends-icons">
            <img className="friends" src={startfriendsandfamily} alt="" />
            <p>Friends & Family</p>
          </div>
          <div className="charity-icons">
            <img className="charity" src={startcharity} alt="" />
            <p>Charity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraiseSection;
