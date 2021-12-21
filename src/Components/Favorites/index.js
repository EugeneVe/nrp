import React, { useState } from "react";
import Weather from "assests/images/weather.svg";
import GoogleImage from "assests/images/googleImage.svg";
import GoogleTranslate from "assests/images/googleTranslate.svg";
import GoogleNews from "assests/images/googleNews.svg";
import YouTube from "assests/images/youTube.svg";
import Twitter from "assests/images/twitter.svg";
import Inoreader from "assests/images/inoreader.svg";
import Facebook from "assests/images/facebook.svg";
import "./index.scss";

const FavLinks = ({ link, title, icon }) => {
  return (
    <a href={link} title={title} target="blank" className="svgImg">
      <img src={icon} alt="" />
    </a>
  );
};

const Favorites = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="favContainer">
      <button className="favMargin navUnderlineNone sendButton">
        <div onClick={() => setToggle(!toggle)}>
          <span>{toggle ? "Hide" : "Favorites"}</span>
        </div>
      </button>

      <div className={toggle ? "favInside" : "favInside-hidden"}>
        <FavLinks title="Weather" link="https://weather.com/uk-UA/weather/today/l/UPXX0014:1:UP" icon={Weather} />
        <FavLinks title="Google image search" link="https://images.google.com/" icon={GoogleImage} />
        <FavLinks title="Google Translate" link="https://translate.google.com.ua" icon={GoogleTranslate} />
        <FavLinks title="Google News" link="https://news.google.com" icon={GoogleNews} />
        <FavLinks title="YouTube" link="https://youtube.com" icon={YouTube} />
        <FavLinks title="Twitter" link="https://twitter.com" icon={Twitter} />
        <FavLinks title="Inoreader" link="https://www.inoreader.com" icon={Inoreader} />
        <FavLinks title="Facebook" link="https://www.facebook.com" icon={Facebook} />
      </div>
    </div>
  );
};

export default Favorites;
