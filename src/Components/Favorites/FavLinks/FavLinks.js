import React from 'react';

const FavLinks = ({ link, title, icon }) => {
  return (
    <a href={link} title={title} target="blank" className="svgImg">
      {icon}
    </a>
  );
};

export default FavLinks;
