import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from '../../Components/Quotes/Quote/Quote';
import Skeleton from '@mui/material/Skeleton';

const Quotes = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState([]);

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
        console.log(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton variant="text" animation="wave" height={60} width={`${100}%`} />
      ) : (
        <>
          {quote?.quotes?.map((quote, index) => {
            return <Quote key={index} quote={quote} />;
          })}
        </>
      )}
    </>
  );
};

export default Quotes;
