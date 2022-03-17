import React, { useContext } from 'react';
import Moment from 'react-moment';
import { AllContext } from 'AllContext';
import Quotes from 'Components/Quotes/Quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Favorites from 'Components/Favorites';
import { ReactComponent as Arrow } from 'assests/images/arrow.svg';
import Weather from 'Components/Weather/Weather';
import './index.scss';

const Home = () => {
  const [name, setName] = useContext(AllContext);

  // Date & Greeter
  const currentHour = new Date().getHours();

  const greetingMessage =
    currentHour >= 4 && currentHour < 12
      ? 'Good morning'
      : currentHour >= 12 && currentHour <= 17
      ? 'Good afternoon'
      : currentHour > 17 || currentHour < 4
      ? 'Good evening'
      : 'Welcome';

  return (
    <div className="MainContent">
      <div className="containerWarp contentInnerPages">
        <div className="anyPage">
          <div className="empty">
            <h3 className="name">
              <a href="https://www.instagram.com/explore/tags/nowar/" target="blank">
                #NOWAR
              </a>
              <div className="line" />
            </h3>
            <div className="searchWrapper">
              <div className="formWrap">
                <div className="searchIcon">
                  <FontAwesomeIcon icon={faSearch} className="googleSearch" />
                  <form id="search" action="https://google.com/search" target="_blank" type="GET">
                    <input className="formInner" placeholder="google search" type="search" name="q" />
                  </form>
                  <button form="search" className="gSearchBtn" alt="Google search" type="submit" title="search">
                    <Arrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="dateTimeContent">
              <h1 title="Please enter your name">
                {greetingMessage} {name ? <span>{name}</span> : 'Guest'}
              </h1>
              <span>
                Today is <Moment format="dddd DD.MM.YYYY" />
              </span>
              <h2>
                <Moment format="HH:mm" />
              </h2>
            </div>
            <a
              href="https://weather.com/uk-UA/weather/today"
              title="Weather.com"
              target="blank"
              className="weather-link"
            >
              <Weather />
            </a>
            <Quotes />
            <div className="favorites">
              <Favorites />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
