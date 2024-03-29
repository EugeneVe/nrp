import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "AllContext";
import { ReactComponent as Night } from "assests/images/night.svg";
import { ReactComponent as Day } from "assests/images/day.svg";
import Links from "Components/Links";
import { ReactComponent as Signature } from "assests/images/signature.svg";
import "./index.scss";

export const Burger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
};

const NavBar = () => {
  const [name, setName] = useContext(AllContext);
  const [enterName, setEnterName] = useState("");
  const [dayNight, setDayNight] = useState(() => localStorage.getItem("day-night") === "true");
  const whiteColor = "--white";
  const darkColor = "--darkgray";

  const changeColor = () => {
    setDayNight(!dayNight);
  };

  useEffect(() => {
    localStorage.setItem("day-night", dayNight);
    if (dayNight) {
      document.documentElement.style.setProperty(whiteColor, "rgba(20, 20, 20, 1)");
      document.documentElement.style.setProperty(darkColor, "rgba(255,255,255,0.5)");
    } else {
      document.documentElement.style.setProperty(whiteColor, "rgba(255,255,255,0.9)");
      document.documentElement.style.setProperty(darkColor, "rgba(32, 36, 39, 0.5)");
    }
  }, [dayNight]);

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
        <div className="nav-links">
          <Links />
          <button className="black-white" onClick={changeColor}>
            {dayNight ? <Day /> : <Night />}
          </button>
          <div className="name-enter-wrapper">
            <button onClick={() => setEnterName(!enterName)} title="Enter your name">
              <Signature />
            </button>
            <div className={`input-wrapper ${!enterName ? "enter-your-name-hidden" : "enter-your-name-open"}`}>
              <input
                className="enter-your-name"
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setEnterName(false)}
                placeholder="Enter your name"
              />
            </div>
          </div>
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
