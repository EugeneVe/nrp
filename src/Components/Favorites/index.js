import React, { useState } from 'react';
import FavLinks from './FavLinks/FavLinks';
// import { ReactComponent as Weather } from 'assests/images/weather.svg';
import { ReactComponent as GoogleImage } from 'assests/images/googleImage.svg';
import { ReactComponent as GoogleTranslate } from 'assests/images/googleTranslate.svg';
import { ReactComponent as GoogleNews } from 'assests/images/googleNews.svg';
import { ReactComponent as YouTube } from 'assests/images/youTube.svg';
import { ReactComponent as Twitter } from 'assests/images/twitter.svg';
import { ReactComponent as Inoreader } from 'assests/images/inoreader.svg';
import { ReactComponent as Facebook } from 'assests/images/facebook.svg';
import { ReactComponent as Instagram } from 'assests/images/instagram.svg';
import './index.scss';

const Favorites = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="favContainer">
      <button className="favMargin navUnderlineNone sendButton">
        <div onClick={() => setToggle(!toggle)}>
          <span>{toggle ? 'Hide' : 'Favorites'}</span>
        </div>
      </button>

      <div className={`fav-inside ${!toggle ? 'fav-inside-hidden' : 'fav-inside-open'}`}>
        {/* <FavLinks title="Weather" link="https://weather.com/uk-UA/weather/today/l/UPXX0014:1:UP" icon={Weather} /> */}
        <FavLinks title="Google image search" link="https://images.google.com/" icon={<GoogleImage />} />
        <FavLinks title="Deepl Translate" link="https://www.deepl.com/translator" icon={<GoogleTranslate />} />
        <FavLinks title="Google News" link="https://news.google.com" icon={<GoogleNews />} />
        <FavLinks title="YouTube" link="https://youtube.com" icon={<YouTube />} />
        <FavLinks title="Instagram" link="https://www.instagram.com/" icon={<Instagram />} />
        <FavLinks title="Twitter" link="https://twitter.com" icon={<Twitter />} />
        <FavLinks title="Inoreader" link="https://www.inoreader.com" icon={<Inoreader />} />
        <FavLinks title="Facebook" link="https://www.facebook.com" icon={<Facebook />} />
      </div>
    </div>
  );
};

export default Favorites;
