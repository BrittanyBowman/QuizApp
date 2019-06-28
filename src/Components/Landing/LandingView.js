import React from "react";
import logo1 from "../images/logo1.png";
import "./Landing.scss";
import HeaderView from "./../Header/HeaderView";
import { Link } from "react-router-dom";

var Landing = props => {
  return (
      <div>
    <HeaderView />
    <div className="card">
      <center>
        <img className="logo" src={logo1} alt="logo" />
      </center>
      <div className="landing-container">
          <h3>What would you like to do?</h3>
        <div className="landing-Buttons">
          <Link to="/Pin" className="btn-1">
            Take Quiz
          </Link>
          <div class="divider"/>
          <Link to="/Register" className="btn-1">
            Make Quiz
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landing;