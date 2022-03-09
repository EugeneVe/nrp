import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AllContext } from 'AllContext';
import Links from 'Components/Links';
import './index.scss';

//Toggle Nav
export const Burger = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.navLis_animation');
  nav.classList.toggle('nav-active');
  //Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''; //animate each time u open burger
    } else {
      link.style.animation = `navLinkFade 200ms ease forwards ${index / 5 + 0.2}s`;
    }
  });
  //Burger Animation
  burger.classList.toggle('toggle');
};

const NavBar = () => {
  const [name, setName] = useContext(AllContext);

  return (
    <div>
      <div className="nav_blur"></div>
      <nav>
        <Link to="/">
          <div className="myBrand">
            <div className="flag-blue" />
            <div className="flag-yellow" />
            <span>EV</span>
          </div>
        </Link>
        <input className="enter-your-name" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
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

export default NavBar;
