import React from "react"
import "../sass/home.scss"
import Moment from "react-moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Blurswitch from "./Blurswitch"

// Date
const currentHour = new Date().getHours()

// Greeter
const greetingMessage =
  currentHour >= 4 && currentHour < 12
    ? "Good morning"
    : currentHour >= 12 && currentHour <= 17
    ? "Good afternoon"
    : currentHour > 17 || currentHour < 4
    ? "Good evening"
    : "Welcome"(
        //Google search form
        document
      ).ready(function () {
        setInterval(
          (window.onload = function () {
            var form = document.querySelector("form")
            form.addEventListener("submit", function (e) {
              e.preventDefault()
              var search = form.querySelector("input[type=search]")
              search.value = "site:css-tricks.com " + search.value
              form.submit()
            })
          })
        )
      })

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
                <input form="search" className="gSearchBtn switch-on" alt="Google search" type="submit" value="⮞" />
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
          </div>
          <Blurswitch />
        </div>
      </div>
    </div>
  )
}

export default Home
