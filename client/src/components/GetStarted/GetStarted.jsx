import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Nestopia</span>
          <span className="secondaryText">
          Subscribe to access exclusive property deals and unbeatable prices.
            <br />
            Find your dream home today!
          </span>
          <button className="button" href>
            <a href="mailto:xwyang@umich.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;