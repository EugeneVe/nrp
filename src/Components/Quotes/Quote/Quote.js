import React from 'react';
import './Quote.scss';

const Quote = ({ quote }) => {
  return (
    <div className="quotes-wrapper">
      <p className="quote">{quote.text}</p>
      <p className="author">{quote.author}</p>
    </div>
  );
};

export default Quote;
