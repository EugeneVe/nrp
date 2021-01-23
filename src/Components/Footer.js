import React from "react";
import Links from "./Links";
import * as ReactBootStrap from "react-bootstrap";
import Moment from "react-moment";

const Footer = () => (
  <div className="footerwrapper">
    <ReactBootStrap.Navbar expand="sm" className="bottomNavBar">
      <div className="footer_links">
        <Links />
      </div>
      <div className="copyright">
        <span>© EugeneV 2020 - </span>
        <Moment format="YYYY" />
      </div>
    </ReactBootStrap.Navbar>
  </div>
);

export default Footer;
