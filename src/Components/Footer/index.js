import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Moment from "react-moment";
import "./index.scss";

const Footer = () => (
  <div className="footerwrapper">
    <ReactBootStrap.Navbar expand="sm" className="bottomNavBar">
      <div className="copyright">
        <p className="mailToFooter">
          <span>Email:</span>
          <a href="mailto:eugene.veprytskyi@gmail.com"> eugene.veprytskyi@gmail.com</a>
        </p>
        <span>© EugeneV 2020 - </span>
        <Moment format="YYYY" />
      </div>
    </ReactBootStrap.Navbar>
  </div>
);

export default Footer;
