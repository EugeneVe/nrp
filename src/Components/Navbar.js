import React from "react";
// import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import Links from "./Links";

//Toggle Nav
const burger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  nav.classList.toggle("nav-active");
  //Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  //Burger Animation
  burger.classList.toggle("toggle");
};

const NavBar = (props) => {
  return (
    <div>
      <div className="nav_blur"></div>
      <nav>
        <Link to="/">
          <div className="myBrand">
            <span>EV</span>
          </div>
        </Link>
        <div className="nav-links">
          <Links />
        </div>
        <div className="burger_wrap">
          <div className="burger" onClick={burger}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

/* <ReactBootStrap.Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" classNameName="topNavBar">
  <Link to="/">
    <div classNameName="myBrand">
      <span>EV</span>
    </div>
  </Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav classNameName="mr-auto"></ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <Links />
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>; */
