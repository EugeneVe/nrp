import React from "react"
import "../sass/home.scss"
import Moment from "react-moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Blurswitch from "./Blurswitch"
import quotesArrey from "../json/quotes.json"

// Date & Greeter
const currentHour = new Date().getHours()
const greetingMessage =
  currentHour >= 4 && currentHour < 12
    ? "Good morning"
    : currentHour >= 12 && currentHour <= 17
    ? "Good afternoon"
    : currentHour > 17 || currentHour < 4
    ? "Good evening"
    : "Welcome"

// Citats
const randomQuote = Math.floor(Math.random() * quotesArrey.length)
const quotes = quotesArrey[randomQuote]

const Home = () => {
  return (
    <div className="MainContent">
      <div className="home">
        <div className="containerWarp contentInner">
          <div className="searchWrapper">
            <div className="formWrap">
              <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} className="googleSearch" />
                <form id="search" action="https://google.com/search" target="_blank" type="GET">
                  <input className="formInner" placeholder="google search" type="search" name="q" />
                </form>
                <button form="search" className="gSearchBtn" alt="Google search" type="submit" title="search">
                  <svg width="15.846px" height="15.847px" viewBox="0 0 451.846 451.847">
                    <g>
                      <path
                        d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="dateTimeContent">
            <h1>{greetingMessage}</h1>
            <span>
              Today is <Moment format="dddd DD.MM.YYYY" />
            </span>
            <h2>
              <Moment format="HH:mm" />
            </h2>
            <h3>{quotes}</h3>
          </div>
          <Blurswitch />
        </div>
      </div>
    </div>
  )
}

export default Home
