import React from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

//Toggle Nav
export const Burger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".navLis_animation");
  nav.classList.toggle("nav-active");
  //Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ""; //anuimate each time u open burger
    } else {
      link.style.animation = `navLinkFade 200ms ease forwards ${
        index / 5 + 0.2
      }s`;
    }
  });
  //Burger Animation
  burger.classList.toggle("toggle");
};

export const NavBar = () => {
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
          <div className="burger" onClick={Burger}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};
