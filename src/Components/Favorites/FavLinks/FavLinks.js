import React from 'react';

const FavLinks = ({ link, title, icon }) => {
  return (
    <a href={link} title={title} target="blank" className="svgImg">
      <img src={icon} alt="" />
    </a>
  );
};

export default FavLinks;
