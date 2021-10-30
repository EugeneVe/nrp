import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Favorites from "Components/Favorites";
import quotesArrey from "json/quotes.json";
import Arrow from "assests/images/arrow.svg";
import "./index.scss";

const Home = ({ initialName = "" }) => {
  const [name, setName] = useState(() => window.localStorage.getItem("name") || initialName);
  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Date & Greeter
  const currentHour = new Date().getHours();

  const greetingMessage =
    currentHour >= 4 && currentHour < 12
      ? "Good morning"
      : currentHour >= 12 && currentHour <= 17
      ? "Good afternoon"
      : currentHour > 17 || currentHour < 4
      ? "Good evening"
      : "Welcome";
  // Quotes
  const randomQuote = Math.floor(Math.random() * quotesArrey.length);
  const quotes = quotesArrey[randomQuote];

  return (
    <>
      <form className="enterYourName formInner">
        <label htmlFor="name" className="labelNameStyle" />
        <input
          title="Your name for Greeter"
          defaultValue=""
          onChange={handleChange}
          id="name"
          placeholder="Your name"
        />
      </form>
      <div className="MainContent">
        <div className="containerWarp contentInnerPages">
          <div className="anyPage">
            <div className="empty">
              <h3 className="name">Eugene Veprytskyi page</h3>
              <div className="searchWrapper">
                <div className="formWrap">
                  <div className="searchIcon">
                    <FontAwesomeIcon icon={faSearch} className="googleSearch" />
                    <form id="search" action="https://google.com/search" target="_blank" type="GET">
                      <input className="formInner" placeholder="google search" type="search" name="q" />
                    </form>
                    <button form="search" className="gSearchBtn" alt="Google search" type="submit" title="search">
                      <img src={Arrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="dateTimeContent">
                <h1 title="Please enter your name">
                  {greetingMessage} {name ? <>{name}</> : "Guest"}
                </h1>
                <span>
                  Today is <Moment format="dddd DD.MM.YYYY" />
                </span>
                <h2>
                  <Moment format="HH:mm" />
                </h2>
                <h3>{quotes}</h3>
              </div>
              <div className="favorites">
                <Favorites />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
