import React from "react";
import "../sass/style.scss";
import Blurswitch from "../Components/Blurswitch";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const Email = () => (
  <div className="MainContent">
    <div className="home">
      <div className="containerWarp contentInner textPcentered">
        <h2>Email Sent!</h2>
        <p className="faFeatherAlt">
          <FontAwesomeIcon icon={faFeatherAlt} />
        </p>
        <p>Go back to main page</p>
        <Link to="/" className="navUnderlineNone navList sendButton">
          <p>Home</p>
        </Link>
        <Blurswitch />
      </div>
    </div>
  </div>
);

export default Email;
