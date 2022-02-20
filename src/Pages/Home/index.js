import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Favorites from 'Components/Favorites';
import Skeleton from '@mui/material/Skeleton';
import Arrow from 'assests/images/arrow.svg';
import Quote from './Quote/Quote';
import './index.scss';

const Home = ({ name }) => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    const data = {
      method: 'GET',
      url: `https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=motivational`,
    };
    setLoading(true);
    axios(data)
      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {
          return setQuote(response.data);
        }
      })
      .catch((error) => {
        console.error(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
                {greetingMessage} {name ? <span>{name}</span> : 'Guest'}
              </h1>
              <span>
                Today is <Moment format="dddd DD.MM.YYYY" />
              </span>
              <h2>
                <Moment format="HH:mm" />
              </h2>
            </div>
            {loading ? (
              <Skeleton variant="text" animation="wave" height={60} width={`${100}%`} />
            ) : (
              <>
                {quote?.quotes?.map((quote, index) => {
                  return <Quote key={index} quote={quote} />;
                })}
              </>
            )}
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
